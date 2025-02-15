/**
 * Layout mapping configuration
 * Maps URL paths to specific theme components
 * Controls which layout component is used for different routes
 * 
 * Keys: URL path patterns
 * - Static paths like '/' or '/archive'
 * - Dynamic paths with parameters in brackets like '/[prefix]'
 * - Nested dynamic paths like '/[prefix]/[slug]'
 * 
 * Values: Component names from the active theme
 * - Must match the names of components in the theme folder
 * - Each theme must implement these layout components
 */
module.exports = {
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',           // Base layout for all pages
    '/': 'LayoutIndex',           // Home page
    '/archive': 'LayoutArchive',  // Archive page
    '/page/[page]': 'LayoutPostList', // Paginated post list
    '/category/[category]': 'LayoutPostList', // Category post list
    '/category/[category]/page/[page]': 'LayoutPostList', // Paginated category posts
    '/tag/[tag]': 'LayoutPostList', // Tag post list
    '/tag/[tag]/page/[page]': 'LayoutPostList', // Paginated tag posts 
    '/search': 'LayoutSearch',    // Search page
    '/search/[keyword]': 'LayoutSearch', // Search results
    '/search/[keyword]/page/[page]': 'LayoutSearch', // Paginated search results
    '/404': 'Layout404',         // 404 error page
    '/tag': 'LayoutTagIndex',    // Tags index page
    '/category': 'LayoutCategoryIndex', // Categories index page
    '/[prefix]': 'LayoutSlug',   // Dynamic routes with prefix
    '/[prefix]/[slug]': 'LayoutSlug', // Article pages
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug', // Nested article pages
    '/auth/result': 'LayoutAuth', // Authentication result page
    '/sign-in/[[...index]]': 'LayoutSignIn', // Sign in page
    '/sign-up/[[...index]]': 'LayoutSignUp', // Sign up page
    '/dashboard/[[...index]]': 'LayoutDashboard' // Dashboard pages
  }
}
