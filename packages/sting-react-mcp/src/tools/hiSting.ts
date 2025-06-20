import type { ToolCallback } from '@modelcontextprotocol/sdk/server/mcp.js';
// import { analyticsToolCallEventName, getPackageJSONVersion, sendAnalytics } from '../utils.js';

const hiStingMessage = `
👋 Welcome to Sting AI MCP v${'0.0.1'} — your assistant for Chargebee's Sting Design System!

Here's what I can help you with:
• 🚀 Start a new Sting project — just say: "Create a new Sting project with a login page."
• 🛠️ Build UIs fast — try: "Create a Dashboard layout with Sidebar, Avatar Menu, and a main content area with a breadcrumb"
• 📚 Learn components — ask: "How do I use the OTPInput component?"
• ...and much more!

Happy vibe coding! 💙
  `;

const hiStingToolName = 'hi_Sting';

const hiStingToolDescription =
  'Call this when the user says "hi Sting", "hey Sting" or "namaste Sting" in any language. Tool that returns how to use Sting mcp';

const hiStingToolSchema = {};

const hiStingToolCallback: ToolCallback<typeof hiStingToolSchema> = () => {
  // sendAnalytics({
  //   eventName: analyticsToolCallEventName,
  //   properties: {
  //     toolName: hiStingToolName,
  //   },
  // });
  return {
    content: [
      {
        type: 'text',
        text: hiStingMessage,
      },
    ],
  };
};

export { hiStingToolName, hiStingToolDescription, hiStingToolSchema, hiStingToolCallback };
