/**
 * Article related functionalities
 */
module.exports = {
  // Article URL prefix
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // Default path prefix for POST-type articles, e.g., default path is /article/[slug]
  // If set to an empty string, articles will have no prefix path.
  // Supports custom permalink formats similar to WordPress: https://wordpress.org/documentation/article/customize-permalinks/; currently only implements %year%/%month%/%day%
  // Example: to change the link into a prefix "article" with timestamp, set to: 'article/%year%/%month%/%day%'

  POST_SCHEDULE_PUBLISH:
    process.env.NEXT_PUBLIC_NOTION_SCHEDULE_PUBLISH || true, // Auto publish/unpublish based on the article's publish time field

  // Share bar
  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Toggle for displaying share bar at the bottom of the article
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'facebook,twitter,telegram', // Services to share, displayed in order, separated by commas
  // All supported sharing services: link (copy link), wechat, qq, weibo, email, facebook, twitter, telegram, messenger, line, reddit, whatsapp, linkedin, vkshare, okshare, tumblr, livejournal, mailru, viber, workplace, pocket, instapaper, hatena

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || false, // Whether to display a title icon
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // Disable clicks in gallery view to facilitate inserting links in friend pages
  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // Article list style: pagination or infinite scroll
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // Whether to load article previews in the list
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // Number of lines for blog preview
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // Number of recommended articles
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // Articles per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // Sorting method: 'date' for chronological order, 'notion' to be controlled by Notion
  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // Article load timeout in seconds; after timeout, redirect to 404 page

  // Tag related
  TAG_SORT_BY_COUNT: true, // Whether tags are sorted descending by article count (tags with more articles appear first)
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true // Whether tags with the same name should have distinguished colors
}
