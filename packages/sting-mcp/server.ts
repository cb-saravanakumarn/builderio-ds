import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { hiStingToolCallback, hiStingToolDescription, hiStingToolName, hiStingToolSchema } from './src/tools/hiSting.js';

// Wrap server setup in an async function
const startServer = async () => {
    try {
        const server = new McpServer({
            name: "sting-mcp-server",
            version: "1.0.0",
        });

        server.tool(hiStingToolName, hiStingToolDescription, hiStingToolSchema, hiStingToolCallback);


        // server.onRequest(ListToolsRequestSchema, async () => {
        //     return {
        //         tools: [{
        //             name: "calculate_sum",
        //             description: "Add two numbers together",
        //             inputSchema: {
        //                 type: "object",
        //                 properties: {
        //                     a: { type: "number" },
        //                     b: { type: "number" }
        //                 },
        //                 required: ["a", "b"]
        //             }
        //         }]
        //     };
        // });

        // server.onRequest(CallToolRequestSchema, async (request: any) => {
        //     if (request.params.name === "calculate_sum") {
        //         if (!request.params.arguments) {
        //             throw new McpError(ErrorCode.InvalidParams, "Missing arguments");
        //         }
        //         const { a, b } = request.params.arguments as { a: number; b: number };
        //         return { toolResult: a + b };
        //     }
        //     throw new McpError(ErrorCode.InvalidParams, "Tool not found");
        // });

        const transport = new StdioServerTransport();
        console.log('Sting MCP connected successfully.');
        await server.connect(transport);
    } catch(e) {
        console.error("Error in sting-mcp server:", e);
        process.exit(1);
    }
};

// Execute the async function
startServer();