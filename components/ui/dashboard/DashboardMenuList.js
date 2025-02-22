import Link from 'next/link'
import { useRouter } from 'next/router'

/**
 * Dashboard Menu Component
 * Displays a list of navigation links for the dashboard
 * @returns {JSX.Element}
 */
export default function DashboardMenuList() {
  const { asPath } = useRouter() // Get the current path

  // Define the dashboard menu items with titles, icons, and links
  const dashBoardMenus = [
    { title: 'Dashboard', icon: 'fas fa-gauge', href: '/dashboard' },
    { title: 'Basic Information', icon: 'fas fa-user', href: '/dashboard/user-profile' },
    { title: 'My Balance', icon: 'fas fa-coins', href: '/dashboard/balance' },
    { title: 'My Membership', icon: 'fas fa-gem', href: '/dashboard/membership' },
    { title: 'My Orders', icon: 'fas fa-cart-shopping', href: '/dashboard/order' },
    { title: 'Affiliate Center', icon: 'fas fa-hand-holding-usd', href: '/dashboard/affiliate' }
  ]

  return (
    <ul
      role='menu'
      className='side-tabs-list bg-white border rounded-lg shadow-lg p-2 space-y-2 mb-6'>
      {dashBoardMenus.map((item, index) => {
        // Determine if the current menu item is active
        const isActive = asPath === item.href
        return (
          <li
            role='menuitem'
            key={index}
            className={`rounded-lg cursor-pointer block ${
              isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
            }`}>
            <Link
              href={item.href}
              className='block py-2 px-4 w-full items-center justify-center'>
              <i className={`${item.icon} w-6 mr-2`}></i>
              <span className='whitespace-nowrap'>{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
