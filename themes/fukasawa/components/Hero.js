import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'

/**
 * Hero section for Fukasawa theme
 * Displays the latest post in a minimalist style
 */
const Hero = ({ posts }) => {
  const { locale } = useGlobal()
  const latestPost = posts?.[0]

  if (!latestPost) return null

  return (
    <div className='w-full mb-8'>
      <div className='relative group overflow-hidden rounded-lg aspect-[16/9]'>
        <Link href={`${siteConfig('SUB_PATH', '')}/${latestPost.slug}`}>
          <LazyImage
            src={latestPost.pageCover || siteConfig('HOME_BANNER')}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            alt={latestPost.title}
          />
          <div className='absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 flex flex-col justify-end p-8'>
            <h1 className='text-white text-3xl font-bold mb-4 line-clamp-2'>
              {latestPost.title}
            </h1>
            <p className='text-gray-200 line-clamp-2 mb-4'>
              {latestPost.summary}
            </p>
            <div className='inline-block'>
              <span className='text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm hover:bg-opacity-70 transition-all duration-200'>
                {locale.COMMON.READ_MORE}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Hero