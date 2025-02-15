/**
 * Ad display plugin
 */
module.exports = {
  // Google Ads
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // Google AdSense ID e.g. ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Google AdSense test mode; displays fake test ads for development https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '', // Google AdSense > Ads > Display Ads > Create in-article ad; paste the data-ad-slot value from the HTML code
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '', // Google AdSense > Ads > Display Ads > Create flow ad
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '', // Google AdSense > Ads > Display Ads > Create native ad
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '', // Google AdSense > Ads > Display Ads > Create auto ad

  // WWAds
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // Create your WWAds unit ID at https://wwads.cn/
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false // Enable WWAds ad block detection; when enabled, a text prompt appears on the ad slot @see https://github.com/bytegravity/whitelist-wwads
}
