# Content Verification Helper Skill

This is a helper skill that provides common verification and validation functions for content publishing on Ganesh Chandrawale's website.

## Verification Functions

### Frontmatter Validation
```yaml
# Required fields for all posts
title: string (required, descriptive)
date: string (required, YYYY-MM-DD format)
excerpt: string (required, 150-200 chars ideal)
readTime: string (required, "X min read" format)
linkedinPost: boolean (required, typically true)
category: string (required, "blog" or "ai-insights")
```

### File Naming Conventions
- Use kebab-case for filenames
- No spaces, special characters, or uppercase
- Extension must be `.md`
- Filename should reflect the content topic
- Examples: `my-new-post.md`, `ai-industry-trends.md`

### Content Quality Checks
1. **Structure**: Proper markdown headings (H1 for title, H2/H3 for sections)
2. **Length**: Appropriate for declared read time (150-200 words per minute)
3. **Links**: All internal links use correct paths
4. **Images**: If used, proper alt text and paths
5. **Code blocks**: Proper syntax highlighting when applicable

### Homepage Teaser Updates
Both BlogTeaser and AIInsightsTeaser follow the same pattern:
```javascript
const featuredPosts = [
  {
    title: 'Exact title from frontmatter',
    excerpt: 'Exact excerpt from frontmatter', 
    date: 'DD MMM YYYY format (e.g., "16 Mar 2026")',
    readTime: 'Exact readTime from frontmatter',
    slug: 'filename-without-extension'
  },
  // ... keep only 3 most recent posts
]
```

### Diagnostic Checks
Always run these checks after updates:
1. TypeScript diagnostics on updated components
2. Verify markdown file exists and is readable
3. Check frontmatter parsing
4. Validate slug matches filename
5. Confirm chronological ordering

### Date Formatting
- **Frontmatter**: `YYYY-MM-DD` (e.g., "2026-03-16")
- **Teaser Display**: `DD MMM YYYY` (e.g., "16 Mar 2026")
- Always use current or future dates for new posts

### Error Recovery
Common issues and solutions:
- **TypeScript errors**: Check for typos in component updates
- **Missing posts**: Verify file path and naming
- **Wrong order**: Check date formatting and sorting logic
- **Broken links**: Ensure slug matches filename exactly

## Integration Points

### Blog Posts
- File location: `content/blog/`
- Component: `src/components/BlogTeaser.tsx`
- Array: `featuredBlogPosts`
- Route: `/blog/[slug]`

### AI Insights  
- File location: `content/ai-insights/`
- Component: `src/components/AIInsightsTeaser.tsx`
- Array: `featuredInsights`
- Route: `/ai-insights/[slug]`

## Success Validation Checklist

- [ ] Markdown file created with correct frontmatter
- [ ] Filename follows kebab-case convention
- [ ] Teaser component updated with new post
- [ ] Post appears in correct chronological order
- [ ] No TypeScript/diagnostic errors
- [ ] All required frontmatter fields present
- [ ] Date formats consistent
- [ ] Slug matches filename
- [ ] Content quality meets standards