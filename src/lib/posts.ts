import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  category: 'blog' | 'ai-insights'
  readTime?: string
  linkedinPost?: boolean
}

export type Post = PostMeta & {
  content: string
}

const blogDir = path.join(process.cwd(), 'content/blog')
const aiDir = path.join(process.cwd(), 'content/ai-insights')

function getPostsFromDir(dir: string, category: 'blog' | 'ai-insights'): PostMeta[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  return files.map((file) => {
    const slug = file.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data } = matter(raw)
    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      excerpt: data.excerpt || '',
      category,
      readTime: data.readTime || '3 min read',
      linkedinPost: data.linkedinPost || false,
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllBlogPosts(): PostMeta[] {
  return getPostsFromDir(blogDir, 'blog')
}

export function getAllAIInsights(): PostMeta[] {
  return getPostsFromDir(aiDir, 'ai-insights')
}

export function getAllPosts(): PostMeta[] {
  return [...getAllBlogPosts(), ...getAllAIInsights()]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string, category: 'blog' | 'ai-insights'): Post | null {
  const dir = category === 'blog' ? blogDir : aiDir
  const filePath = path.join(dir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt || '',
    category,
    readTime: data.readTime || '3 min read',
    linkedinPost: data.linkedinPost || false,
    content,
  }
}
