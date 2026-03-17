# Meta_Kim — 元兵工厂 Claude Code 项目

> 基于"最小可治理单元"元理论，设计 AI Agent 团队架构的方法论工具箱。

## 这是什么

Meta_Kim 是一套完整的 AI Agent 设计方法论，包含：
- **元理论**：老金的"最小可治理单元"理论（`meta.md`）
- **9 个 Claude Code Skills**：覆盖 Agent 创建全流程的专精工具
- **8 个 Agent 设计规格书**：中英双语（`agents/*/SPEC.md` + `SPEC-CN.md`）

## 快速开始

1. 用 Claude Code 打开本项目目录
2. 9 个 skill 会自动加载（在 `.claude/skills/` 下）
3. 直接对话即可触发对应 skill

## Skills 一览

| Skill | 触发场景 | 职责 |
|-------|---------|------|
| **meta-theory** | "元理论"、"最小可治理单元"、"拆分验证" | 元理论方法论指导 |
| **meta-genesis** | "设计 SOUL.md"、"创建 agent" | 灵魂元 🧬 — Agent 人设设计 |
| **meta-artisan** | "技能匹配"、"工具选择" | 技艺元 🎨 — Skill/Tool 匹配 |
| **meta-sentinel** | "安全审计"、"Hook 设计" | 哨兵元 🛡️ — 安全/权限设计 |
| **meta-librarian** | "记忆策略"、"MEMORY.md" | 典藏元 📚 — 记忆/知识架构 |
| **meta-conductor** | "工作流设计"、"管线选择" | 编排元 🎼 — 工作流编排 |
| **meta-warden** | "元部门协调"、"质量标准" | 元部门经理 🔬 — 团队协调 |
| **meta-prism** | "质量法医"、"AI-Slop 检测" | 迭代审查员 🔍 — 质量分析 |
| **meta-scout** | "工具发现"、"能力缺口" | 工具发现者 🔭 — 生态扫描 |

## 创建一个 Agent 的完整流程

```
用户: "我需要一个数据分析 agent"
  ↓
Genesis:   设计 SOUL.md（人设、信条、规则、思维框架）
Artisan:   匹配最优 Skill/Tool 组合
Sentinel:  设计安全规则 + Hook 配置
Librarian: 设计记忆策略 + 淘汰规则
  ↓（四者并行，各自独立产出）
Conductor: 设计工作流阶段集成
  ↓
Warden:    整合所有产出 → 完整 agent 配置
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
├── CLAUDE.md                    # 本文件（Claude Code 自动读取）
├── .claude/skills/              # 9 个 Claude Code Skills
├── README.md                    # 项目概览
├── meta.md                      # 元理论原文（老金直播记录）
├── agents/                      # 8 个 Agent 设计规格书（EN + CN）
│   ├── genesis/                 # 灵魂元 — 提示词 + 规则基线
│   ├── artisan/                 # 技艺元 — 技能 + 工具
│   ├── sentinel/                # 哨兵元 — 安全 + 权限
│   ├── librarian/               # 典藏元 — 记忆 + 知识
│   ├── conductor/               # 编排元 — 工作流
│   ├── warden/                  # 元部门经理
│   ├── prism/                   # 迭代审查员
│   └── scout/                   # 工具发现者
├── analysis/                    # 四引擎分析文档
└── task_plan.md                 # 执行计划
```

## 依赖

本项目是纯文档 + Skill 项目，无需安装任何依赖。
用 Claude Code 打开目录即可使用。

如果需要运行 `meta-factory.mjs` 纯函数（agent 创建管线），请参考 `个人主页` 项目中的 `scripts/meta/` 目录。
