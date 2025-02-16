/**
 * Plugin configurations
 * Contains settings for various plugins such as:
 * - Full-text search (Algolia)
 * - AI article summary generation
 * - Widget components (e.g., AI summary widget, email subscription)
 */
module.exports = {
  // Full-text search using Algolia
  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // View at https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // Admin key (do not expose publicly). See https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // Search-only API key for client-side requests
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Algolia index name to be used as the database

  // AI article summary generation configuration
  AI_SUMMARY_API: process.env.AI_SUMMARY_API || '',
  AI_SUMMARY_KEY: process.env.AI_SUMMARY_KEY || '',
  AI_SUMMARY_CACHE_TIME: process.env.AI_SUMMARY_CACHE_TIME || 1800, // Cache duration in seconds
  AI_SUMMARY_WORD_LIMIT: process.env.AI_SUMMARY_WORD_LIMIT || 1000,

  // Widget component related configuration
  // AI article summary widget (see https://docs_s.tianli0.top/)
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Email configuration for subscription
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Mailchimp subscription list ID; refer to documentation for usage.
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null // Mailchimp API key
}
