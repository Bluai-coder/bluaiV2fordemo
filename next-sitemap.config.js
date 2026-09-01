/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.bluai.ai',
  generateRobotsTxt: true,  // robots.txt bhi auto generate hoga
  generateIndexSitemap: false,
  outDir: './out',
  
  // Saare static pages automatically detect honge
  transform: async (config, path) => {
    // Priority set karo pages ke hisaab se
    const priorities = {
      '/': 1.0,
      '/products/vitals-chair': 0.9,
      '/products/blu-health': 0.9,
      '/products/blu-access': 0.9,
      '/products/blu-asha': 0.9,
      '/products/blu-dms': 0.8,
      '/products/blu-id': 0.8,
      '/products/blu-mail': 0.8,
      '/products/blu-notes': 0.8,
      '/about': 0.7,
      '/blog': 0.7,
      '/contact': 0.6,
    };
    
    return {
      loc: path,
      changefreq: 'weekly',
      priority: priorities[path] || 0.5,
      lastmod: new Date().toISOString(),
    };
  },
  
  // Manual pages add karo (agar auto detect nahi ho rahe)
  additionalPaths: async (config) => {
    return [
      '/products/blu-mental-health',
      '/products/blu-neonatal',
      '/products/vitalschair-enquiry',
      '/blubilling',
      '/investor',
    ].map(path => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  },
  
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
};