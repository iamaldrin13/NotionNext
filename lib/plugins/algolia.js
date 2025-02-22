import BLOG from '@/blog.config'
import { getPageContentText } from '@/pages/search/[keyword]'
import algoliasearch from 'algoliasearch'

/**
 * Generate Full Text Index
 * Iterates over all pages and uploads data to Algolia if necessary
 * @param {Object} allPages - All pages to be indexed
 * @param {boolean} force - Whether to force re-indexing
 */
const generateAlgoliaSearch = async ({ allPages, force = false }) => {
  allPages?.forEach(p => {
    // Check if the post needs to be re-indexed
    if (p && !p.password) {
      uploadDataToAlgolia(p)
    }
  })
}

/**
 * Upload Data to Algolia
 * Determines if the Algolia index needs updating based on the last modified date
 * @param {Object} post - The post data to be indexed
 */
const uploadDataToAlgolia = async post => {
  // Connect and authenticate with your Algolia app
  const client = algoliasearch(BLOG.ALGOLIA_APP_ID, BLOG.ALGOLIA_ADMIN_APP_KEY)

  // Create a new index and add a record
  const index = client.initIndex(BLOG.ALGOLIA_INDEX)

  if (!post) {
    return
  }

  // Check if an index exists
  let existed
  let needUpdateIndex = false
  try {
    existed = await index.getObject(post.id)
  } catch (error) {
    // Usually means the index does not exist
  }

  if (!existed || !existed?.lastEditedDate || !existed?.lastIndexDate) {
    needUpdateIndex = true
  } else {
    const lastEditedDate = new Date(post.lastEditedDate)
    const lastIndexDate = new Date(existed.lastIndexDate)
    if (lastEditedDate.getTime() > lastIndexDate.getTime()) {
      needUpdateIndex = true
    }
  }

  // Update search index if necessary
  if (needUpdateIndex) {
    const record = {
      objectID: post.id,
      title: post.title,
      category: post.category,
      tags: post.tags,
      pageCover: post.pageCover,
      slug: post.slug,
      summary: post.summary,
      lastEditedDate: post.lastEditedDate, // Post last edited time
      lastIndexDate: new Date(), // 更新索引时间
      content: truncate(getPageContentText(post, post.blockMap), 8192) // 索引8192个字符，API限制总请求内容上限1万个字节
    }
    // console.log('更新Algolia索引', record)
    index
      .saveObject(record)
      .wait()
      .then(r => {
        console.log('Algolia索引更新', r)
      })
      .catch(err => {
        console.log('Algolia异常', err)
      })
  }
}

/**
 * 限制内容字节数
 * @param {*} str
 * @param {*} maxBytes
 * @returns
 */
function truncate(str, maxBytes) {
  let count = 0
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i)
    if (code <= 0x7f) {
      count += 1
    } else if (code <= 0x7ff) {
      count += 2
    } else if (code <= 0xffff) {
      count += 3
    } else {
      count += 4
    }
    if (count <= maxBytes) {
      result += str[i]
    } else {
      break
    }
  }
  return result
}

export { uploadDataToAlgolia, generateAlgoliaSearch }
