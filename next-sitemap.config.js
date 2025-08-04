/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mksree-gh.github.io', // No trailing slash
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ✅ Avoids sitemap-0.xml confusion
  exclude: ['/404'],
  changefreq: undefined, // Optional: safer to omit unless intentional
  priority: undefined,
  sitemapSize: 5000, // Safe default
};
