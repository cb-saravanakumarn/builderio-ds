#!/usr/bin/env node

const path = require("path");
const { spawn } = require("child_process");

// Get the path to the compiled server
const serverPath = path.join(__dirname, "..", "dist", "server.js");

// Spawn the server process
const server = spawn("node", [serverPath], {
  stdio: "inherit",
});

// Handle process termination
process.on("SIGINT", () => {
  server.kill("SIGINT");
});

process.on("SIGTERM", () => {
  server.kill("SIGTERM");
});

server.on("exit", (code) => {
  process.exit(code);
});
