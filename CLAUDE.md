# Meta_Kim — 元兵工厂 Claude Code 项目

> 基于"最小可治理单元"元理论，设计 AI Agent 团队架构的方法论工具箱。

## 这是什么

Meta_Kim 是一套完整的 AI Agent 设计方法论，包含：
- **元理论**：老金的"最小可治理单元"理论（`meta.md`）
- **8 个可 spawn 的子代理**（`.claude/agents/`）：覆盖 Agent 创建全流程
- **1 个方法论 Skill**（`.claude/skills/meta-theory/`）：元理论指导

## 快速开始

1. 用 Claude Code 打开本项目目录
2. 8 个 agent + 1 个 skill 自动可用
3. 用 Agent tool 指定 `subagent_type` spawn 对应子代理

## Agents（子代理）

可通过 Agent tool 的 `subagent_type` 参数 spawn：

| Agent | 中文 | 职责 |
|-------|------|------|
| **meta-warden** | 元部门经理 🔬 | 协调所有元 agent，质量关卡，CEO 报告综合 |
| **meta-genesis** | 灵魂元 🧬 | 设计 SOUL.md（提示词 + 规则基线）|
| **meta-artisan** | 技艺元 🎨 | 匹配最优 Skill/Tool 组合 |
| **meta-sentinel** | 哨兵元 🛡️ | 安全规则、Hook 设计、权限边界 |
| **meta-librarian** | 典藏元 📚 | 记忆架构、知识持久化、淘汰规则 |
| **meta-conductor** | 编排元 🎼 | 工作流管线设计、部门编排 |
| **meta-prism** | 迭代审查员 🔍 | 质量法医、AI-Slop 检测、演进追踪 |
| **meta-scout** | 工具发现者 🔭 | 外部工具发现、ROI 评估、安全审计 |

## Skill（方法论）

| Skill | 触发场景 |
|-------|---------|
| **meta-theory** | "元理论"、"最小可治理单元"、"拆分验证" |

## 创建一个 Agent 的完整流程

Warden 作为经理，并行 spawn 子代理：

```
用户: "我需要一个数据分析 agent"
  ↓
Warden (manager): 分析需求，并行派遣:
  ├→ Genesis:   设计 SOUL.md（人设、信条、规则、思维框架）
  ├→ Artisan:   匹配最优 Skill/Tool 组合
  ├→ Sentinel:  设计安全规则 + Hook 配置
  └→ Librarian: 设计记忆策略 + 淘汰规则
  ↓（四者并行完成）
Conductor: 设计工作流阶段集成
  ↓
Warden: 整合所有产出 → 完整 agent 配置 → CEO 审批
```

## 核心理论

**元 = 最小可治理单元**，五个标准：
1. **独立** — 能独立接收输入并产出
2. **足够小** — 单一领域职责
3. **边界清晰** — 不碰其他元的地盘
4. **可替换** — 换掉不影响其他元
5. **可复用** — 多个场景都需要

两个死法：
- 死法一：什么都不拆，一锅炖
- 死法二：拆得过碎，碎成渣

## 项目结构

```
Meta_Kim/
├── CLAUDE.md                        # 本文件（Claude Code 自动读取）
├── .claude/
│   ├── agents/                      # 8 个可 spawn 的子代理
│   │   ├── meta-warden.md           # 经理 — 协调 + 质量标准
│   │   ├── meta-genesis.md          # 灵魂元 — SOUL.md 设计
│   │   ├── meta-artisan.md          # 技艺元 — Skill/Tool 匹配
│   │   ├── meta-sentinel.md         # 哨兵元 — 安全/权限
│   │   ├── meta-librarian.md        # 典藏元 — 记忆/知识
│   │   ├── meta-conductor.md        # 编排元 — 工作流
│   │   ├── meta-prism.md            # 审查员 — 质量法医
│   │   └── meta-scout.md            # 发现者 — 工具扫描
│   └── skills/
│       └── meta-theory/SKILL.md     # 元理论方法论
├── README.md                        # 项目概览
├── meta.md                          # 元理论原文（老金直播记录）
├── analysis/                        # 四引擎分析文档
└── task_plan.md                     # 执行计划
```

## 依赖

本项目是纯文档 + Agent/Skill 项目，无需安装任何依赖。
用 Claude Code 打开目录即可使用。

如需运行 `meta-factory.mjs` 纯函数（agent 创建管线），请参考 `个人主页` 项目中的 `scripts/meta/` 目录。
