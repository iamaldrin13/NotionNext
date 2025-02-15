const { THEME } = require('./blog.config')
const fs = require('fs')
const path = require('path')
const BLOG = require('./blog.config')
const { extractLangPrefix } = require('./lib/utils/pageId')

/**
 * Bundle analyzer configuration
 * Analyzes the size and composition of the application bundle
 */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: BLOG.BUNDLE_ANALYZER
})

/**
 * Scans theme directory to get available themes
 * Returns an array of theme folder names under the /themes directory
 */
const themes = scanSubdirectories(path.resolve(__dirname, 'themes'))

/**
 * Configure multi-language support
 * Detects and configures available languages based on Notion page IDs
 * @returns {string[]} Array of language codes supported by the site
 */
const locales = (function () {
  // Check how many languages are supported based on BLOG_NOTION_PAGE_ID.
  // Supports configuring multiple language page IDs in the format xxx,zh:xxx,en:xxx
  const langs = [BLOG.LANG.slice(0, 2)]
  if (BLOG.NOTION_PAGE_ID.indexOf(',') > 0) {
    const siteIds = BLOG.NOTION_PAGE_ID.split(',')
    for (let index = 0; index < siteIds.length; index++) {
      const siteId = siteIds[index]
      const prefix = extractLangPrefix(siteId)
      // If it contains a prefix such as zh, en, etc.
      if (prefix) {
        if (!langs.includes(prefix)) {
          langs.push(prefix)
        }
      }
    }
  }
  return langs
})()

/**
 * Pre-build cleanup function
 * Removes existing sitemap files before generation to prevent conflicts
 * Only runs during export and build operations
 */
const preBuild = (function () {
  if (
    !process.env.npm_lifecycle_event === 'export' &&
    !process.env.npm_lifecycle_event === 'build'
  ) {
    return
  }
  // Delete the public/sitemap.xml file; otherwise, it will conflict with /pages/sitemap.xml.js.
  const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml')
  if (fs.existsSync(sitemapPath)) {
    fs.unlinkSync(sitemapPath)
    console.log('Deleted existing sitemap.xml from public directory')
  }

  const sitemap2Path = path.resolve(__dirname, 'sitemap.xml')
  if (fs.existsSync(sitemap2Path)) {
    fs.unlinkSync(sitemap2Path)
    console.log('Deleted existing sitemap.xml from root directory')
  }
})()

/**
 * Scans a directory for subdirectories
 * Used to detect available themes in the themes folder
 * @param {string} directory - Path to directory to scan
 * @returns {string[]} Array of subdirectory names
 */
function scanSubdirectories(directory) {
  const subdirectories = []

  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file)
    const stats = fs.statSync(fullPath)
    if (stats.isDirectory()) {
      subdirectories.push(file)
    }

    // subdirectories.push(file)
  })

  return subdirectories
}

/**
 * Next.js configuration object
 * Contains all the configuration settings for the Next.js application including:
 * - Build settings
 * - i18n configuration
 * - Image optimization
 * - Redirects and rewrites
 * - Security headers
 * - Webpack customization
 * - Export configuration
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  output: process.env.EXPORT ? 'export' : process.env.NEXT_BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
  staticPageGenerationTimeout: 120,
  // Multilingual, disabled during export
  i18n: process.env.EXPORT
    ? undefined
    : {
        defaultLocale: BLOG.LANG.slice(0, 2),
        // All supported languages, fill in as needed
        locales
      },
  images: {
    // Image compression
    formats: ['image/avif', 'image/webp'],
    // Allowed image domains for next/image
    domains: [
      'gravatar.com',
      'www.notion.so',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'p1.qhimg.com',
      'webmention.io',
      'ko-fi.com'
    ]
  },

  // Default redirect feed to /public/rss/feed.xml
  redirects: process.env.EXPORT
    ? undefined
    : async () => {
        return [
          {
            source: '/feed',
            destination: '/rss/feed.xml',
            permanent: true
          }
        ]
      },
  // Rewrite URLs
  rewrites: process.env.EXPORT
    ? undefined
    : async () => {
        // Handle multilingual redirects
        const langsRewrites = []
        if (BLOG.NOTION_PAGE_ID.indexOf(',') > 0) {
          const siteIds = BLOG.NOTION_PAGE_ID.split(',')
          const langs = []
          for (let index = 0; index < siteIds.length; index++) {
            const siteId = siteIds[index]
            const prefix = extractLangPrefix(siteId)
            // If it contains a prefix such as zh, en, etc.
            if (prefix) {
              langs.push(prefix)
            }
            console.log('[Locales]', siteId)
          }

          // Map multilingual
          // Example: source: '/:locale(zh|en)/:path*'; :locale() will put the language into the rewritten `?locale=`.
          langsRewrites.push(
            {
              source: `/:locale(${langs.join('|')})/:path*`,
              destination: '/:path*'
            },
            // Match cases without a path, such as [domain]/zh or [domain]/en
            {
              source: `/:locale(${langs.join('|')})`,
              destination: '/'
            },
            // Match cases without a path, such as [domain]/zh/ or [domain]/en/
            {
              source: `/:locale(${langs.join('|')})/`,
              destination: '/'
            }
          )
        }

        return [
          ...langsRewrites,
          // Pseudo-static rewrite
          {
            source: '/:path*.html',
            destination: '/:path*'
          }
        ]
      },
  headers: process.env.EXPORT
    ? undefined
    : async () => {
        return [
          {
            source: '/:path*{/}?',
            headers: [
              { key: 'Access-Control-Allow-Credentials', value: 'true' },
              { key: 'Access-Control-Allow-Origin', value: '*' },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
              },
              {
                key: 'Access-Control-Allow-Headers',
                value:
                  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
              }
            ]
          }
        ]
      },
  webpack: (config, { dev, isServer }) => {
    // Dynamic theme: add resolve.alias configuration to map dynamic paths to actual paths
    config.resolve.alias['@'] = path.resolve(__dirname)

    if (!isServer) {
      console.log('[Default Theme]', path.resolve(__dirname, 'themes', THEME))
    }
    config.resolve.alias['@theme-components'] = path.resolve(
      __dirname,
      'themes',
      THEME
    )
    // Enable source maps in development mode
    if (process.env.NODE_ENV_API === 'development') {
      config.devtool = 'source-map'
    }
    return config
  },
  experimental: {
    scrollRestoration: true
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Ignore /pages/sitemap.xml.js during static export, otherwise it conflicts with the dynamic file getServerSideProps
    const pages = { ...defaultPathMap }
    delete pages['/sitemap.xml']
    delete pages['/auth']
    return pages
  },
  publicRuntimeConfig: {
    // This configuration can be accessed both on the server and in the browser
    THEMES: themes
  }
}

/**
 * Exports the Next.js configuration
 * Adds bundle analyzer if ANALYZE environment variable is set
 */
module.exports = process.env.ANALYZE
  ? withBundleAnalyzer(nextConfig)
  : nextConfig
