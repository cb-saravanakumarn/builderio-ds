import { resolve, join } from 'path';
import { existsSync, readFileSync } from 'fs';
import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
   getStingComponentsList,
   handleError,
   KNOWLEDGEBASE_DIRECTORY
  } from '../utils.js';


  const stingComponentsList = getStingComponentsList();
  
  const getStingComponentDocsToolName = 'get_sting_component_docs';
  const getStingComponentDocsToolDescription =
    'Fetch the Sting Design System docs for the given list of components. Use this to get information about the components and their props while adding or changing a component.';

    const getStingComponentDocsToolSchema = {
      componentsList: z
        .string()
        .describe(
          `Comma separated list of semantic sting component names. E.g. "Button, Accordion". Make sure to use the semantic components (like PasswordInput for passwords). Possible values: ${stingComponentsList.join(
            ', ',
          )}`,
        ),
      currentProjectRootDirectory: z
        .string()
        .describe(
          "The working root directory of the consumer's project. Do not use root directory, do not use '.', only use absolute path to current directory",
        ),
    };

    const getStingComponentDocsToolCallback: ToolCallback<typeof getStingComponentDocsToolSchema> = async ({
      componentsList,
      currentProjectRootDirectory,
      }) => {  
      const components = componentsList.split(',').map((c) => c.trim());
      const docs: Record<string, string> = {};
      const invalidcomponents= components.filter((comp) => !stingComponentsList.includes(comp));
      if (invalidcomponents.length > 0) {
        return handleError({
          toolName: getStingComponentDocsToolName,
          mcpErrorMessage: `Invalid components: ${invalidcomponents.join(', ')}. Valid component docs values: ${stingComponentsList.join(
        ', ',
      )}. Make sure to call the parent component name (e.g. instead of calling ListViewFilters, call ListView)`,
        });
      }

      try{
         // Parse the comma-separated string into an array of component names
    const componentNames = componentsList.split(',').map((name: string) => name.trim());

    // Build the formatted documentation text
    let responseText = `Sting component documentation for: ${componentsList}\n\n`;

         //parse each component
      for (const componentName of componentNames) {
         responseText += `## ${componentName}\n\n`;

         try {
            const filePath = resolve(KNOWLEDGEBASE_DIRECTORY, `${componentName}.md`);
            const content = readFileSync(filePath, 'utf8');
            responseText += `${content}\n\n`;
          } catch (error: unknown) {
            responseText += `⚠️ Error: Could not read documentation for ${componentName}. The component may not exist or there may be an issue with the file.\n\n`;
          }
      }

      return {
         content: [
            {
               type: 'text',
               text: responseText,
            },
         ],
      }



      }
      catch (e: unknown) {
         return handleError({
            toolName: getStingComponentDocsToolName,
            errorObject: e,
            mcpErrorMessage: 'Failed to read component docs',
         });
         }
      

   }


   export {
       getStingComponentDocsToolName,  
       getStingComponentDocsToolDescription,
       getStingComponentDocsToolSchema,
       getStingComponentDocsToolCallback,
   }