// Note: process.env.XX are Vercel environment variables. For configuration, see: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id!!! Duplicate Template from https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'fukasawa', // Current theme, all supported themes can be found in the themes folder; the theme name is the folder name, e.g., example, fukasawa, gitbook, heo, hexo, landing, matery, medium, next, nobelium, plog, simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g., 'zh-CN','en-US' see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, // e.g., if left empty, the current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // Pseudo-static path, when enabled, all article URLs end with .html.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // Cache update interval in seconds; each page has a 5-second purely static period, during which no matter how many times it is accessed, it will not fetch Notion data; increasing this value helps save Vercel resources and improve access speed, but will also cause article updates to be delayed.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'dark', // ['light', 'dark', 'auto'], // light for day mode, dark for night mode, auto for automatic night mode based on time and theme
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Night mode start and end time, false to disable automatic night mode switching based on time

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Kiryuuki', // Your nickname, e.g., tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'An ordinary foodie 🍚', // Author bio
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://x.com/kiryuuki_atm', // Website address
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog', // Website keywords separated by commas
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // Blog favicon configuration, default uses /public/favicon.ico, supports online images, e.g., https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Record number 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // Record query link, if using Mengbei, please fill in here

  // RSS subscription
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Whether to enable RSS subscription function

  // Other complex configurations
  // The original configuration file was too long, and not everyone will use it, so the configuration is split into the /conf/ directory, find the corresponding file and modify it as needed
  ...require('./conf/comment.config'), // Comment plugin
  ...require('./conf/contact.config'), // Author contact configuration
  ...require('./conf/post.config'), // Article and list configuration
  ...require('./conf/analytics.config'), // Site visit statistics
  ...require('./conf/image.config'), // Website image related configuration
  ...require('./conf/font.config'), // Website font
  ...require('./conf/right-click-menu'), // Custom right-click menu related configuration
  ...require('./conf/code.config'), // Website code block style
  ...require('./conf/animation.config'), // Animation beautification effects
  ...require('./conf/widget.config'), // Widgets floating on the webpage, such as chat customer service, pet widgets, music players, etc.
  ...require('./conf/ad.config'), // Advertising revenue plugin
  ...require('./conf/plugin.config'), // Other third-party plugins, such as Algolia full-text index

  // Advanced usage
  ...require('./conf/layout-map.config'), // Route and layout mapping customization, such as customizing the page layout of specific routes
  ...require('./conf/notion.config'), // Extended configuration related to reading Notion databases, such as customizing table headers
  ...require('./conf/dev.config'), // Configuration to pay attention to during development and debugging

  // Custom external scripts and styles
  CUSTOM_EXTERNAL_JS: [''], // e.g., ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g., ['http://xx.com/style.css','http://xx.com/style.css']

  // Custom menu
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // Supports Menu type menus, replacing the Page type before version 3.12

  // Article list related settings
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || false, // Whether to allow copying page content, default is allowed, if set to false, copying content is completely prohibited.

  // Sidebar layout reverse (left becomes right, right becomes left) Supported themes: hexo, next, medium, fukasawa, example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // Welcome message typing effect, supported by Hexo and Matery themes, multiple welcome messages separated by commas.
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi, I am a programmer, Hi, I am a worker, Hi, I am a foodie, welcome to my blog 🎉',

  // UUID redirect to slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG