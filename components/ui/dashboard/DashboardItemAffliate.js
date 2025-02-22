import Link from 'next/link'

/**
 * Affiliate Marketing Dashboard Item
 * Displays affiliate marketing statistics and withdrawal form
 * @returns {JSX.Element}
 */
export default function DashboardItemAffliate() {
  // Define card data for affiliate statistics
  const cards = [
    {
      title: '￥0.00',
      desc: 'Total Commission',
      className: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    {
      title: '￥0.00',
      desc: 'Withdrawn',
      className: 'bg-cyan-600 hover:bg-cyan-700 text-white'
    },
    {
      title: '￥0.00',
      desc: 'Pending Withdrawal',
      className: 'bg-pink-600 hover:bg-pink-700 text-white'
    },
    {
      title: '￥0.00',
      desc: 'Available for Withdrawal',
      className: 'bg-emerald-600 hover:bg-emerald-700 text-white'
    }
  ]

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 border'>
      <div className='grid grid-cols-4 gap-4'>
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`block max-w-sm p-6 text-center border cursor-pointer rounded-lg shadow ${card.className}`}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight'>
              {card.title}
            </h5>
            <p className='font-normal'>{card.desc}</p>
          </div>
        ))}
      </div>
      <form className='mt-6'>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Total Promotions
            </label>
            <input
              disabled
              type='text'
              id='last_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='123'
              required
            />
          </div>
          <div>
            <label
              htmlFor='company'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Promotion Link
            </label>
            <input
              disabled
              type='text'
              id='company'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='https://tangly1024.com'
              required
            />
          </div>

          <div>
            <label
              htmlFor='website'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Promotion Commission Rate
            </label>
            <input
              disabled
              type='url'
              id='website'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='5%'
              required
            />
          </div>
        </div>

        <hr className='my-6' />

        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          <div>
            <label
              htmlFor='first_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Withdrawal Account
            </label>
            <input
              type='text'
              id='first_name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='John'
              required
            />
          </div>

          <div>
            <label
              htmlFor='visitors'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Withdrawal Amount
            </label>
            <input
              type='number'
              id='visitors'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder=''
              required
            />
          </div>
        </div>

        <div className='flex items-start mb-6'>
          <div className='flex items-center h-5'>
            <input
              id='remember'
              type='checkbox'
              value=''
              className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
              required
            />
          </div>
          <label
            htmlFor='remember'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            I have read and agree to the{' '}
            <Link
              href='/terms-of-use'
              className='text-blue-600 hover:underline dark:text-blue-500'>
              Terms of Service
            </Link>
            .
          </label>
        </div>
        <div className='flex gap-x-2'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Withdraw RMB
          </button>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Withdraw to Balance
          </button>
        </div>

        <ul className='text-gray-600 list-disc pl-6'>
          <li>Promotion Instructions:</li>
          <li className='font-bold'>This is a demo page with no real functionality!</li>
          <li>
            To withdraw, please contact the site administrator and send your account information and payment code for manual withdrawal.
          </li>
          <li>
            If a user purchases resources or subscribes through your promotion link, the commission will be credited to your account according to the commission rate.
          </li>
          <li>
            If a user registers through your link and you are the referrer, you will receive a commission for their purchases.
          </li>
          <li>
            If the user is your subordinate and uses another referrer's link to purchase, the subordinate relationship takes precedence, and the commission goes to the registration referrer.
          </li>
          <li>Promotion rewards are rounded to one decimal place. Rewards like 0.1 are not calculated.</li>
          <li>
            Promotion order details cannot be viewed on the frontend. Contact the administrator for detailed records and times.
          </li>
        </ul>
      </form>
    </div>
  )
}
