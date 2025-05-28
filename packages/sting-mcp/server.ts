import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  hiStingToolCallback,
  hiStingToolDescription,
  hiStingToolName,
  hiStingToolSchema,
} from "./src/tools/hiSting.js";
import {
  getStingComponentDocsToolCallback,
  getStingComponentDocsToolDescription,
  getStingComponentDocsToolName,
  getStingComponentDocsToolSchema,
} from "./src/tools/getStingComponentDocs.js";

class StingMcpServer {
  private server: McpServer;
  private transport: StdioServerTransport;

  constructor() {
    this.server = new McpServer({
      name: "sting-mcp-server",
      version: "1.0.0",
    });
    this.transport = new StdioServerTransport();
  }

  private registerTools(): void {
    this.server.tool(
      hiStingToolName,
      hiStingToolDescription,
      hiStingToolSchema,
      hiStingToolCallback
    );

    this.server.tool(
      getStingComponentDocsToolName,
      getStingComponentDocsToolDescription,
      getStingComponentDocsToolSchema,
      getStingComponentDocsToolCallback
    );
  }

  public async start(): Promise<void> {
    try {
      this.registerTools();
      console.log("Sting MCP connected successfully.");
      await this.server.connect(this.transport);
    } catch (e: unknown) {
      console.error("Error in sting-mcp server:", e instanceof Error ? e.message : e);
      process.exit(1);
    }
  }
}

// Create and start the server
const stingServer = new StingMcpServer();
stingServer.start();
