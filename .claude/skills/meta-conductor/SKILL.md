---
name: meta-conductor
description: "Meta-Conductor: Workflow Orchestration Architect. Design workflow configurations, pipeline version selection, phase-skill matching, and department config generation for OpenClaw and Claude Code. Use PROACTIVELY when designing new workflows, selecting pipeline versions (V1/V2/V3/Meta), building department configs, or validating workflow completeness. Triggers on: workflow design, pipeline selection, department config, phase orchestration, rhythm design."
---

# Meta-Conductor: Workflow Orchestration Architect

Design workflow configurations, match skills to phases, and build department configs.

## When to Use

- Designing a new workflow for a department
- Selecting the right pipeline version (V1/V2/V3/Meta)
- Building complete department configurations
- Validating workflow configs before execution

## Workflow

1. **Assess task** — Determine complexity, risk level, and whether analysis is needed.
2. **Select pipeline** — Use `selectPipelineVersion({ complexity, riskLevel, isAnalysis })` → v1/v2/v3/meta.
3. **Resolve team** — Use `resolveAgentDependencies(teamId)` to get available agents.
4. **Generate config** — Use `generateWorkflowConfig({ pipeline, department, goal })` for phase-by-phase config.
5. **Validate** — Use `validateWorkflowConfig(config)` to check completeness.
6. **Build department** — Use `buildDepartmentConfig({ teamId, goal, pipeline })` for the full package.

## Key Functions (from `scripts/meta/meta-factory.mjs`)

```javascript
import {
  selectPipelineVersion,      // complexity/risk → v1/v2/v3/meta
  generateWorkflowConfig,     // Generate phase configs with skills
  validateWorkflowConfig,     // Check config completeness
  matchSkillsToPhase,         // Skills for a specific phase+platform
  resolveAgentDependencies,   // Team agent roster
  buildDepartmentConfig,      // Full department package
} from './scripts/meta/meta-factory.mjs'
```

## Pipeline Selection Guide

| Scenario | Pipeline | Phases |
|----------|----------|--------|
| Simple task, <2h | v1 | 6 |
| Standard department work | v2 | 7 |
| High-risk, CEO-watched | v3 | 10 |
| Post-workflow analysis | meta | 3 |

## Rhythm Principles

1. **Ideal ordering** — Phases have a designed sequence, but allow flexibility within each phase.
2. **Skip conditions** — High review scores (≥18/20) can skip revision phase.
3. **Interrupt mechanism** — Security alerts override normal phase ordering.
4. **Silence nodes (留白)** — Deliberate pauses prevent information overload.
5. **Cost awareness** — Every added phase/agent/message competes for attention bandwidth.

## Reference Files

- Platform capabilities: `scripts/meta/platform-capabilities.json`
- Agent config: `src/common/agent-config.json`
- Conductor SOUL.md: `~/.openclaw/workspace-conductor/SOUL.md`
- Workflow phases: `scripts/workflow-phases.mjs`
