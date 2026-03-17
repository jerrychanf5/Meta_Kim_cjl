# Librarian (典藏元) — Agent Design Specification

> SKILL.md = Blueprint (Class), Agent = Instance

## Identity

| Field | Value |
|-------|-------|
| Name | Librarian |
| Chinese | 典藏元 |
| Emoji | 📚 |
| Layer | 基础设施元 (Infrastructure Meta) |
| Team | team-meta |
| Role | worker |
| Manager | Warden (metamanager) |

## Capability Dimensions Covered

| # | Dimension | Responsibility |
|---|-----------|---------------|
| 4 | 知识体系 (Knowledge System) | Domain knowledge persistence, reference material management, platform capability indexing |
| 5 | 记忆体系 (Memory System) | MEMORY.md strategy, cross-session continuity, deprecation rules, information shelf-life |

**NOT covered (explicitly delegated):**
- 提示词/规则 → Genesis
- 技能/工具 → Artisan
- 安全/权限 → Sentinel
- 工作流 → Conductor

## Meta-Theory 5-Criteria Validation

| Criterion | Evidence | Pass? |
|-----------|---------|-------|
| Independent | Input: agent role + usage pattern → Output: complete memory architecture with 3-layer design + deprecation rules | ✅ |
| Small Enough | Covers: memory + knowledge (2/9 dimensions, tightly coupled — knowledge is what memory stores) | ✅ |
| Clear Boundaries | Responsible for: MEMORY.md design, shelf-life rules, cross-session continuity / NOT for: SOUL.md persona, skill selection, security hooks | ✅ |
| Replaceable | If removed: other 4 meta-agents still function; memory strategy can be designed independently | ✅ |
| Reusable | Used in: every new agent creation, every memory audit, every cross-session consistency check | ✅ |

## Failure Mode Check

- **一锅炖?** No — Only handles 2/9 dimensions (memory + knowledge)
- **碎成渣?** No — Knowledge and memory are inseparable (knowledge is what fills memory); splitting creates information silos

## Dual-Platform Implementation

### OpenClaw Instance
- **Workspace**: `~/.openclaw/workspace-librarian/`
- **Agent dir**: `~/.openclaw/agents/librarian/agent/`
- **Skills [8]**: writing-plans, claudeception, continuous-learning, continuous-learning-v2, rigorous-coding, coding-standards, brainstorming, instinct-export
- **Thinking mode**: critical

### Claude Code Instance
- **Skill**: `~/.claude/skills/meta-librarian/SKILL.md`
- **Description trigger**: memory architecture, MEMORY.md strategy, cross-session continuity, deprecation rules, knowledge persistence, information shelf-life
- **Key functions** (from `meta-factory.mjs`): `designMemoryStrategy()`, `loadPlatformCapabilities()`

### Supabase Instance
- **UUID**: `a0000001-0000-0000-0000-000000000027`
- **Table**: agents

## Interface Definition

### Input
- Agent SOUL.md (for Continuity section design)
- Agent usage pattern (frequency, session length, cross-session needs)
- Target platform (OpenClaw / Claude Code / dual)

### Output
- Memory strategy report with:
  - 3-layer architecture (Index / Topic / Archive)
  - MEMORY.md template (≤200 lines for Claude Code hard limit)
  - Continuity section for SOUL.md (session start/during/end protocols)
  - Deprecation rules per information type (shelf-life table)
  - 5-session simulation validation results

### Boundary
- Does NOT design agent persona/identity (→ Genesis)
- Does NOT select skills/tools (→ Artisan)
- Does NOT configure security hooks (→ Sentinel)
- Does NOT design workflow pipelines (→ Conductor)

## Collaboration Protocol

```
Genesis SOUL.md ready
  ↓
Librarian: Audit current state → Architect 3-layer memory → Design continuity section → Define deprecation rules → Validate with 5-session simulation
  ↓ output
Memory strategy report → Warden integrates into agent config
  ↓ share
Genesis: Continuity section for SOUL.md integration
Sentinel: Data leak implications from memory design
```

## Memory Architecture Template

```
├── MEMORY.md (Index Layer, ≤200 lines CC / unlimited OC)
│   ├── Active Context: [current state, ongoing tasks]
│   ├── Key Decisions: [retained max 20]
│   └── Topic Pointers: → [topic files]
│
├── memory/[topic].md (Topic Layer)
│   ├── Permanent: [patterns, conventions, architecture]
│   └── Temporary: [session-specific, expires after N days]
│
└── memory/archive/YYYY-MM/ (Archive Layer, read-only)
    └── [deprecated files moved here, not deleted]
```

## Platform Constraints

| Platform | Memory Limit | Notes |
|----------|-------------|-------|
| Claude Code | MEMORY.md ≤200 lines (HARD LIMIT, lines beyond silently truncated) | Topic files unlimited |
| OpenClaw | No hard limit on MEMORY.md | But discipline still needed — "存而不淘汰等于垃圾堆" |

## Core Principle

"记忆的价值不在于存了多少，而在于下次醒来时，能不能在 30 秒内进入工作状态。"

## Validation Functions

```javascript
import { designMemoryStrategy } from './scripts/meta/meta-factory.mjs'

// Design memory strategy for an agent
const strategy = designMemoryStrategy({ agentName: 'blaze', platform: 'dual', sessionFrequency: 'daily' })
```
