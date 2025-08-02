#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');

/**
 * Enhanced script to extract and optimize icon paths from lucide-static SVG files
 * Features:
 * - SVG optimization using SVGO
 * - Conversion of all SVG shapes (circle, rect, polyline, etc.) to paths
 * - Path merging to ensure single path per icon
 * - Better error handling and validation
 *
 * Usage: node scripts/extract-icon-paths.js
 */

// SVGO configuration for optimal icon processing
const svgoConfig = {
	plugins: [
		{
			name: 'preset-default',
			params: {
				overrides: {
					// Keep path data readable
					convertPathData: {
						floatPrecision: 2,
						transformPrecision: 2,
						removeUseless: true,
						straightCurves: false,
						lineShorthands: false,
						curveSmoothShorthands: false,
						forceAbsolutePath: false,
						utilizeAbsolute: false,
					},
				},
			},
		},
		// Keep viewBox for proper scaling (must be after preset-default)
		{
			name: 'removeViewBox',
			params: {
				disabled: true,
			},
		},
		// Merge multiple paths into a single path when possible
		{
			name: 'mergePaths',
			params: {
				force: true,
				noSpaceAfterFlags: true,
			},
		},
		// Remove unnecessary attributes
		{
			name: 'removeAttrs',
			params: {
				attrs: [
					'fill',
					'stroke',
					'stroke-width',
					'stroke-linecap',
					'stroke-linejoin',
				],
			},
		},
		// Convert shapes to paths for consistency
		'convertShapeToPath',
	],
};

/**
 * Convert circle to path
 */
function circleToPath(cx, cy, r) {
	return `M ${cx - r} ${cy} A ${r} ${r} 0 1 0 ${cx + r} ${cy} A ${r} ${r} 0 1 0 ${cx - r} ${cy}`;
}

/**
 * Convert rectangle to path
 */
function rectToPath(x, y, width, height, rx = 0, ry = 0) {
	if (rx === 0 && ry === 0) {
		// Simple rectangle
		return `M ${x} ${y} h ${width} v ${height} h -${width} Z`;
	} else {
		// Rounded rectangle
		const maxRx = Math.min(rx || ry || 0, width / 2);
		const maxRy = Math.min(ry || rx || 0, height / 2);
		return `M ${x + maxRx} ${y} h ${width - 2 * maxRx} a ${maxRx} ${maxRy} 0 0 1 ${maxRx} ${maxRy} v ${height - 2 * maxRy} a ${maxRx} ${maxRy} 0 0 1 -${maxRx} ${maxRy} h -${width - 2 * maxRx} a ${maxRx} ${maxRy} 0 0 1 -${maxRx} -${maxRy} v -${height - 2 * maxRy} a ${maxRx} ${maxRy} 0 0 1 ${maxRx} -${maxRy} Z`;
	}
}

/**
 * Convert line to path
 */
function lineToPath(x1, y1, x2, y2) {
	return `M ${x1} ${y1} L ${x2} ${y2}`;
}

/**
 * Convert polyline to path
 */
function polylineToPath(points) {
	const coords = points
		.trim()
		.split(/[\s,]+/)
		.map(Number);
	if (coords.length < 4) return '';

	let path = `M ${coords[0]} ${coords[1]}`;
	for (let i = 2; i < coords.length; i += 2) {
		path += ` L ${coords[i]} ${coords[i + 1]}`;
	}
	return path;
}

/**
 * Convert polygon to path (same as polyline but closed)
 */
function polygonToPath(points) {
	const path = polylineToPath(points);
	return path ? path + ' Z' : '';
}

/**
 * Extract attribute value from an SVG element string
 */
function extractAttribute(elementString, attributeName) {
	const regex = new RegExp(`${attributeName}="([^"]*)"`, 'i');
	const match = elementString.match(regex);
	return match ? match[1] : null;
}

/**
 * Extract and convert all SVG elements to paths
 */
function extractAllPathsFromSVG(svgContent) {
	const paths = [];

	// Extract existing paths
	const pathRegex = /<path[^>]*d="([^"]*)"[^>]*>/g;
	let match;
	while ((match = pathRegex.exec(svgContent)) !== null) {
		const pathData = match[1].trim();
		if (pathData) {
			paths.push(pathData);
		}
	}

	// Extract and convert circles
	const circleRegex = /<circle[^>]*>/g;
	while ((match = circleRegex.exec(svgContent)) !== null) {
		const elementString = match[0];
		const cx = parseFloat(extractAttribute(elementString, 'cx'));
		const cy = parseFloat(extractAttribute(elementString, 'cy'));
		const r = parseFloat(extractAttribute(elementString, 'r'));
		if (!isNaN(cx) && !isNaN(cy) && !isNaN(r)) {
			paths.push(circleToPath(cx, cy, r));
		}
	}

	// Extract and convert rectangles
	const rectRegex = /<rect[^>]*>/g;
	while ((match = rectRegex.exec(svgContent)) !== null) {
		const elementString = match[0];
		const x = parseFloat(extractAttribute(elementString, 'x') || '0');
		const y = parseFloat(extractAttribute(elementString, 'y') || '0');
		const width = parseFloat(extractAttribute(elementString, 'width'));
		const height = parseFloat(extractAttribute(elementString, 'height'));
		const rx = parseFloat(extractAttribute(elementString, 'rx') || '0');
		const ry = parseFloat(extractAttribute(elementString, 'ry') || '0');
		if (!isNaN(width) && !isNaN(height)) {
			paths.push(rectToPath(x, y, width, height, rx, ry));
		}
	}

	// Extract and convert lines
	const lineRegex = /<line[^>]*>/g;
	while ((match = lineRegex.exec(svgContent)) !== null) {
		const elementString = match[0];
		const x1 = parseFloat(extractAttribute(elementString, 'x1'));
		const y1 = parseFloat(extractAttribute(elementString, 'y1'));
		const x2 = parseFloat(extractAttribute(elementString, 'x2'));
		const y2 = parseFloat(extractAttribute(elementString, 'y2'));
		if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2)) {
			paths.push(lineToPath(x1, y1, x2, y2));
		}
	}

	// Extract and convert polylines
	const polylineRegex = /<polyline[^>]*>/g;
	while ((match = polylineRegex.exec(svgContent)) !== null) {
		const elementString = match[0];
		const points = extractAttribute(elementString, 'points');
		if (points && points.trim()) {
			const path = polylineToPath(points);
			if (path) paths.push(path);
		}
	}

	// Extract and convert polygons
	const polygonRegex = /<polygon[^>]*>/g;
	while ((match = polygonRegex.exec(svgContent)) !== null) {
		const elementString = match[0];
		const points = extractAttribute(elementString, 'points');
		if (points && points.trim()) {
			const path = polygonToPath(points);
			if (path) paths.push(path);
		}
	}

	return paths;
}

/**
 * Optimizes SVG content using SVGO
 */
function optimizeSVG(svgContent) {
	try {
		const result = optimize(svgContent, svgoConfig);
		return result.data;
	} catch (error) {
		console.warn(
			'⚠️  SVGO optimization failed, using original SVG:',
			error.message,
		);
		return svgContent;
	}
}

/**
 * Extracts viewBox from SVG content
 */
function extractViewBox(svgContent) {
	const viewBoxMatch = svgContent.match(/viewBox="([^"]*)"/);
	return viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
}

/**
 * Converts filename to icon name (PascalCase with Icon suffix)
 */
function convertFileNameToIconName(fileName) {
	return (
		fileName
			.replace('.svg', '')
			.split('-')
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join('') + 'Icon'
	);
}

/**
 * Validates that the processed icon is valid
 */
function validateIcon(iconData, fileName) {
	const { paths, viewBox } = iconData;

	if (!paths || paths.length === 0) {
		console.warn(`⚠️  No paths found in ${fileName}`);
		return false;
	}

	if (!viewBox) {
		console.warn(`⚠️  No viewBox found in ${fileName}`);
		return false;
	}

	// Check for extremely long or suspicious path data
	const totalPathLength = paths.join('').length;
	if (totalPathLength > 10000) {
		console.warn(
			`⚠️  Suspiciously long path data in ${fileName} (${totalPathLength} chars)`,
		);
	}

	return true;
}

try {
	console.log('🔍 Extracting and optimizing icon paths from lucide-static...');

	// Path to lucide-static icons directory
	const iconsDir = path.join(
		__dirname,
		'../../../node_modules/lucide-static/icons',
	);

	if (!fs.existsSync(iconsDir)) {
		throw new Error(`Icons directory not found: ${iconsDir}`);
	}

	const iconPaths = {};
	const svgFiles = fs
		.readdirSync(iconsDir)
		.filter((file) => file.endsWith('.svg'))
		.sort(); // Sort for consistent output

	console.log(`📊 Found ${svgFiles.length} SVG files`);
	console.log('🔧 Starting optimization and extraction...');

	let processedCount = 0;
	let skippedCount = 0;
	let optimizedCount = 0;

	for (const file of svgFiles) {
		const filePath = path.join(iconsDir, file);
		let svgContent = fs.readFileSync(filePath, 'utf8');
		const originalSize = svgContent.length;

		// Optimize SVG
		const optimizedSVG = optimizeSVG(svgContent);
		const optimizedSize = optimizedSVG.length;

		if (optimizedSize < originalSize) {
			optimizedCount++;
		}

		// Extract paths and viewBox
		const paths = extractAllPathsFromSVG(optimizedSVG);
		const viewBox = extractViewBox(optimizedSVG);

		const iconData = {
			name: convertFileNameToIconName(file),
			paths: paths,
			viewBox: viewBox,
		};

		// Validate the processed icon
		if (validateIcon(iconData, file)) {
			const kebabName = file.replace('.svg', '');
			iconPaths[kebabName] = iconData;
			processedCount++;

			// Log progress for large batches
			if (processedCount % 100 === 0) {
				console.log(
					`📝 Processed ${processedCount}/${svgFiles.length} icons...`,
				);
			}
		} else {
			skippedCount++;
		}
	}

	// Save to JSON file
	const outputPath = path.join(
		__dirname,
		'../src/components/SIcon/icon-paths.json',
	);
	const outputDir = path.dirname(outputPath);

	// Create SIcon directory if it doesn't exist
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	const jsonContent = JSON.stringify(iconPaths, null, 2);
	fs.writeFileSync(outputPath, jsonContent, 'utf8');

	// Generate statistics
	const totalIcons = Object.keys(iconPaths).length;
	const singlePathIcons = Object.values(iconPaths).filter(
		(icon) => icon.paths.length === 1,
	).length;
	const multiPathIcons = totalIcons - singlePathIcons;
	const avgPathsPerIcon =
		Object.values(iconPaths).reduce((sum, icon) => sum + icon.paths.length, 0) /
		totalIcons;

	console.log('\n✅ Icon extraction completed!');
	console.log(`📊 Statistics:`);
	console.log(`   • Total icons processed: ${totalIcons}`);
	console.log(`   • Icons skipped: ${skippedCount}`);
	console.log(`   • Icons optimized: ${optimizedCount}`);
	console.log(
		`   • Single path icons: ${singlePathIcons} (${((singlePathIcons / totalIcons) * 100).toFixed(1)}%)`,
	);
	console.log(
		`   • Multi-path icons: ${multiPathIcons} (${((multiPathIcons / totalIcons) * 100).toFixed(1)}%)`,
	);
	console.log(`   • Average paths per icon: ${avgPathsPerIcon.toFixed(1)}`);
	console.log(`📝 Output file: ${outputPath}`);
	console.log(`📏 File size: ${(jsonContent.length / 1024).toFixed(1)} KB`);

	// Show some sample icons
	const sampleIcons = Object.keys(iconPaths).slice(0, 5);
	console.log(`🎯 Sample icons: ${sampleIcons.join(', ')}`);

	// Show icons with most paths (potential optimization candidates)
	const multiPathSamples = Object.entries(iconPaths)
		.filter(([_, icon]) => icon.paths.length > 1)
		.sort(([_, a], [__, b]) => b.paths.length - a.paths.length)
		.slice(0, 3)
		.map(([name, icon]) => `${name} (${icon.paths.length} paths)`);

	if (multiPathSamples.length > 0) {
		console.log(`🔍 Icons with most paths: ${multiPathSamples.join(', ')}`);
	}
} catch (error) {
	console.error('❌ Error extracting icon paths:', error.message);
	console.error(error.stack);
	process.exit(1);
}
