/**
 * Post-related Features Configuration
 */
module.exports = {
  // URL prefix for posts
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? 'article',
  // Default path prefix for POST type articles, e.g., the default path for POST type is /article/[slug]
  // If this configuration is set to an empty string, the article will have no prefix path
  // Supports custom permalink formats similar to WordPress: https://wordpress.org/documentation/article/customize-permalinks/
  // Currently implemented: %year%/%month%/%day%
  // Example: To change the link prefix to article + timestamp, set it to: 'article/%year%/%month%/%day%'

  // Schedule publishing based on the post's publish date field, controlling automatic publishing and unpublishing
  POST_SCHEDULE_PUBLISH: process.env.NEXT_PUBLIC_NOTION_SCHEDULE_PUBLISH || true,

  // Share bar
  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Toggle for the share bar at the bottom of the article
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // Sharing services, displayed in order, separated by commas
  // All supported sharing services: link (copy link), wechat, qq, weibo, email, facebook, twitter, telegram, messenger, line, reddit, whatsapp, linkedin, vkshare, okshare, tumblr, livejournal, mailru, viber, workplace, pocket, instapaper, hatena

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || false, // Whether to display title icon
  POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // Disable click in gallery view, useful for inserting links in the friend link page's gallery
  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll'] Article list style: pagination or single-page scroll loading
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // Whether to load article previews in the list
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // Number of preview lines for blogs
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // Number of recommended articles
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // Number of posts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'date', // Sorting method: 'date' by time, 'notion' controlled by Notion
  POST_WAITING_TIME_FOR_404: process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // Article loading timeout in seconds; redirects to 404 page after timeout

  // Tag-related
  TAG_SORT_BY_COUNT: true, // Whether to sort tags in descending order by the number of articles, with more articles appearing first
  IS_TAG_COLOR_DISTINGUISHED: process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true // Whether to distinguish tag colors for tags with the same name
}
