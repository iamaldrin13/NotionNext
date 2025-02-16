import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData, getPost } from '@/lib/db/getSiteData'
import { checkSlugHasOneSlash, processPostData } from '@/lib/utils/post'
import { idToUuid } from 'notion-utils'
import Slug from '..'

/**
 * Page component for accessing content via Notion slug
 * Handles second-level directory paths like /article/about
 * @param {Object} props - Component properties including post data
 * @returns {JSX.Element} Rendered Slug component with post content
 */
const PrefixSlug = props => {
  return <Slug {...props} />
}

/**
 * Generate static paths for all possible prefix/slug combinations
 * Used by Next.js for static site generation (SSG)
 * @returns {Object} Path configuration for Next.js with fallback behavior
 */
export async function getStaticPaths() {
  if (!BLOG.isProd) {
    return {
      paths: [],
      fallback: true
    }
  }

  const from = 'slug-paths'
  const { allPages } = await getGlobalData({ from })

  // Split slug by '/' into prefix and slug fields; e.g., article/test
  // Users can access via [domain]/[prefix]/[slug] path, i.e., [domain]/article/test
  const paths = allPages
    ?.filter(row => checkSlugHasOneSlash(row))
    .map(row => ({
      params: { prefix: row.slug.split('/')[0], slug: row.slug.split('/')[1] }
    }))

  // Add additional access path - allow access via [category]/[slug]
  // E.g., if article slug is 'test' and category is 'production'
  // Besides [domain]/[slug], also supports category access: [domain]/[category]/[slug]

  return {
    paths: paths,
    fallback: true
  }
}

/**
 * Fetch data for each prefix/slug combination
 * Gets post data and processes it for display
 * @param {Object} params - Contains prefix, slug and locale information
 * @returns {Object} Props for the page component including post data
 */
export async function getStaticProps({ params: { prefix, slug }, locale }) {
  const fullSlug = prefix + '/' + slug
  const from = `slug-props-${fullSlug}`
  const props = await getGlobalData({ from, locale })

  // Find article in the list
  props.post = props?.allPages?.find(p => {
    return (
      p.type.indexOf('Menu') < 0 &&
      (p.slug === slug || p.slug === fullSlug || p.id === idToUuid(fullSlug))
    )
  })

  // Handle post information for articles not in the list
  if (!props?.post) {
    const pageId = slug.slice(-1)[0]
    if (pageId.length >= 32) {
      const post = await getPost(pageId)
      props.post = post
    }
  }

  if (!props?.post) {
    // Cannot retrieve article
    props.post = null
  } else {
    await processPostData(props, from)
  }
  
  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export default PrefixSlug
