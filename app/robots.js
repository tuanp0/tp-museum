export const dynamic = 'force-static'

const robots = () => {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://musee.tuanphung.com/sitemap.xml',
  }
}

export default robots