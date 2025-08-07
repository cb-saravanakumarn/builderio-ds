// Main library exports

// Design Tokens
export { colors, cssVariables } from "./tokens/colors";

// Components - export the Button component
export { Button } from "./components/Button";

// Types
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  ButtonType,
  BuilderInputConfig,
} from "./components/Button";

// Builder.io registration helper
export const registerBuilderComponents = async () => {
  try {
    // Dynamic import to avoid errors if @builder.io/react is not installed
    const { Builder } = await import("@builder.io/react");
    const ButtonModule = await import("./components/Button");
    const ButtonComponent = ButtonModule.Button;

    if (
      Builder &&
      Builder.registerComponent &&
      ButtonComponent?.builderSettings
    ) {
      Builder.registerComponent(
        ButtonComponent,
        ButtonComponent.builderSettings
      );
      return true;
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.warn("Builder.io not available:", errorMessage);
  }
  return false;
};

// Import components and tokens for default export
import { Button, type ButtonComponent } from "./components/Button";
import { colors, cssVariables } from "./tokens/colors";

// Default export for the entire library
export default {
  Button,
  colors,
  cssVariables,
  registerBuilderComponents,
};
