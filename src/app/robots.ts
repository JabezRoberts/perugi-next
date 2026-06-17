// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//     },
//     sitemap: 'https://perugipartners.com/sitemap.xml',
//   }
// }

export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://perugipartners.com/sitemap.xml',
  }
}