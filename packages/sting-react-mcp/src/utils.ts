import { readdirSync } from "fs";
import { join } from "path";
import path from "path";

const PROJECT_ROOT_DIRECTORY = path.resolve(__dirname, "../../");

const KNOWLEDGEBASE_DIRECTORY = join(PROJECT_ROOT_DIRECTORY, "knowledgebase");

console.log("Knowledgebase directory-------:", KNOWLEDGEBASE_DIRECTORY);

/**
 * Reads the files names of knowledgebase directory and returns a list of available Sting components
 */

const getStingComponentsList = (): string[] => {
  const stingComponentsList: string[] = [];
  try {
    // Read all markdown files and strip the .md extension
    const files = readdirSync(KNOWLEDGEBASE_DIRECTORY)
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(".md", ""));
    if (files.length > 0) {
      files.forEach((file) => {
        stingComponentsList.push(file);
      });
    }
  } catch (e: unknown) {
    console.error("Error reading knowledgebase directory:", e);
    return [];
  }
  return stingComponentsList;
};

const handleError = ({
  toolName,
  errorObject,
  mcpErrorMessage = "",
}: {
  toolName: string;
  errorObject?: unknown;
  mcpErrorMessage?: string;
}): {
  isError: true;
  content: Array<{ type: "text"; text: string }>;
} => {
  if (errorObject) {
    //   Sentry.captureException(errorObject);
  }
  return {
    isError: true,
    content: [
      {
        type: "text",
        text: errorObject
          ? `Error in ${toolName}: ${
              errorObject instanceof Error
                ? errorObject.message
                : String(errorObject)
            }`
          : mcpErrorMessage,
      },
    ],
  };
};

export { getStingComponentsList, KNOWLEDGEBASE_DIRECTORY, handleError };
