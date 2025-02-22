/**
 * Home Component
 * Displays the main dashboard home page with various sections
 * @returns {JSX.Element}
 */
export default function DashboardItemHome() {
  return (
    <div className='w-full mx-auto'>
      {/* Alert message */}
      <div
        className='p-4 mb-4 text-xl font-bold text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
        role='alert'>
        <span className='font-medium'>Attention!</span>{' '}
        The entire backend is just a page effect for demonstration purposes, with no actual functionality.
      </div>

      {/* Page description */}
      <div className='mb-8 text-lg text-gray-700 dark:text-gray-300'>
        <p>
          Welcome to the user center page! Here, you can view user account information and business order overview.
        </p>
      </div>

      {/* Progress bar */}
      <div className='mb-8'>
        <h3 className='text-xl text-gray-800 dark:text-white'>Current Task Progress</h3>
        <div className='bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 my-2'>
          <div
            className='bg-green-500 h-2.5 rounded-full'
            style={{ width: '75%' }}></div>
        </div>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Task Progress: 75%
        </p>
      </div>

      {/* Background animation block */}
      <div className='relative w-full h-64 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden'>
        <div className='absolute inset-0 w-full h-full animate-pulse bg-black opacity-50'></div>
        <div className='relative z-10 text-center text-white font-bold pt-24'>
          <h3 className='text-2xl'>Real-time Data Analysis</h3>
          <p className='text-lg'>Monitor your system data and view real-time changes</p>
        </div>
      </div>

      {/* Data card module */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        <div className='bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-all transform duration-300'>
          <h3 className='text-xl text-gray-800 dark:text-white'>Today's Visits</h3>
          <p className='text-3xl text-green-600'>1,245</p>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-all transform duration-300'>
          <h3 className='text-xl text-gray-800 dark:text-white'>Total Users</h3>
          <p className='text-3xl text-blue-600'>12,300</p>
        </div>
        <div className='bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-all transform duration-300'>
          <h3 className='text-xl text-gray-800 dark:text-white'>
            System Health Status
          </h3>
          <p className='text-3xl text-red-600'>Normal</p>
        </div>
      </div>
    </div>
  )
}
