import subscribeToMailchimpApi from '@/lib/plugins/mailchimp'

/**
 * Handler for processing email subscription requests.
 * Accepts POST requests containing subscriber details and subscribes the user via Mailchimp.
 *
 * @param {object} req - HTTP request object.
 * @param {object} res - HTTP response object.
 * @returns {Promise<void>}
 */
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName, lastName } = req.body
    try {
      const response = await subscribeToMailchimpApi({ email, first_name: firstName, last_name: lastName })
      const data = await response.json()
      console.log('data', data)
      res.status(200).json({ status: 'success', message: 'Subscription successful!' })
    } catch (error) {
      res.status(400).json({ status: 'error', message: 'Subscription failed!', error })
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' })
  }
}
