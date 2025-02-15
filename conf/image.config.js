/**
 * Image related configuration
 *
 * e.g., images.unsplash.com (all images from Notion image hosting will be replaced). If you have already added a random image URL in Notion, and that service goes down or stops working, you can switch all images with one click by configuring that URL here.
 * By default, the homepage cover image and avatar you upload to Notion will also be replaced. It is recommended to place the homepage cover image and avatar on other image hosting services and configure the link in Notion.
 */
module.exports = {
  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion domain, you can choose to use your own domain for reverse proxy. If you don't understand what a reverse proxy is, do not modify this item.
  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // Default image compression width, applies to blog cover and article content. The smaller the width, the faster the image loads.
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // Image quality width after clicking to zoom in on the article image, does not represent the actual display width on the webpage.
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // Random image API. If the following keywords are not configured, the homepage cover, avatar, and article cover images will be replaced with random images.
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', // URL keywords that trigger image replacement (multiple keywords can be separated by commas). Only images with URLs containing these keywords will be replaced with the random image URL above.

  // Website images
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // Lazy load placeholder image URL, supports base64 or URL
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // This configuration is deprecated, do not use; AMAZON solution is no longer supported, only Notion solution is supported. ['Notion','AMAZON'] Site image prefix, default Notion: (https://notion.so/images/xx), AMAZON (https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // Whether to automatically add shadows to article images
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800 // Notion image compression width
}
