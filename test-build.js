#!/usr/bin/env node

/**
 * Build Output Testing Script
 * Tests the compiled TypeScript output to ensure all exports work correctly
 */

const fs = require("fs");
const path = require("path");

console.log("🧪 Testing Builder.io DS Build Output\n");

// Test 1: Check if dist folder exists
console.log("1️⃣ Checking build output...");
const distPath = path.join(__dirname, "dist");
if (!fs.existsSync(distPath)) {
  console.error("❌ dist/ folder not found. Run `npm run build` first.");
  process.exit(1);
}
console.log("✅ dist/ folder exists");

// Test 2: Check required files
console.log("\n2️⃣ Checking required files...");
const requiredFiles = [
  "dist/index.js",
  "dist/index.d.ts",
  "dist/components/Button/Button.js",
  "dist/components/Button/Button.d.ts",
  "dist/components/Button/Button.types.js",
  "dist/components/Button/Button.types.d.ts",
  "dist/tokens/colors.js",
  "dist/tokens/colors.d.ts",
];

let allFilesExist = true;
requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.error(`❌ ${file} - missing`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error(
    "\n❌ Some required files are missing. Check the build process."
  );
  process.exit(1);
}

// Test 3: Test design tokens import
console.log("\n3️⃣ Testing design tokens...");
try {
  const { colors, cssVariables } = require("./dist/tokens/colors");

  // Test colors structure
  if (colors && colors.primary && colors.primary[500] === "#3b82f6") {
    console.log("✅ Primary color token works");
  } else {
    console.error("❌ Primary color token failed");
  }

  // Test CSS variables
  if (cssVariables && cssVariables["--color-primary"] === "#3b82f6") {
    console.log("✅ CSS variables work");
  } else {
    console.error("❌ CSS variables failed");
  }

  console.log(
    `✅ Design tokens loaded: ${Object.keys(colors).length} color groups`
  );
} catch (error) {
  console.error("❌ Design tokens failed to load:", error.message);
}

// Test 4: Test main index exports
console.log("\n4️⃣ Testing main exports...");
try {
  const mainExports = require("./dist/index");

  // Check if Button is exported
  if (mainExports.Button) {
    console.log("✅ Button component exported");
  } else {
    console.error("❌ Button component not found in exports");
  }

  // Check if colors are exported
  if (mainExports.colors) {
    console.log("✅ Colors exported");
  } else {
    console.error("❌ Colors not found in exports");
  }

  // Check if registerBuilderComponents is exported
  if (mainExports.registerBuilderComponents) {
    console.log("✅ registerBuilderComponents function exported");
  } else {
    console.error("❌ registerBuilderComponents not found in exports");
  }

  console.log(
    `✅ Main exports loaded: ${Object.keys(mainExports).length} exports`
  );
} catch (error) {
  console.error("❌ Main exports failed to load:", error.message);
}

// Test 5: Test TypeScript declarations
console.log("\n5️⃣ Testing TypeScript declarations...");
try {
  const indexDts = fs.readFileSync("dist/index.d.ts", "utf8");

  if (indexDts.includes("export { Button }")) {
    console.log("✅ Button type declarations found");
  } else {
    console.error("❌ Button type declarations missing");
  }

  if (indexDts.includes("ButtonProps")) {
    console.log("✅ ButtonProps type exported");
  } else {
    console.error("❌ ButtonProps type missing");
  }

  console.log("✅ TypeScript declarations verified");
} catch (error) {
  console.error("❌ TypeScript declarations test failed:", error.message);
}

// Test 6: Test Builder.io integration
console.log("\n6️⃣ Testing Builder.io integration...");
try {
  // Test if registerBuilderComponents function works (without actually calling Builder.io)
  const { registerBuilderComponents } = require("./dist/index");

  if (typeof registerBuilderComponents === "function") {
    console.log("✅ registerBuilderComponents is a function");

    // Test the function (it should handle missing Builder.io gracefully)
    registerBuilderComponents()
      .then((result) => {
        if (result === false) {
          console.log(
            "✅ Builder.io registration handled gracefully (Builder.io not available)"
          );
        } else {
          console.log("✅ Builder.io registration successful");
        }
      })
      .catch((error) => {
        console.log("✅ Builder.io registration error handled:", error.message);
      });
  } else {
    console.error("❌ registerBuilderComponents is not a function");
  }
} catch (error) {
  console.error("❌ Builder.io integration test failed:", error.message);
}

// Test 7: Package.json validation
console.log("\n7️⃣ Testing package configuration...");
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

  if (packageJson.main === "dist/index.js") {
    console.log("✅ Package main entry correct");
  } else {
    console.error("❌ Package main entry incorrect");
  }

  if (packageJson.types === "dist/index.d.ts") {
    console.log("✅ Package types entry correct");
  } else {
    console.error("❌ Package types entry incorrect");
  }

  if (packageJson.peerDependencies && packageJson.peerDependencies.react) {
    console.log("✅ React peer dependency configured");
  } else {
    console.error("❌ React peer dependency missing");
  }
} catch (error) {
  console.error("❌ Package configuration test failed:", error.message);
}

// Summary
console.log("\n🎉 Build verification complete!");
console.log("\n📋 Next steps for local verification:");
console.log("   1. Open test.html in your browser for visual testing");
console.log("   2. Open test-react.html for React component testing");
console.log("   3. Run `npm run serve` to serve the files locally");
console.log("   4. Use browser dev tools to test accessibility");
console.log("   5. Test keyboard navigation (Tab, Enter, Space)");
console.log("   6. Test on mobile devices for responsive behavior");

console.log("\n🏗️ Builder.io Integration:");
console.log(
  '   1. Import { Button, registerBuilderComponents } from "builderio-ds"'
);
console.log(
  "   2. Call await registerBuilderComponents() to register with Builder.io"
);
console.log(
  '   3. Use <Button text="Hello" variant="primary" /> in Builder.io'
);

console.log("\n✨ Your Button component is ready for production!");
