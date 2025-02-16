/**
 * Configuration for custom right-click menu options
 * Controls whether to show custom context menu instead of system default
 */
module.exports = {
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // Enable custom right-click menu, overrides system menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    true, // Show theme switcher in context menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // Show dark mode toggle in context menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || true, // Show share link option in context menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // Show random post option in context menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // Show categories in context menu
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || false // Show tags in context menu
}
