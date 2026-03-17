---
name: meta-theory
description: |
  Agent system design methodology based on the "最小可治理单元" (Minimum Governable Unit) theory.
  Use this skill PROACTIVELY when:
  - Designing new AI agent systems or multi-agent architectures
  - Deciding how to split responsibilities across agents
  - Evaluating whether an existing agent is doing too much (一锅炖) or the system is over-fragmented (碎成渣)
  - Planning agent team structures, workflows, or organizational hierarchies
  - Reviewing agent SOUL.md / system prompts for scope creep
  - Anyone mentions "元", "meta", "agent拆分", "职责划分", "治理", or "organizational design for AI"
  This skill provides the complete theoretical framework — the 5 criteria, 3 layers, 9 dimensions, 2 failure modes, and validation methodology.
---

# Meta-Theory: 最小可治理单元方法论

_Source: 老金 2.5h livestream "从单一指令到全组织行动"_

## Core Definition

**元 = 最小可治理单元 (Minimum Governable Unit)**

Not "最小执行单位" — the word **治理** (governable) is the key distinction. A button is a unit. A code block is a unit. But they can't necessarily be orchestrated, verified, replaced, or evolved. A 元 can.

## The 5 Criteria (元的五标准)

Every valid 元 must satisfy ALL five. If any fails, it's not a proper 元 — it's either too big, too small, or too tangled.

| # | Criterion | What It Means | Red Flag If Violated |
|---|-----------|---------------|---------------------|
| 1 | **独立 (Independent)** | Can receive input and produce output on its own. Can be understood, discussed, and invoked in isolation. | "This agent needs Agent X running simultaneously to do anything" |
| 2 | **足够小 (Small Enough)** | Single domain of responsibility. Splitting further would add governance cost without benefit. | "This agent handles prompts AND security AND memory AND tools" |
| 3 | **边界清晰 (Clear Boundaries)** | Explicitly defined: what it IS responsible for, what it IS NOT. | "Well, Agent A sometimes does security checks too, when it feels like it" |
| 4 | **可替换 (Replaceable)** | Swapping it out doesn't collapse the system. Can be upgraded, replaced, or reorganized. | "If we change the review agent, the entire pipeline breaks" |
| 5 | **可复用 (Reusable)** | Useful across multiple tasks/scenarios. Not a one-off hack. | "This only works for that one specific workflow we ran last Tuesday" |

### Validation Checklist

When evaluating a candidate 元, fill this table:

```
| Criterion       | Evidence (具体证据)                    | Pass? |
|-----------------|---------------------------------------|-------|
| Independent     | Input: ___ → Output: ___              | ✅/❌  |
| Small Enough    | Covers domain: ___ (and nothing else) | ✅/❌  |
| Clear Boundaries| Responsible for: ___ / NOT for: ___   | ✅/❌  |
| Replaceable     | If removed, affects: ___              | ✅/❌  |
| Reusable        | Used in scenarios: ___                | ✅/❌  |
```

All 5 must pass. 4/5 = redesign needed.

## The 2 Failure Modes (两种死法)

These are the two extremes that 元 theory exists to avoid. Every design decision should be checked against both.

### 死法一: 一锅炖 (Everything in One Pot)

**Symptom**: One agent/prompt handles everything. Looks powerful. Actually overloaded.

- Context, attention, judgment, and stability are all finite resources
- Cramming everything in doesn't create omnipotence — it creates a "fat system" that will eventually cross-contaminate, fatigue, and lose control
- "一个人什么都干，不叫强。在系统设计里，这通常意味着偷懒。"

**Diagnostic questions**:
- Does this agent have more than 2 unrelated domains of responsibility?
- Would its SOUL.md/system prompt exceed 300 lines if all responsibilities were properly documented?
- Could you split its work across 2+ specialists without creating sync overhead?

If yes to any → you're probably in 一锅炖 territory.

### 死法二: 碎成渣 (Fragmented to Dust)

**Symptom**: Too many tiny agents. Each does almost nothing. Coordination cost exceeds execution value.

- "今天一个 agent，明天一个 agent，后天再来一个 agent。工具越堆越多，角色越分越细，最后系统像一地玻璃渣，看着很高级，谁也拼不回来。"

**Diagnostic questions**:
- Can this agent produce meaningful output independently, or does it always need another agent's output first?
- Is the communication overhead between these agents greater than the value of separating them?
- Could two of these agents be merged without violating the "足够小" criterion?

If yes to any → you've probably fragmented too far.

### The Sweet Spot

"既足够小，又足够完整；既能独立存在，又能进入协作；既能承担职责，又不会把整个系统拖死。"

## The 3 Layers of 元

元 is not flat. It operates on at least three layers:

### Layer 1: 执行元 (Execution Meta)

The front-line workers. They DO the business work directly.

- Write content, analyze data, generate code, review documents, create designs
- Most important quality: **职责纯 (pure responsibility)**
- "今天你让写稿的顺手做审校，明天让审校的顺手做策略 — 最后每个人都在'帮忙'，系统却越来越脏"
- **"顺手，是系统的大敌"** — this is a core principle. Cross-responsibility "helpfulness" is system contamination.

### Layer 2: 编排元 (Orchestration Meta)

The conductors. They don't do the work — they organize who does what, when.

Decides:
- Who goes first, who goes after
- What depends on what
- Which steps are linear vs parallel
- Where to fall back on errors
- What conditions gate the next step
- **Rhythm control**: not just task ordering, but WHEN to deliver what (节奏编排)

"协同可以扁平，治理不能缺位" — Flat collaboration is fine. Missing governance is fatal.

### Layer 3: 基础设施元 (Infrastructure Meta)

The capability builders. They don't produce business output — they build the capabilities that make everything else possible.

The 9 capability dimensions:

| # | Dimension | What It Covers |
|---|-----------|---------------|
| 1 | 提示词体系 (Prompt System) | SOUL.md design, Core Truths, persona definition |
| 2 | 技能体系 (Skill System) | Skill matching, creation, audit |
| 3 | 工具体系 (Tool System) | Tool selection, MCP server matching |
| 4 | 知识体系 (Knowledge System) | Domain knowledge, reference materials |
| 5 | 记忆体系 (Memory System) | MEMORY.md strategy, cross-session continuity |
| 6 | 工作流体系 (Workflow System) | Pipeline design, phase orchestration |
| 7 | 规则基线 (Rule Baseline) | Decision Rules, Anti-AI-Slop, behavioral constraints |
| 8 | 权限控制 (Permission Control) | Access boundaries, role permissions |
| 9 | 安全与回滚 (Security & Rollback) | Hooks, safety red lines, rollback mechanisms |

**Key insight**: These 9 dimensions should NOT all live in one agent. That's 死法一. They should be grouped by coupling into specialized infrastructure 元, each satisfying the 5 criteria.

## The 4 Death Modes (四种典型死法)

Beyond the two extremes, there are four specific anti-patterns:

### 1. 把所有东西塞进一个 Agent

"听起来像万能。实际上像超载。" Context, attention, and stability are finite. An agent that does everything will eventually cross-contaminate and lose coherence.

### 2. 不分边界

"顺手，是系统的大敌。" When every agent "helps out" with a little bit of everything, you get collective responsibility pollution. Systems don't die from nobody working — they die from everyone doing a little extra outside their lane.

### 3. 只有执行，没有治理

Only planning direction + execution. Missing: review, meta-review, revision, verification, feedback, evolution. "会动，不等于成熟。会动，不等于可靠。"

### 4. 只追结果，不做结构

One successful run ≠ a working method. "一次生成成功，不值钱" — Can you repeat it? Can someone else repeat it? Can it survive a model change? If not, you didn't build a system — you got lucky.

## The 10-Step Governance Process

A mature system flow has 10 steps. The real difficulty is in steps 4-10:

```
 1. 方向 (Direction)     — Set the goal
 2. 规划 (Planning)      — Break down the work
 3. 执行 (Execution)     — Do the work
 4. 评审 (Review)        — Judge the output
 5. 元评审 (Meta-Review) — Judge the judge
 6. 修订 (Revision)      — Fix based on feedback
 7. 验证 (Verification)  — Confirm fixes actually work
 8. 汇总 (Summary)       — Aggregate results
 9. 反馈 (Feedback)      — Higher-level evaluation
10. 进化 (Evolution)     — Learn and improve for next cycle
```

"第一次做出来，不等于做对。做对，不等于做稳。做稳，不等于下次还能持续变好。"

**The self-correction chain** is what separates a mature system from one that just "会动":
- No review → it only charges forward blindly
- No verification → it only performs
- No evolution → it repeats mistakes
- No rollback → it eventually drives off a cliff

## The Full Chain: 元 → 组织镜像 → 节奏编排 → 意图放大

This is the complete methodology from atomic units to system-level outcomes:

| Layer | Solves | Core Question |
|-------|--------|--------------|
| **元** | 怎么拆 (How to split) | What is the minimum governable unit? |
| **组织镜像** | 怎么组 (How to organize) | How do 元 form a functional structure? |
| **节奏编排** | 怎么发 (How to deliver) | When to release what, when to hold back? |
| **意图放大** | 怎么成 (How to succeed) | How does a high-level intent become system-wide action? |

### 组织镜像 (Organizational Mirror)

Map real organizational mechanisms into the multi-agent system:
- 层级委派 (hierarchical delegation)
- 职责分工 (role division)
- 独立工作空间 (isolated workspaces)
- 评审反馈 (review feedback)
- 持续进化 (continuous evolution)

NOT anthropomorphization. It's architectural mapping. "在功能结构上，它越来越像一个真正能运转的组织。"

Three problems it solves:
1. **串味 (Cross-contamination)**: Domain A's content bleeds into Domain B
2. **协调爆炸 (Coordination explosion)**: N agents → N² communication links
3. **认知成本 (Cognitive overhead)**: Humans end up serving the system instead of the reverse

### 节奏编排 (Rhythm Orchestration)

Inspired by open-world game event deck design. Key principles:

1. **表面自由，底层有序** — Users feel freedom, but there's an optimal delivery order underneath
2. **发牌员 (Dealers)** — Some 元 don't create content, they deliver it at the right moment
3. **留白元 (Silence Meta)** — Sometimes the optimal action is doing nothing. "空白本身也是一种被设计的体验"
4. **出牌成本** — Every piece of information competes for attention. "真正成熟的系统，不是知道的都说，而是知道什么时候说最值钱"
5. **跳过 (Skip)** — If the user already knows, skip the card
6. **插队 (Priority override)** — Critical issues jump the queue (紧急治理元)
7. **同一意图，多种交付壳** — Same core message, different delivery formats per context

## How to Apply: Splitting Methodology

When you need to split a monolithic agent or design a new multi-agent system:

### Step 1: List All Capability Dimensions

Enumerate every distinct responsibility the system needs. Be specific — "handles everything" is not a dimension.

### Step 2: Group by Coupling

Identify which dimensions are tightly coupled (splitting them would require constant sync) vs loosely coupled (they can work independently).

**Coupling test**: If Dimension A changes, must Dimension B immediately update? If yes → same 元. If no → candidate for separation.

### Step 3: Validate Each Candidate 元

Run every proposed 元 through the 5-criteria checklist. ALL must pass.

### Step 4: Check for 碎成渣

For each proposed 元, ask: "Can this produce meaningful output independently?" If it can only work as a pass-through, it's too small. Merge it back.

**Anti-fragmentation test**: If merging two proposed 元 doesn't violate "足够小" (they're still in the same domain), merge them.

### Step 5: Check for 一锅炖

For the final grouping, ask: "Does any single 元 span more than 2 unrelated domains?" If yes, it needs further splitting.

### Step 6: Define Interfaces

For each 元, define:
- **Input**: What does it receive?
- **Output**: What does it produce?
- **Boundary**: What does it explicitly NOT handle?
- **Collaboration protocol**: How does it communicate with neighboring 元?

### Step 7: Design Governance

Apply the 10-step process. Ensure steps 4-10 are not missing. Specifically:
- Who reviews each 元's output?
- Who reviews the reviewer?
- How does the system learn from each cycle?

## Quick Reference Card

```
元 = 最小可治理单元

五标准: 独立 | 足够小 | 边界清晰 | 可替换 | 可复用

三层: 执行元(做事) → 编排元(调度) → 基础设施元(造能力)

两种死法: 一锅炖(太胖) ↔ 碎成渣(太碎)

四链路: 元(拆) → 组织镜像(组) → 节奏编排(发) → 意图放大(成)

十步治理: 方向→规划→执行→评审→元评审→修订→验证→汇总→反馈→进化

核心原则:
  - "顺手，是系统的大敌"
  - "一次生成成功，不值钱"
  - "会动，不等于成熟"
  - "协同可以扁平，治理不能缺位"
  - "空白本身也是一种被设计的体验"
```
