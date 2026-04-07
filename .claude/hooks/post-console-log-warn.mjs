#!/usr/bin/env node

/**
 * PostToolUse hook: warn about console.log in edited files
 * Non-blocking — emits stderr (terminal / verbose; not chat UI for PostToolUse)
 *
 * Input: JSON on stdin (Claude Code hooks).
 */

import { readFileSync } from "node:fs";
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
  const content = readFileSync(filePath, "utf8");
  const matches = content.match(/console\.(log|debug|info)\(/g);
  if (matches && matches.length > 0) {
    process.stderr.write(
      `[warn] ${filePath} contains ${matches.length} console.log statement(s) — remove before committing\n`
    );
  }
} catch {
  // file not readable — skip
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
