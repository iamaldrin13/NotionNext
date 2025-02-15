import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPostBlocks } from '@/lib/db/getSiteData'
import { generateRobotsTxt } from '@/lib/robots.txt'
import { generateRss } from '@/lib/rss'
import { generateSitemapXml } from '@/lib/sitemap.xml'
import { DynamicLayout } from '@/themes/theme'
import { generateRedirectJson } from '@/lib/redirect'

/**
 * Home page component
 * Renders the main layout for the home page using the configured theme
 * @param {Object} props - Component properties including posts and configuration
 * @returns {JSX.Element} Rendered home page component
 */
const Index = props => {
  const theme = siteConfig('THEME', BLOG.THEME, props.NOTION_CONFIG)
  return <DynamicLayout theme={theme} layoutName='LayoutIndex' {...props} />
}

/**
 * Static Site Generation (SSG) data fetching
 * Fetches and prepares all data needed for the home page including:
 * - Posts and their preview content
 * - Generates SEO files (robots.txt, RSS feed, sitemap)
 * - Handles pagination and post previews
 * @param {Object} req - Contains locale information
 * @returns {Object} Props for the home page component
 */
export async function getStaticProps(req) {
  try {
    const { locale } = req
    const from = 'index'
    const props = await getGlobalData({ from, locale })
    const POST_PREVIEW_LINES = siteConfig(
      'POST_PREVIEW_LINES',
      12,
      props?.NOTION_CONFIG
    )
    props.posts = props.allPages?.filter(
      page => page.type === 'Post' && page.status === 'Published'
    )

    // Handle pagination
    if (siteConfig('POST_LIST_STYLE') === 'scroll') {
      // Scroll list returns all data to frontend by default
    } else if (siteConfig('POST_LIST_STYLE') === 'page') {
      // Slice posts for paginated display
      props.posts = props.posts?.slice(
        0,
        siteConfig('POSTS_PER_PAGE', 12, props?.NOTION_CONFIG)
      )
    }

    // Generate preview content for posts
    if (siteConfig('POST_LIST_PREVIEW', false, props?.NOTION_CONFIG)) {
      for (const i in props.posts) {
        const post = props.posts[i]
        if (post.password && post.password !== '') {
          continue
        }
        post.blockMap = await getPostBlocks(post.id, 'slug', POST_PREVIEW_LINES)
      }
    }

    // Generate SEO files
    generateRobotsTxt(props)  // Generate robots.txt
    generateRss(props)        // Generate RSS feed
    generateSitemapXml(props) // Generate sitemap.xml
    
    if (siteConfig('UUID_REDIRECT', false, props?.NOTION_CONFIG)) {
      generateRedirectJson(props) // Generate redirect mappings
    }

    // Generate full-text index - only executed during yarn build && process.env.npm_lifecycle_event === 'build'

    delete props.allPages

    // Generate tag options from existing posts
    const tagOptions = props.tags ? props.tags.map(tag => ({
      id: tag.name,
      name: tag.name,
      count: tag.count || 0
    })) : null

    return {
      props: {
        ...props,
        tagOptions
      },
      revalidate: process.env.EXPORT
        ? undefined
        : siteConfig(
            'NEXT_REVALIDATE_SECOND',
            BLOG.NEXT_REVALIDATE_SECOND,
            props.NOTION_CONFIG
          )
    }
  } catch (error) {
    console.error('Error in getStaticProps:', error)
    return {
      props: {
        posts: [],
        tags: [],
        tagOptions: null, // Provide a fallback null value
        // ...other props with fallback values
      },
      revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
    }
  }
}

export default Index
