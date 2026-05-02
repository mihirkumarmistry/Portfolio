import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: '[https://mihirkumar-mistry.web.app/sitemap.xml](https://mihirkumar-mistry.web.app/sitemap.xml)',
  }
}