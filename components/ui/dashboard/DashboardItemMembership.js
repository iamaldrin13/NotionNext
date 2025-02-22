import { useEffect, useState } from 'react'

/**
 * Membership Component
 * Displays membership options and handles selection and payment amount
 * @returns {JSX.Element}
 */
export default function DashboardItemMembership() {
  // State to track selected membership and payment amount
  const [selectedMembership, setSelectedMembership] = useState(null)
  const [amount, setAmount] = useState(0)

  // Membership options with details
  const memberships = [
    {
      title: 'Annual Membership',
      points: 98,
      duration: '365 days',
      benefits: [
        '5 to 20 popular projects updated daily',
        'Free access to all site resources',
        'Exclusive internal member chat group',
        'Upgrade with price difference',
        'Promotion commission up to 40%'
      ]
    },
    {
      title: 'Lifetime Membership',
      points: 138,
      duration: 'Lifetime',
      benefits: [
        '5 to 20 popular projects updated daily',
        'Free access to all site resources',
        'Exclusive internal member chat group',
        'Upgrade with price difference',
        'Promotion commission up to 70%'
      ]
    },
    {
      title: 'Site Owner Training Camp',
      points: 1998,
      duration: 'Lifetime',
      benefits: [
        'Site owner trainees please contact assistant for coordination',
        'One-on-one support for website setup',
        'Exclusive traffic generation techniques for guaranteed success',
        'Direct replication of all site materials to new trainee sites',
        'Software updates synchronized with one click',
        'Exclusive community and chat group for trainees',
        'High-reward check-in mechanism to enhance trainee execution'
      ]
    }
  ]

  // Handle membership selection
  const handleMembershipSelect = index => {
    setSelectedMembership(index)
    setAmount(memberships[index].points)
  }

  // Handle changes in payment amount
  const handleAmountChange = e => {
    const value = e.target.value
    setAmount(value)
  }

  // Update payment amount when membership is selected
  useEffect(() => {
    if (selectedMembership !== null) {
      const selectedPoints = memberships[selectedMembership]?.points
      if (selectedPoints) {
        setAmount(selectedPoints)
      }
    }
  }, [selectedMembership])

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 border'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Membership Registration</h2>
        <hr className='my-2' />
      </div>

      {/* Membership cards */}
      <div className='grid grid-cols-3 gap-4'>
        {memberships.map((membership, index) => (
          <div
            key={index}
            className={`block max-w-sm p-6 text-center border cursor-pointer rounded-lg shadow ${
              selectedMembership === index ? 'bg-blue-100' : 'bg-gray-50'
            }`}
            onClick={() => handleMembershipSelect(index)}>
            <h5 className='mb-2 text-2xl font-bold tracking-tight'>
              {membership.title}
            </h5>
            <p className='font-normal'>Required Points: {membership.points} points</p>
            <p className='font-normal'>Membership Duration: {membership.duration}</p>
            <ul className='text-gray-600 mt-2'>
              {membership.benefits.map((benefit, i) => (
                <li key={i}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <form className='mt-6'>
        <div className='flex justify-between w-full mb-4'>
          <div>
            Payment Amount: <span className='text-red-500'>￥{amount}</span>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Activate Now
          </button>
        </div>

        <ul className='text-gray-600 list-disc pl-6'>
          <li>Membership Activation Instructions:</li>
          <li className='font-bold'>This is just a demo page with no real functionality!</li>
          <li>Membership account permissions on this site are virtual digital resources and are non-refundable after activation</li>
          <li>After activating membership, you can enjoy discounts and free access to corresponding membership privileges</li>
          <li>Membership privileges expire after the term ends</li>
          <li>Repeated purchases will extend the expiration time of privileges</li>
        </ul>
      </form>
    </div>
  )
}
