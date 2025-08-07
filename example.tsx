import React from "react";
import { Button, registerBuilderComponents } from "./src/index";

// Example usage of the Button component
const ButtonExamples: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Register components with Builder.io if available
  React.useEffect(() => {
    registerBuilderComponents().then((success) => {
      if (success) {
        console.log("Builder.io components registered successfully");
      } else {
        console.log("Builder.io not available or registration failed");
      }
    });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Button Component Examples</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Variants</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={handleClick}>
            Primary Button
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Secondary Button
          </Button>
          <Button variant="outline" onClick={handleClick}>
            Outline Button
          </Button>
          <Button variant="ghost" onClick={handleClick}>
            Ghost Button
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Sizes</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button size="small" onClick={handleClick}>
            Small
          </Button>
          <Button size="medium" onClick={handleClick}>
            Medium
          </Button>
          <Button size="large" onClick={handleClick}>
            Large
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>States</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button disabled onClick={handleClick}>
            Disabled
          </Button>
          <Button loading onClick={handleClick}>
            Loading
          </Button>
          <Button loading variant="outline">
            Loading Outline
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>With Icons</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button startIcon={<span>📥</span>} onClick={handleClick}>
            Download
          </Button>
          <Button
            endIcon={<span>→</span>}
            variant="outline"
            onClick={handleClick}
          >
            Continue
          </Button>
          <Button
            startIcon={<span>❤️</span>}
            endIcon={<span>🎉</span>}
            variant="ghost"
            onClick={handleClick}
          >
            Like & Share
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Links</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button href="https://builder.io" target="_blank" variant="primary">
            Visit Builder.io
          </Button>
          <Button href="#section" variant="outline">
            Jump to Section
          </Button>
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Full Width</h2>
        <Button fullWidth variant="primary" onClick={handleClick}>
          Full Width Button
        </Button>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Builder.io Text Prop Usage</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button
            text="Using Text Prop"
            variant="secondary"
            onClick={handleClick}
          />
          <Button text="Builder.io Compatible" variant="outline" size="large" />
        </div>
        <p style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.5rem" }}>
          The text prop is especially useful in Builder.io where you can edit
          the button text directly in the visual editor.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Complex Content</h2>
        <Button variant="primary" size="large" onClick={handleClick}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "1.25rem" }}>🚀</span>
            <div>
              <div style={{ fontWeight: "bold" }}>Get Started</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                Free trial
              </div>
            </div>
          </div>
        </Button>
      </section>

      <section>
        <h2>Accessibility</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button ariaLabel="Save your work" onClick={handleClick}>
            💾
          </Button>
          <Button
            ariaLabel="Delete item"
            variant="outline"
            onClick={handleClick}
          >
            🗑️
          </Button>
        </div>
        <p style={{ fontSize: "0.875rem", color: "#666", marginTop: "0.5rem" }}>
          Use aria-label for buttons with only icons or when the button text
          doesn't fully describe the action.
        </p>
      </section>
    </div>
  );
};

export default ButtonExamples;
