/**
 * Configuration that developers may need to pay attention to
 */
module.exports = {
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Whether to display the debug button
  // Custom colors for TAILWINDCSS configuration, deprecated
  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g., #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'

  // Redis cache database URL
  REDIS_URL: process.env.REDIS_URL || '',

  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === 'build' ||
    process.env.npm_lifecycle_event === 'export', // Cache is enabled by default during packaging, enabling this feature during development or runtime is not very meaningful.
  isProd: process.env.VERCEL_ENV === 'production' || process.env.EXPORT, // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // Whether to display the compiled dependency content and size
  VERSION: (() => {
    try {
      // Prefer to use environment variables, otherwise get the version number from package.json
      return (
        process.env.NEXT_PUBLIC_VERSION || require('../package.json').version
      )
    } catch (error) {
      console.warn('Failed to load package.json version:', error)
      return '1.0.0' // Default version number
    }
  })()
}
