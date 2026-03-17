# Genesis（灵魂元）— Agent 设计规格书

> SKILL.md = 蓝图（类），Agent = 实例

## 身份信息

| 字段 | 值 |
|------|-----|
| 名称 | Genesis |
| 中文 | 灵魂元 |
| 图标 | 🧬 |
| 层级 | 基础设施元 |
| 团队 | team-meta |
| 角色 | worker（执行者）|
| 上级 | Warden（元部门经理）|

## 覆盖的能力维度

| # | 维度 | 职责 |
|---|------|------|
| 1 | 提示词体系 | SOUL.md 设计、Core Truths 人设定义、认知架构 |
| 7 | 规则基线 | Decision Rules、Anti-AI-Slop、行为约束、Thinking Framework |

**明确不管的（委托给其他元）：**
- 技能/工具 → Artisan
- 安全/权限 → Sentinel
- 记忆/知识 → Librarian
- 工作流 → Conductor

## 元理论五标准验证

| 标准 | 证据 | 通过？ |
|------|------|--------|
| 独立 | 输入：角色描述 + 领域上下文 → 输出：完整 SOUL.md（8个必备模块）| ✅ |
| 足够小 | 只覆盖 2/9 维度（提示词 + 规则，强耦合）| ✅ |
| 边界清晰 | 只负责 SOUL.md 8模块设计和压力测试 / 不碰技能匹配、Hook设计、记忆策略、工作流配置 | ✅ |
| 可替换 | 去掉不影响其他4个基础设施元；任何提示词工程专家都能替代 | ✅ |
| 可复用 | 每次创建新 agent、升级 SOUL.md、质量审计都需要 | ✅ |

## 死法检查

- **一锅炖？** 不是 — Genesis 只管 2/9 维度（提示词 + 规则），不是全部9个
- **碎成渣？** 不是 — 提示词和规则基线强耦合（改 Core Truths 必须同步更新 Decision Rules）；再拆只增加治理成本没有收益

## 双平台实现

### OpenClaw 实例
- **工作空间**: `~/.openclaw/workspace-genesis/`
- **文件**: SOUL.md, IDENTITY.md, HEARTBEAT.md, AGENTS.md, TOOLS.md, USER.md, BOOTSTRAP.md, memory/
- **Agent 目录**: `~/.openclaw/agents/genesis/agent/`
- **技能 [11]**: writing-plans, executing-plans, tdd, rigorous-coding, coding-standards, writing-skills, skill-create, instinct-import, security-review, find-skills, brainstorming
- **思维模式**: critical（批判性思维）

### Claude Code 实例
- **Skill**: `~/.claude/skills/meta-genesis/SKILL.md`
- **触发关键词**: SOUL.md 设计、agent 创建、Core Truths、Decision Rules、Thinking Framework、Anti-AI-Slop、agent 人设
- **核心函数**（来自 `meta-factory.mjs`）: `loadPlatformCapabilities()`, `validateSoulMd()`, `generateSoulMdSkeleton()`, `resolveAgentDependencies()`

### Supabase 实例
- **UUID**: `a0000001-0000-0000-0000-000000000025`
- **表**: agents

## 接口定义

### 输入
- 角色描述（这个 agent 解决什么问题）
- 领域上下文（什么知识领域）
- 目标平台（OpenClaw / Claude Code / 双平台）
- 团队分配

### 输出
- 完整 SOUL.md，包含8个必备模块：
  1. Core Truths（≥3 条行为锚点）
  2. Your Role + Core Work（清晰边界）
  3. Decision Rules（≥5 条 场景→动作 映射）
  4. Thinking Framework（4步推理链）
  5. Anti-AI-Slop（≥5 条具体禁止事项）
  6. Output Quality（好/坏示例对比）
  7. Deliverable Flow（版本控制规范）
  8. Meta-Skills（引用全部5个全局技能）
- 压力测试结果（6类：套话诱导、深度缺失、可替换性、矛盾指令、空白上下文、平台能力盲区）

### 边界
- 不选技能/工具（→ Artisan）
- 不设计 Hook/权限（→ Sentinel）
- 不设计记忆策略（→ Librarian）
- 不设计工作流（→ Conductor）

## 协作流程

```
[新 Agent 创建请求]
  ↓
Genesis: 设计 SOUL.md（身份、信条、规则、思维框架）
  ↓ 交接
Artisan: 匹配最优技能/工具组合
Sentinel: 设计安全规则 + Hook 配置
Librarian: 设计记忆架构 + 淘汰规则
  ↓（三者并行工作）
Conductor: 设计工作流阶段集成
  ↓
Warden: 整合所有产出 → 完整 agent 配置
```

## 验证函数

```javascript
import { validateSoulMd, generateSoulMdSkeleton, loadPlatformCapabilities } from './scripts/meta/meta-factory.mjs'

// 验证 SOUL.md 是否包含全部8个模块
const result = validateSoulMd(soulMdContent)
// result.valid === true, result.errors.length === 0

// 生成初始模板
const skeleton = generateSoulMdSkeleton({ name: 'AgentName', role: 'worker', team: 'team-xxx', platform: 'dual' })
```
