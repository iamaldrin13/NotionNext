import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * Hero section displaying the latest post
 * @param {*} props
 * @returns
 */
const HeroLatestPost = ({ posts }) => {
  const { locale } = useGlobal()
  const latestPost = posts?.[0]

  if (!latestPost) return null

  return (
    <header
      id='hero-header'
      style={{ zIndex: 1 }}
      className='w-full h-screen relative bg-black'>
      <div className='text-white absolute bottom-0 flex flex-col h-full items-center justify-center w-full p-4'>
        {/* Latest Post Title */}
        <div className='font-bold text-4xl md:text-5xl shadow-text text-center mb-4'>
          <Link href={`${siteConfig('SUB_PATH', '')}/${latestPost.slug}`}>
            <span className='cursor-pointer hover:underline'>{latestPost.title}</span>
          </Link>
        </div>

        {/* Latest Post Summary */}
        <div className='mt-2 text-center font-medium shadow-text text-lg max-w-4xl'>
          {latestPost.summary}
        </div>

        {/* Read More Button */}
        <Link href={`${siteConfig('SUB_PATH', '')}/${latestPost.slug}`}>
          <button className='mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors'>
            {locale.COMMON.READ_MORE}
          </button>
        </Link>
      </div>

      <LazyImage
        id='hero-cover'
        alt={latestPost.title}
        src={latestPost.pageCover || siteConfig('HOME_BANNER')}
        className='w-full h-screen object-cover object-center'
      />
    </header>
  )
}

export default HeroLatestPost