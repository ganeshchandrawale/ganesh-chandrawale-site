# ganeshchandrawale.info

Personal website and thought-leadership space for Ganesh Chandrawale — Solution Architect, problem solver, lifelong learner.

## Tech Stack

- **Framework:** Next.js 14 (App Router, static export)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with gray-matter frontmatter
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
├── content/
│   ├── blog/              # Blog posts (.md files)
│   └── ai-insights/       # AI Insights posts (.md files)
├── src/
│   ├── app/               # Next.js pages (blog, ai-insights, projects)
│   ├── components/        # Reusable UI components
│   ├── lib/posts.ts       # Markdown reading utilities
│   └── styles/globals.css # Global styles + animations
├── public/                # Static assets
└── .github/workflows/     # Auto-deploy to GitHub Pages on push to main
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Writing a New Post

Posts are plain Markdown files. No CMS, no build step — just create the file, commit, and push.

### Blog post

1. Create a file in `content/blog/your-post-slug.md`
2. The filename becomes the URL: `/blog/your-post-slug`

```markdown
---
title: "Your post title"
date: "2026-03-18"
excerpt: "One or two sentences shown on the listing page and used as the article standfirst."
readTime: "4 min read"
linkedinPost: true
category: blog
---

Your content here...
```

### AI Insights post

Same as above, but save in `content/ai-insights/your-post-slug.md`.  
The URL will be `/ai-insights/your-post-slug`.

```markdown
---
title: "Your post title"
date: "2026-03-18"
excerpt: "One or two sentences shown on the listing page."
readTime: "5 min read"
linkedinPost: false
category: ai-insights
---

Your content here...
```

### Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | yes | Shown as the H1 and in metadata |
| `date` | yes | Format: `YYYY-MM-DD`. Posts are sorted newest first. |
| `excerpt` | yes | Shown on listing page and as the article standfirst |
| `readTime` | no | Defaults to `3 min read` if omitted |
| `linkedinPost` | no | Set `true` to show "Also on LinkedIn" badge. Defaults to `false`. |
| `category` | yes | Must be `blog` or `ai-insights` |

### Slug / filename rules

- Use lowercase, hyphens only — no spaces or special characters
- Keep it short and descriptive: `why-projects-fail.md`, `ai-in-regulated-industries.md`
- The filename is the URL — once published, avoid renaming it

### Markdown tips

- Use `##` and `###` for headings (H1 is the title, already rendered)
- Use `---` for a horizontal divider between sections
- Use `**bold**` for emphasis sparingly
- Standard Markdown links: `[link text](https://url.com)`

---

## Content Guardrails

This site is written in a **personal capacity**. Before publishing any post, verify:

- No employer names, client names, or internal programme names
- No language implying ownership of internal IP ("frameworks I developed", "our programme")
- Experience framed as: practitioner perspective, architectural analysis, or industry observation — not "hands-on delivery" or "production"
- Tone: senior architect explaining how to think, not how to implement
- No absolute claims ("the correct way", "must", "the only approach")
- Author bio (in the author card) uses: *"Solution architect focused on large-scale systems, API platforms, and emerging AI integration patterns."*

The footer disclaimer is already included on every page automatically.

---

## Deployment

Push to `main` — GitHub Actions builds and deploys to GitHub Pages automatically. Takes ~2 minutes.

---

## Colours & Typography

| Element | Value |
|---|---|
| Primary teal | `#0F4C5C` |
| Accent amber | `#D4791A` |
| Background | `#FAF7F2` |
| Display font | Playfair Display |
| Body font | Lora |
| UI font | DM Sans |
