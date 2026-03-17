# Meta_Kim — 元兵工厂项目

> 基于老金"最小可治理单元"元理论，设计和实现基础设施元 + 编排元 + 元分析角色的完整 team-meta 架构。

## 核心理论

来源：`meta.md`（老金 2.5 小时直播完整记录）

**元 = 最小可治理单元**，五个标准：
1. **独立** — 能独立接收输入并产出
2. **足够小** — 单一领域职责
3. **边界清晰** — 不碰其他元的地盘
4. **可替换** — 换掉不影响其他元
5. **可复用** — 多个场景都需要

两个死法：
- 死法一：什么都不拆，一锅炖
- 死法二：拆得过碎，碎成渣

## 基础设施元拆分方案

9 个能力维度 → 5 个专精元：

```
提示词 + 规则基线  →  Genesis（灵魂元）🧬    [dims 1+7]
技能 + 工具        →  Artisan（技艺元）🎨    [dims 2+3]
安全 + 权限        →  Sentinel（哨兵元）🛡️   [dims 8+9]
记忆 + 知识        →  Librarian（典藏元）📚   [dims 4+5]
工作流             →  Conductor（编排元）🎼   [dim 6, 编排元层]
```

## 项目结构

```
Meta_Kim/
├── meta.md                                    # 元理论原文（老金直播记录）
├── README.md                                  # 本文件
├── task_plan.md                               # 执行计划（全部完成）
├── analysis/
│   ├── infrastructure-meta-split.md           # 四引擎分析结论
│   └── implementation-plan.md                 # 实施计划（8 步）
├── skills/
│   └── meta-theory/
│       └── SKILL.md                           # 元理论方法论 Skill
└── agents/                                    # Agent 设计规格存档
    ├── genesis/SPEC.md                        # 灵魂元 — dims 1+7
    ├── artisan/SPEC.md                        # 技艺元 — dims 2+3
    ├── sentinel/SPEC.md                       # 哨兵元 — dims 8+9
    ├── librarian/SPEC.md                      # 典藏元 — dims 4+5
    ├── conductor/SPEC.md                      # 编排元 — dim 6
    ├── warden/SPEC.md                         # 元部门经理 — team-meta manager
    ├── prism/SPEC.md                          # 迭代审查员 — quality forensics
    └── scout/SPEC.md                          # 工具发现者 — capability discovery
```

## 双平台实现映射

### 基础设施元 (5)

| 专精元 | OpenClaw Workspace | Claude Code Skill | DB Migration |
|--------|-------------------|------------------|-------------|
| Genesis 🧬 | `~/.openclaw/workspace-genesis/` (8 files) | `~/.claude/skills/meta-genesis/` | existing |
| Artisan 🎨 | `~/.openclaw/workspace-artisan/` (8 files) | `~/.claude/skills/meta-artisan/` | migration 032 |
| Sentinel 🛡️ | `~/.openclaw/workspace-sentinel/` (8 files) | `~/.claude/skills/meta-sentinel/` | migration 032 |
| Librarian 📚 | `~/.openclaw/workspace-librarian/` (8 files) | `~/.claude/skills/meta-librarian/` | migration 032 |
| Conductor 🎼 | `~/.openclaw/workspace-conductor/` (8 files) | `~/.claude/skills/meta-conductor/` | existing |

### 元部门管理 + 元分析角色 (3)

| 角色 | OpenClaw Workspace | Claude Code Skill | SPEC.md | DB |
|------|-------------------|------------------|---------|-----|
| Warden 🔬 (经理) | `~/.openclaw/workspace-metamanager/` (8 files) | `~/.claude/skills/meta-warden/` | `agents/warden/SPEC.md` | existing (UUID -016) |
| Prism 🔍 (审查员) | `~/.openclaw/workspace-prism/` (8 files) | `~/.claude/skills/meta-prism/` | `agents/prism/SPEC.md` | existing (UUID -018) |
| Scout 🔭 (发现者) | `~/.openclaw/workspace-scout/` (8 files) | `~/.claude/skills/meta-scout/` | `agents/scout/SPEC.md` | existing (UUID -019) |

## 验证体系

| 验证项 | 命令 | 结果 |
|--------|------|------|
| SOUL.md 8模块 | `node scripts/_validate_souls.mjs` | 5/5 PASS (基础设施元) |
| 纯函数测试 | `node --test tests/meta-factory.test.mjs` | 54/54 PASS |
| Agent 注册 | `~/.openclaw/openclaw.json` | 8/8 registered (5 infra + 3 meta-analysis) |
| Config 同步 | `src/common/agent-config.json` | 8/8 agents + warden as manager |
| CC Skill 对齐 | `~/.claude/skills/meta-*/SKILL.md` | 8/8 loaded (5 infra + 3 meta-analysis) |
| SPEC.md 存档 | `Meta_Kim/agents/*/SPEC.md` | 8/8 complete |

## 状态

- [x] 元理论学习（meta.md）
- [x] Critical → Fetch → Deep → Review 四引擎分析
- [x] 9→5 分组验证通过
- [x] Forge 退役决策确认
- [x] 实施计划制定
- [x] Step 1: 创建新 agent 完整工作空间（5× SOUL.md + 配套文件）
- [x] Step 2: OpenClaw agent 注册（openclaw.json + agent dirs）
- [x] Step 3: 更新 agent-config.json（5 agents + team-meta workers）
- [x] Step 4: 创建 Claude Code Skills（5× SKILL.md）
- [x] Step 5: 更新 meta-factory.mjs（11 纯函数）
- [x] Step 6: 精简 Genesis SKILL.md（剥离 skill/hook/memory 职责）
- [x] Step 7: 数据库迁移（032_meta_expansion.sql）
- [x] Step 8: 全面验证（5/5 SOUL + 54/54 tests）
- [x] 设计规格存档（5× SPEC.md in Meta_Kim/agents/）
- [x] Conductor 工作区补全（8 files）
- [x] 元理论方法论 Skill（meta-theory/SKILL.md）
- [x] 双平台对齐补充（3× CC Skill + 3× SPEC.md for Warden/Prism/Scout）
