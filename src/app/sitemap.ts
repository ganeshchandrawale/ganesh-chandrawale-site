import { getAllBlogPosts, getAllAIInsights } from '@/lib/posts'
import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://ganeshchandrawale.info'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts()
  const aiInsights = getAllAIInsights()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects/billing-transformation`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/settlements-london-market`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const aiUrls: MetadataRoute.Sitemap = aiInsights.map((post) => ({
    url: `${BASE_URL}/ai-insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogUrls, ...aiUrls]
}
