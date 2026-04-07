#!/usr/bin/env node

/**
 * PostToolUse hook: auto-format JS/TS files after Edit/Write
 * Runs prettier on the modified file if it's a .js/.ts/.jsx/.tsx file
 *
 * Input: JSON on stdin (Claude Code hooks). See https://code.claude.com/docs/en/hooks
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
if (!filePath.match(/\.(js|ts|jsx|tsx|mjs|cjs)$/)) process.exit(0);

try {
  execSync(`npx prettier --write "${filePath}"`, {
    stdio: "ignore",
    timeout: 10000,
    cwd: input.cwd || process.cwd(),
  });
} catch {
  // prettier not available or failed — no big deal
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
