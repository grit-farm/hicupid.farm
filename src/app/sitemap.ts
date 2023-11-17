const URL = 'https://hicupid.farm'

export default async function sitemap() {
  const routes = ['', '/about', '/books', '/columns', '/faq'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
