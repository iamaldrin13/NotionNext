// Note: process.env.XX are Vercel environment variables, see configuration method: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // Important page_id!!! Duplicate Template from https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '19ba83da978380b4b294d5282a6a56fb,en:19ba83da978381b494b3000c303b3bbb',
  THEME: process.env.NEXT_PUBLIC_THEME || 'fukasawa', // Current theme, all supported themes can be found in the themes folder; the theme name is the folder name, such as example, fukasawa, gitbook, heo, hexo, landing, matery, medium, next, nobelium, plog, simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // e.g 'zh-CN','en-US' see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // Pseudo-static path, when enabled, all article URLs end with .html.
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // Cache update interval in seconds; each page has a 5-second purely static period, during which no matter how many times it is accessed, notion data will not be fetched; increasing this value helps save Vercel resources and improve access speed, but it will also cause a delay in article updates.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light for day mode, dark for night mode, auto for automatic night mode based on time and theme
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Night mode start and end time, false to disable automatic night mode switching based on time

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Kiryuuki', // Your nickname, e.g., tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || 'An ordinary foodie 🍚', // Author bio
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://tangly1024.com', // Website address
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog', // Website keywords separated by commas
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // Blog favicon configuration, default is /public/favicon.ico, supports online images, e.g., https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // Record number for filing
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // Filing query link, if using other filing services, please fill in here

  // RSS subscription
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Whether to enable RSS subscription function

  // Other complex configurations
  // The original configuration file was too long, and not everyone would use it, so the configuration was split into the /conf/ directory. Find and modify the corresponding file as needed.
  ...require('./conf/comment.config'), // Comment plugin
  ...require('./conf/contact.config'), // Author contact configuration
  ...require('./conf/post.config'), // Article and list configuration
  ...require('./conf/analytics.config'), // Site visit statistics
  ...require('./conf/image.config'), // Website image-related configuration
  ...require('./conf/font.config'), // Website fonts
  ...require('./conf/right-click-menu'), // Custom right-click menu configuration
  ...require('./conf/code.config'), // Website code block styles
  ...require('./conf/animation.config'), // Animation beautification effects
  ...require('./conf/widget.config'), // Widgets floating on the webpage, such as chat customer service, pet widgets, music players, etc.
  ...require('./conf/ad.config'), // Advertising revenue plugin
  ...require('./conf/plugin.config'), // Other third-party plugins, such as Algolia full-text indexing

  // Advanced usage
  ...require('./conf/layout-map.config'), // Custom routing and layout mapping, such as customizing the page layout for specific routes
  ...require('./conf/notion.config'), // Extended configuration for reading Notion databases, such as custom headers
  ...require('./conf/dev.config'), // Configuration to pay attention to during development and debugging

  // Custom external scripts and styles
  CUSTOM_EXTERNAL_JS: [''], // e.g., ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g., ['http://xx.com/style.css','http://xx.com/style.css']

  // Custom menu
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // Supports Menu type menus, replacing the Page type before version 3.12

  // Article list related settings
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || false, // Whether to allow copying page content, default is allowed. If set to false, copying content is completely prohibited.

  // Sidebar layout reverse (left to right, right to left) Supported themes: hexo, next, medium, fukasawa, example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // Welcome message typing effect, supported by Hexo and Matery themes, multiple welcome messages separated by commas.
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi, I am a programmer, Hi, I am a worker, Hi, I am a foodie, Welcome to my blog 🎉',

  // UUID redirect to slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
