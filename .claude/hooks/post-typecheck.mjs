#!/usr/bin/env node

/**
 * PostToolUse hook: TypeScript type-check after editing .ts/.tsx files
 * Runs tsc --noEmit and outputs warnings (non-blocking)
 *
 * Input: JSON on stdin (Claude Code hooks).
 */

import { execSync } from "node:child_process";
import process from "node:process";

const input = await readStdinJson();
const toolName = input.tool_name || "";
const ti = input.tool_input || {};
const filePath =
  ti.file_path ||
  ti.path ||
  input.tool_response?.filePath ||
  input.tool_response?.file_path ||
  "";

if (!["Edit", "Write"].includes(toolName)) process.exit(0);
if (!filePath.match(/\.(ts|tsx)$/)) process.exit(0);

try {
  execSync("npx tsc --noEmit --pretty", {
    stdio: "pipe",
    timeout: 30000,
    cwd: input.cwd || process.cwd(),
  });
} catch (err) {
  const output = err.stdout?.toString() || "";
  if (output.includes("error TS")) {
    process.stderr.write(`[tsc] Type errors detected after editing ${filePath}\n`);
  }
}

async function readStdinJson() {
  let raw = "";
  for await (const chunk of process.stdin) {
    raw += chunk;
  }
  try {
    return raw.trim() ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
