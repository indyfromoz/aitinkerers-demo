# Complete Next.js Project Setup for AI Tinkerers Demo

## Step 1: Create Next.js Project with All Required Features

```bash
# Create Next.js project with TypeScript, Tailwind, and ESLint
npx create-next-app@latest ai-tinkerers-demo \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd ai-tinkerers-demo
```

## Step 2: Install All Quality Tools Required by Subagents

```bash
# Install quality monitoring dependencies
npm install --save-dev \
  prettier \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-config-prettier \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks

# Install additional helpful tools
npm install --save-dev \
  eslint-config-next \
  eslint-plugin-jsx-a11y
```

## Step 3: Configure Quality Tools

### Create `.prettierrc.json`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### Create `.prettierignore`:
```
node_modules
.next
.vercel
*.md
package-lock.json
```

### Check your `eslint.config.mjs` (should already exist):
Your existing `eslint.config.mjs` should look like this (✅ if it matches):
```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      ".next/**/*",
      "node_modules/**/*",
      "out/**/*",
      "build/**/*",
      "dist/**/*",
      ".vercel/**/*",
      "coverage/**/*",
      "public/**/*",
      "*.min.js",
      "**/*.config.js",
      "**/*.config.mjs",
    ],
  },
];

export default eslintConfig;
```

**✅ Skip this step if your file matches above** - Next.js already configured it perfectly!

## Step 4: Add Quality Scripts to package.json

```bash
# Add these scripts to your package.json
npm pkg set scripts.format="prettier --write \"**/*.{js,jsx,ts,tsx,json,css,md}\""
npm pkg set scripts.lint:fix="eslint . --fix --ext .js,.jsx,.ts,.tsx"
npm pkg set scripts.lint:check="eslint . --ext .js,.jsx,.ts,.tsx"
npm pkg set scripts.type-check="tsc --noEmit"
npm pkg set scripts.quality="npm run format && npm run lint:fix && npm run type-check"
```

## Step 5: Test the Development Server

```bash
# Start development server to verify everything works
npm run dev
```

Visit `http://localhost:3000` - you should see the default Next.js page.

## Step 6: Create Vercel Configuration (CRITICAL!)

⚠️ **This step prevents the dreaded 404 deployment issue that wastes hours!**

```bash
# Create vercel.json to ensure proper Next.js detection
cat > vercel.json << 'EOF'
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
EOF
```

## Step 7: Initial Git Setup and Vercel Test

```bash
# Initialize git and make initial commit
git init
git add .
git commit -m "feat: initial Next.js project setup with quality tools

- Added TypeScript, Tailwind CSS, ESLint configuration
- Installed Prettier, ESLint, and quality monitoring tools
- Configured formatting and linting scripts
- Added vercel.json for proper deployment detection
- Ready for AI agent development workflow"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/ai-tinkerers-demo.git

# Push to GitHub (this should trigger Vercel deployment)
git branch -M main
git push -u origin main
```

## Step 8: Verify Vercel Deployment

```bash
# Check Vercel deployment status
vercel --version
vercel list

# Or visit your Vercel dashboard to see the deployment
# The live site should now work properly!
```

## Step 9: Test Quality Tools Before Demo

```bash
# Test that all quality tools work
npm run format      # Should format all files
npm run lint:check  # Should show no errors
npm run type-check  # Should pass TypeScript check
npm run quality     # Should run all quality checks
```

## Step 10: Create a Simple Test Feature (Optional)

To fully test the workflow, add a simple component:

```bash
# Create a test component to verify everything works
mkdir -p src/components
```

Create `src/components/TestComponent.tsx`:
```typescript
export default function TestComponent() {
  return (
    <div className="p-4 bg-blue-100 rounded">
      <h2 className="text-xl font-bold">Test Component</h2>
      <p>This component tests our quality workflow.</p>
    </div>
  );
}
```

Update `src/app/page.tsx` to include it:
```typescript
import TestComponent from '@/components/TestComponent';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI Tinkerers Demo</h1>
      <TestComponent />
    </main>
  );
}
```

Then test the quality workflow:
```bash
npm run quality
git add .
git commit -m "feat: add test component for demo verification"
git push
```

## Verification Checklist

✅ Next.js app runs locally (`npm run dev`)
✅ Quality tools work (`npm run quality`)
✅ Git repository connected to GitHub
✅ Vercel deployment triggers on push
✅ Live site accessible via Vercel URL
✅ All dependencies installed for subagents

Your project is now ready for the Claude Code subagent demo!