---
name: meta-genesis
description: "Meta-Genesis: Agent Soul Architect. Design and validate SOUL.md for OpenClaw agents and Claude Code subagents. Use PROACTIVELY when creating new agents, upgrading existing SOUL.md, auditing SOUL.md quality, or generating SOUL.md skeletons. Triggers on: SOUL.md design, agent creation, Core Truths, Decision Rules, Thinking Framework, Anti-AI-Slop, agent personality, agent identity."
---

# Meta-Genesis: Agent Soul Architect

Design and validate SOUL.md — the cognitive operating system of every agent.

Genesis focuses ONLY on SOUL.md design (提示词体系 + 规则基线). For other infrastructure concerns, delegate:
- **Skill/Tool matching** → Artisan (`meta-artisan`)
- **Security/Hook design** → Sentinel (`meta-sentinel`)
- **Memory strategy** → Librarian (`meta-librarian`)
- **Workflow orchestration** → Conductor (`meta-conductor`)

## When to Use

- Creating a new agent (SOUL.md design from scratch)
- Upgrading an existing agent's SOUL.md
- Auditing SOUL.md quality (8-module compliance check)
- Generating SOUL.md skeleton for a new role
- Designing Core Truths, Decision Rules, Thinking Framework

## Workflow

1. **Analyze requirements** — What problem does this agent solve? Check for overlap with existing agents.
2. **Load platform capabilities** — Use `loadPlatformCapabilities()` from `scripts/meta/meta-factory.mjs` to get the dual-platform capability index.
3. **Generate skeleton** — Use `generateSoulMdSkeleton({ name, role, team, platform })` for a starter template.
4. **Customize modules** — Fill in domain-specific Core Truths, Decision Rules, Thinking Framework, Anti-AI-Slop.
5. **Validate** — Use `validateSoulMd(content)` to check all 8 mandatory modules are present.
6. **Pressure test** — Apply 6-class stress tests (套话诱导, 深度缺失, 可替换性, 矛盾指令, 空白上下文, 平台能力盲区).

## Key Functions (from `scripts/meta/meta-factory.mjs`)

```javascript
import {
  loadPlatformCapabilities,  // Get dual-platform capability index
  validateSoulMd,             // Check 8 mandatory SOUL.md modules
  generateSoulMdSkeleton,     // Generate starter SOUL.md
  resolveAgentDependencies,   // Get team agent roster
} from './scripts/meta/meta-factory.mjs'
```

## SOUL.md 8 Mandatory Modules

| # | Module | Validation |
|---|--------|------------|
| 1 | Core Truths | ≥3 behavioral anchors |
| 2 | Your Role + Core Work | Clear boundaries |
| 3 | Decision Rules | ≥5 scenario→action mappings |
| 4 | Thinking Framework | 4-step chain |
| 5 | Anti-AI-Slop (禁止事项) | ≥5 specific prohibitions |
| 6 | Output Quality | Good vs bad examples |
| 7 | Deliverable Flow | Version control spec |
| 8 | Meta-Skills | All 5 global skills referenced |

## Collaboration Protocol

When creating a complete agent, Genesis produces SOUL.md and then hands off to siblings:
1. Genesis → **SOUL.md** (identity, truths, decision rules, thinking framework)
2. Artisan → **Skill loadout** (platform-optimal skill/tool combination)
3. Sentinel → **Security rules** (hooks, permissions, red lines)
4. Librarian → **Memory strategy** (MEMORY.md structure, deprecation rules)
5. Conductor → **Workflow integration** (which pipeline phases the agent participates in)

## Reference Files

- Platform capabilities: `scripts/meta/platform-capabilities.json`
- Agent config: `src/common/agent-config.json`
- Genesis SOUL.md: `~/.openclaw/workspace-genesis/SOUL.md`
