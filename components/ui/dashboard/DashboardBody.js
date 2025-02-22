'use client'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import DashboardUser from './DashboardUser'

// Dynamically import dashboard components for lazy loading
const DashboardMenuList = dynamic(() => import('./DashboardMenuList'))
const DashboardItemMembership = dynamic(() => import('./DashboardItemMembership'))
const DashboardItemBalance = dynamic(() => import('./DashboardItemBalance'))
const DashboardItemHome = dynamic(() => import('./DashboardItemHome'))
const DashboardItemOrder = dynamic(() => import('./DashboardItemOrder'))
const DashboardItemAffliate = dynamic(() => import('./DashboardItemAffliate'))

/**
 * Main content body of the dashboard
 * Components are lazy-loaded
 * @returns {JSX.Element}
 */
export default function DashboardBody() {
  const { asPath } = useRouter()
  // Extract the path without query parameters
  const basePath = asPath.split('?')[0]

  return (
    <div className='flex flex-col md:flex-row w-full container gap-x-4 min-h-96 mx-auto mb-12 justify-center'>
      <div className='side-tabs w-full md:w-72'>
        <DashboardMenuList />
      </div>
      {/* Right-side content of the console */}
      <div className='main-content-wrapper w-full'>
        {basePath === '/dashboard' && <DashboardItemHome />}
        {basePath?.indexOf('/dashboard/user-profile') === 0 && <DashboardUser />}
        {basePath === '/dashboard/balance' && <DashboardItemBalance />}
        {basePath === '/dashboard/membership' && <DashboardItemMembership />}
        {basePath === '/dashboard/order' && <DashboardItemOrder />}
        {basePath === '/dashboard/affiliate' && <DashboardItemAffliate />}
      </div>
    </div>
  )
}
