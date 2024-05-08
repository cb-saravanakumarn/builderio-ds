const fs = require('fs');

// Function to add prefix to Tailwind directives
function addPrefixToTailwindDirectives(cssContent, prefix) {
    // Regular expression to match Tailwind directives
    const directiveRegex = /@apply\s+(.*?)(?=;|\n|$)/gs;
    
    // Replace Tailwind directives with prefixed version
    return cssContent.replace(directiveRegex, (match, classes) => {
        const prefixedClasses = classes
            .split(/\s+/)
            .map(className => `${prefix}${className}`)
            .join(' ');

        return `@apply s-s-s-s-s-s-s-${prefixedClasses}`;
    });
}

// Function to process CSS file and add prefix to Tailwind directives
function processCSSFile(filePath, prefix) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err}`);
            return;
        }

        const modifiedContent = addPrefixToTailwindDirectives(data, prefix);

        fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${err}`);
                return;
            }

            console.log(`Prefix added to Tailwind directives in ${filePath}`);
        });
    });
}

// Example usage
const prefix = 's-'; // Prefix to add

fs.readdir('/Users/cb-it-01-1591/Documents/cb-react-dls/packages/stingcss/components/', (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    for(file of files) {
        console.log(file)
        processCSSFile(`/Users/cb-it-01-1591/Documents/cb-react-dls/packages/stingcss/components/${file}`, prefix);
    }
})


