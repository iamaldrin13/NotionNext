/**
 * Get AI Summary
 * Fetches a summary of the provided text using an AI service
 * @param {string} aiSummaryAPI - The API endpoint for the AI summary service
 * @param {string} aiSummaryKey - The API key for authentication
 * @param {string} truncatedText - The text to be summarized
 * @returns {Promise<string>} - A promise that resolves to the summary string
 */
export async function getAiSummary(aiSummaryAPI, aiSummaryKey, truncatedText) {
  try {
    console.log('Requesting article summary', truncatedText.slice(0, 100))
    const response = await fetch(aiSummaryAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: aiSummaryKey,
        content: truncatedText
      })
    })

    if (response.ok) {
      const data = await response.json()
      return data.summary
    } else {
      throw new Error('Response not ok')
    }
  } catch (error) {
    console.error('ChucklePostAI: Request failed', error)
    return 'Failed to retrieve article summary, please try again later.'
  }
}
