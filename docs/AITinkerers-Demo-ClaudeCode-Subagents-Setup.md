# Claude Code Subagent Workflow Guide

This guide shows how to use three coordinated Claude Code subagents to build a Next.js portfolio website with automatic quality checks and deployment.

## Prerequisites

1. ✅ Next.js project bootstrapped (see `AITinkerers-Demo-Setup.md`)
2. ✅ Vercel connected to GitHub repository
3. ✅ All quality tools installed (prettier, eslint, etc.)
4. ✅ Claude Code CLI installed and ready

## Step 1: Start Claude Code

```bash
# Navigate to your project directory
cd ai-tinkerers-demo

# Start Claude Code
claude
```

## Step 2: Create the Three Subagents

### Create Main Developer Agent
```bash
/agents
```

Follow the steps to create an agent in the local folder. Name the agent accordingly and paste the content from `docs/developer-subagent.md` (everything after the `---` header section). For the description, use the text from the header section. Repeat for other two agents.

## Step 3: Verify Agents are Created

```bash
/agents list
```

You should see all three agents listed.

## Step 4: Start the Coordinated Workflow

### Option A: Automatic Coordination (Recommended)

```bash
Use the developer, quality-monitor, and git-automation subagents to build a Next.js + Tailwind CSS portfolio website.

REQUIREMENTS (must include ALL):
- Homepage with hero section containing "Hello, I'm Indy" headline
- Navigation bar with exactly 2 links: "Home" and "Contact"
- Contact page with email form
- Use Inter font for headings, Slabo for body text
- Clean, minimal design similar to attached inspiration

developer: Create BOTH pages (home + contact) with navigation between them
quality-monitor: Quick format check only
git-automation: Commit after quality approval

Build exactly what's specified above - no more, no less.
```

### Option B: Manual Coordination (Backup)

If automatic coordination doesn't work perfectly:

```bash
# Step 1: Start with main developer
/agents developer "Create a responsive hero section with modern design and Tailwind CSS"

# Step 2: After completion, trigger quality check
/agents quality-monitor "Run quick format check on the completed hero section"

# Step 3: After quality approval, trigger git automation
/agents git-automation "Commit and push the quality-approved hero section"
```

## Step 5: Monitor the Workflow

Watch for these coordination signals:

### Main Developer Signals:
- 🔨 "Starting implementation of [feature]"
- ✅ "TASK COMPLETED: [feature] - Ready for quality check"

### Quality Monitor Signals:
- 🔍 "Quality check started for: [feature]"
- ✅ "QUALITY APPROVED: [feature] - Ready for commit"

### Git Automation Signals:
- 📦 "COMMITTED: [feature] to GitHub"
- 🚀 "PUSHED to GitHub - Vercel deployment triggered"
- ✅ "DEPLOYED successfully: [live-url]"

## Step 6: Add Additional Features

After the first feature is complete and deployed, continue with:

### For About Section:
```bash
developer, quality-monitor, and git-automation: work together to build a responsive about section with personal information and skills showcase
```

### For Projects Section:
```bash
developer, quality-monitor, and git-automation: work together to build an interactive projects showcase with hover effects and project cards
```

### For Contact Section:
```bash
developer, quality-monitor, and git-automation: work together to build a contact form with validation and responsive design
```

## Step 7: Monitor Live Results

Keep these tabs open during development:

1. **Terminal**: Claude Code with subagents
2. **Browser - Local**: `http://localhost:3000` (run `npm run dev` in separate terminal)
3. **Browser - Live**: Your Vercel deployment URL
4. **GitHub**: Repository to see automated commits
5. **Vercel Dashboard**: Deployment status and logs

## Troubleshooting

### If Coordination Breaks:
```bash
# Check for marker files
ls -la .task-completed .quality-approved

# Clear stuck marker files if needed
rm .task-completed .quality-approved

# Restart with manual coordination using /agents commands
```

### If Quality Checks Fail:
The quality-monitor agent will auto-fix most issues. If manual intervention is needed:
```bash
npm run quality
```

### If Git Operations Fail:
```bash
# Check git status
git status

# Manual commit if needed
git add .
git commit -m "feat: manual commit after agent issue"
git push
```

### If Vercel Deployment Fails:
Check the Vercel dashboard for build logs and error details.

## Expected Workflow Timeline

For a complete portfolio with 4 sections (hero, about, projects, contact):

- **Hero Section**: 3-5 minutes (initial setup + development)
- **About Section**: 2-3 minutes (agents now in sync)
- **Projects Section**: 2-3 minutes (with interactive elements)
- **Contact Section**: 2-3 minutes (with form validation)

**Total Demo Time**: ~10-15 minutes for a complete, deployed portfolio

## Demo Talking Points

- **"Watch as the development agent builds the feature..."**
- **"Now the quality agent automatically checks and fixes the code..."**
- **"Finally, the git agent commits only after quality approval..."**
- **"And there's the live deployment on Vercel!"**

## Success Indicators

✅ Clear coordination messages between agents
✅ Automatic code formatting and linting
✅ Descriptive git commits with quality approval
✅ Successful Vercel deployments
✅ Live website updates with each feature
✅ Professional development workflow maintained

This workflow demonstrates how AI agents can collaborate like a professional development team, maintaining code quality and deployment standards automatically.