# Quick Setup Guide for GitHub Pages

## Immediate Actions Required

### 1. Determine Your Hosting Type

**Option A: Root Domain** (e.g., `bestfranklinai.github.io`)
- ✅ No additional setup needed
- Skip to step 3

**Option B: Subdirectory** (e.g., `bestfranklinai.github.io/bestfranklinAI`)
- Repository name: `bestfranklinAI`
- Proceed to step 2

### 2. Set Base Path (Only for Subdirectory Hosting)

**In GitHub Repository**:
1. Go to: Settings → Secrets and variables → Actions → Variables tab
2. Click "New repository variable"
3. Name: `BASE_PATH`
4. Value: `/bestfranklinAI` (replace with your repo name)
5. Click "Add variable"

**For Local Development** (optional):
```bash
cp .env.local.example .env.local
```
Edit `.env.local`:
```
NEXT_PUBLIC_BASE_PATH=/bestfranklinAI
```

### 3. Enable GitHub Pages

1. Go to: Settings → Pages
2. Under "Build and deployment":
   - Source: **GitHub Actions**
3. Save

### 4. Deploy

```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

GitHub Actions will automatically build and deploy your site!

## Verify Deployment

1. Check Actions tab for build status
2. Once complete, visit your site:
   - Root: `https://bestfranklinai.github.io/`
   - Subdirectory: `https://bestfranklinai.github.io/bestfranklinAI/`

## Test Blog Images

Navigate to:
- `/blog` - Check blog list
- `/blog/ai-agent` - Verify images load
- `/blog/cryptography` - Verify images load

## Common Issues

| Issue | Solution |
|-------|----------|
| Images not loading | Check BASE_PATH variable matches repo name |
| 404 errors | Ensure .nojekyll exists in public/ |
| CSS not loading | Clear cache, verify BASE_PATH |
| Build fails | Check Actions log, verify pnpm-lock.yaml exists |

## Local Testing

```bash
# Install
pnpm install

# Develop
pnpm dev

# Build (test production build)
pnpm run build

# Verify output
ls -la out/
```

The `out/` directory contains your static site ready for deployment.
