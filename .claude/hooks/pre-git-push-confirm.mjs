#!/usr/bin/env node

/**
 * PreToolUse hook: remind before git push (injects context for Claude)
 *
 * Input: JSON on stdin. Bash tool uses tool_input.command.
 * Output: hookSpecificOutput per https://code.claude.com/docs/en/hooks#pretooluse-decision-control
 */

import process from "node:process";

const input = await readStdinJson();
const toolName = input.tool_name || "";
const command = input.tool_input?.command ?? "";

if (toolName !== "Bash") process.exit(0);
if (!command.match(/git\s+push/)) process.exit(0);

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      additionalContext:
        "⚠️ About to git push — have you reviewed the diff and run validate?",
    },
  })
);

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
