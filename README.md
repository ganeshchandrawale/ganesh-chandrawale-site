# ganeshchandrawale.io

Personal website and blog for Ganesh Chandrawale — Solutions Architect, problem solver, lifelong learner.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with gray-matter frontmatter
- **Deployment:** GitHub Pages via GitHub Actions
- **Managed via:** Amazon Kiro

## Project Structure

```
├── content/
│   ├── blog/              # Blog posts (.md files)
│   └── ai-insights/       # AI Insights posts (.md files)
├── src/
│   ├── app/
│   │   ├── page.tsx       # Homepage (Hero + About + Journey + Projects + AI Teaser + Contact)
│   │   ├── blog/          # Blog listing + individual post pages
│   │   └── ai-insights/   # AI Insights listing + individual post pages
│   ├── components/        # Reusable UI components
│   ├── lib/
│   │   └── posts.ts       # Markdown reading utilities
│   └── styles/
│       └── globals.css    # Global styles + animations
├── public/
│   └── images/            # Static assets (add profile photo here)
└── .github/
    └── workflows/
        └── deploy.yml     # Auto-deploy to GitHub Pages on push to main
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Writing a Blog Post

1. Create a new `.md` file in `content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your post title"
date: "2026-03-04"
excerpt: "A one or two sentence summary shown in the listing page."
readTime: "4 min read"
linkedinPost: true   # set to true if cross-posted to LinkedIn
category: blog
---

Your content here...
```

3. Commit and push to `main` — the site deploys automatically.

## Writing an AI Insights Post

Same as above, but save the file in `content/ai-insights/` and set `category: ai-insights`.

## Adding a Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. Update `src/components/Hero.tsx` to include an `<Image>` component

## Custom Domain Setup

1. Purchase your domain (e.g. `ganeshchandrawale.io`)
2. Add a `CNAME` file to the `public/` folder containing just your domain name:
   ```
   ganeshchandrawale.io
   ```
3. In your domain registrar's DNS settings, add:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
4. In GitHub repo Settings → Pages → Custom domain, enter your domain.

## Deployment

Push to `main` — GitHub Actions handles the rest automatically. Build takes ~2 minutes.

## Colours & Typography

| Element | Value |
|---|---|
| Primary (Teal) | `#0F4C5C` |
| Accent (Amber) | `#D4791A` |
| Background | `#FAF7F2` (parchment) |
| Display font | Playfair Display |
| Body font | Lora |
| UI font | DM Sans |
