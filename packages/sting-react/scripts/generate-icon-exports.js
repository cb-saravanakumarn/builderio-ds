#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to generate lucide-icons.ts with only Icon-suffixed exports from lucide-react
 * Usage: node scripts/generate-icon-exports.js
 */

try {
	console.log('🔍 Generating Icon-suffixed exports from lucide-react...');

	// Import lucide-react to get all exports
	const lucide = require('lucide-react');

	// Filter exports to get only Icon-suffixed ones (excluding LucideProps)
	const allExports = Object.keys(lucide);
	const iconExports = allExports.filter(
		(name) => name.endsWith('Icon') && name !== 'LucideProps',
	);

	// Sort alphabetically for consistent output
	iconExports.sort();

	// Generate the file content
	const content = `// Auto-generated file with Icon-suffixed lucide-react exports
// Generated on ${new Date().toISOString()}
// Run: npm run generate-icons (or node scripts/generate-icon-exports.js) to regenerate

export {
${iconExports.map((name) => `  ${name}`).join(',\n')}
} from 'lucide-react';

export { type LucideProps as SIconProps } from 'lucide-react';
export { DynamicIcon as SIcon, type IconName as SIconNames } from 'lucide-react/dynamic';

// Total Icon-suffixed exports: ${iconExports.length}
// Total lucide-react exports: ${allExports.length}
`;

	// Write to the components directory
	const outputPath = path.join(__dirname, '../src/components/lucide-icons.ts');
	fs.writeFileSync(outputPath, content, 'utf8');

	console.log(`✅ Successfully generated lucide-icons.ts`);
	console.log(`📊 Stats:`);
	console.log(`   - Icon-suffixed exports: ${iconExports.length}`);
	console.log(`   - Total lucide exports: ${allExports.length}`);
	console.log(`   - Output file: ${outputPath}`);

	// Show some example exports
	console.log(`📝 Sample exports: ${iconExports.slice(0, 5).join(', ')}...`);
} catch (error) {
	console.error('❌ Error generating icon exports:', error.message);
	process.exit(1);
}
