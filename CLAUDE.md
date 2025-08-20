# CLAUDE.md - AI Tinkerers Demo Repository

This repository demonstrates **coordinated AI agent workflows** using Claude Code with multiple specialized subagents building a Next.js portfolio website.

## Project Context

This is a **live demo project** showcasing how AI agents can work together like a professional development team, with automatic code quality checks and deployment pipelines. Created for the AI Tinkerers Sydney meetup on August 20, 2025.

**Repository**: https://github.com/indyfromoz/aitinkerers-demo

## Architecture Overview

The project uses **three coordinated Claude Code subagents**:

1. **Developer Agent** (`developer`) - Writes code and implements features
2. **Quality Monitor Agent** (`quality-monitor`) - Runs formatting, linting, and quality checks
3. **Git Automation Agent** (`git-automation`) - Handles commits and deployment coordination

## Workflow Coordination

The agents coordinate using **marker files** and **standardized signals**:

```
Developer completes feature → Creates `.task-completed`
Quality Monitor detects completion → Runs quality checks → Creates `.quality-approved`
Git Agent waits for both signals → Commits → Pushes → Triggers Vercel deployment
```

## Technology Stack

- **Framework**: Next.js 15.4.7 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Quality Tools**: ESLint, Prettier, TypeScript compiler
- **Deployment**: Vercel with GitHub integration
- **AI Orchestration**: Claude Code with custom subagents

## Key Files Structure

```
├── docs/
│   ├── AITinkerers-Demo-Setup.md              # Project bootstrapping guide
│   ├── AITinkerers-Demo-ClaudeCode-Subagents-Setup.md  # Agent workflow guide
│   ├── developer-subagent.md                  # Main developer agent config
│   ├── quality-monitor-subagent.md            # Quality control agent config
│   └── git-automation-subagent.md             # Git/deployment agent config
├── src/app/                                   # Next.js App Router structure
├── vercel.json                                # Deployment configuration
├── package.json                               # Dependencies and quality scripts
└── CLAUDE.md                                  # This file
```

## Development Workflow

### For AI Agents:
When working on this repository, follow the **coordinated subagent pattern**:

1. **Read the agent configurations** in `docs/` to understand each agent's role
2. **Use the coordination protocol** with marker files (`.task-completed`, `.quality-approved`)
3. **Follow the quality standards** defined in the quality-monitor configuration
4. **Maintain the deployment pipeline** through git-automation processes

### Quality Standards:
- All code must pass **Prettier formatting**
- All code must pass **ESLint validation**
- All TypeScript must **compile without errors**
- Responsive design using **Tailwind CSS**
- Clean, semantic component structure

### Deployment Pipeline:
- **Automatic**: Git pushes trigger Vercel deployments
- **Quality Gate**: No commits without quality approval
- **Coordination**: All three agents must signal completion

## Demo Usage

This repository serves as both:
1. **Working example** of multi-agent AI coordination
2. **Template** for implementing similar workflows
3. **Educational resource** for AI agent orchestration patterns

### To Replicate:
1. Follow `docs/AITinkerers-Demo-Setup.md` for project setup
2. Use `docs/AITinkerers-Demo-ClaudeCode-Subagents-Setup.md` for agent configuration
3. Implement the three subagents using the provided configurations
4. Test the coordinated workflow with simple features

## Agent Coordination Examples

### Starting a New Feature:
```bash
Use the developer, quality-monitor, and git-automation subagents to build [feature].

developer: Create [specific requirements]
quality-monitor: Run quality checks and approve
git-automation: Commit and deploy after approval
```

### Manual Coordination (Backup):
```bash
/agents developer "Create hero section"
/agents quality-monitor "Run quality checks"
/agents git-automation "Commit approved changes"
```

## Expected Workflow Timing

- **Feature Development**: 2-3 minutes per component
- **Quality Checks**: 30-60 seconds (automated)
- **Git Operations**: 15-30 seconds
- **Deployment**: 1-2 minutes (Vercel)

**Total cycle time**: ~4-6 minutes per feature with full coordination

## Success Indicators

When the agent coordination is working properly, you should see:

✅ Clear coordination messages between agents
✅ Automatic code formatting and linting
✅ Descriptive git commits with quality approval references
✅ Successful Vercel deployments
✅ Live website updates with each feature
✅ Professional development workflow maintained automatically

## Troubleshooting Agent Coordination

If agents get stuck or lose coordination:

```bash
# Check for marker files
ls -la .task-completed .quality-approved .quality-issues

# Clear stuck coordination state
rm -f .task-completed .quality-approved .quality-issues

# Restart with manual coordination
/agents developer "Continue with [specific task]"
```

## Learning Outcomes

This demo demonstrates:
- **Multi-agent AI coordination** patterns
- **Quality gates** in AI-driven development
- **Automated deployment pipelines** with AI oversight
- **Professional development workflows** maintained by AI agents
- **Error handling and recovery** in agent coordination

The goal is to show how AI agents can work together reliably while maintaining the standards and practices of professional software development teams.

---

**Note**: This is a demonstration project. In production environments, additional safeguards, testing, and validation would be required for AI agent coordination workflows.