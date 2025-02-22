import { UserProfile } from '@clerk/nextjs'

/**
 * Dashboard User Account Panel
 * Displays the user's profile information
 * @returns {JSX.Element | null}
 */
export default function DashboardUser() {
  const enableClerk = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!enableClerk) {
    return null
  }
  return (
    <UserProfile
      appearance={{
        elements: {
          cardBox: 'w-full',
          rootBox: 'w-full'
        }
      }}
      className='bg-blue-300'
      routing='path'
      path='/dashboard/user-profile'
    />
  )
}
