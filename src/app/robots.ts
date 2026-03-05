import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.ganeshchandrawale.io/sitemap.xml',
    host: 'https://www.ganeshchandrawale.io',
  }
}
