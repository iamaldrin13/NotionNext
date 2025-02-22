import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * Button to navigate to the dashboard
 * @returns {JSX.Element|null}
 */
export default function DashboardButton({ className }) {
  const { asPath } = useRouter()

  // Check if the dashboard button should be enabled
  const enableDashboardButton = siteConfig(
    'ENABLE_DASHBOARD_BUTTON',
    process.env.PUBLIC_NEXT_ENABLE_DASHBOARD_BUTTON
  )

  // If the button is not enabled or already on the dashboard page, return null
  if (!enableDashboardButton) {
    return null
  }

  if (asPath?.indexOf('/dashboard') === 0) {
    return null
  }

  // Render the dashboard button
  return (
    <button
      type='button'
      className={`${className || ''} text-white bg-gray-800 hover:bg-gray-900 hover:ring-4 hover:ring-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700`}>
      <Link href='/dashboard'>Dashboard</Link>
    </button>
  )
}
