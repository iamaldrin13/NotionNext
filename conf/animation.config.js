/**
 * Website beautification effects configuration
 */
module.exports = {
  // Fireworks effect on mouse click
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // Toggle
  // Fireworks colors, thanks to https://github.com/Vixcity for the color contribution
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // Mouse follow effect
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true, // Toggle
  // These two only take effect when the mouse follow effect is enabled
  // Mouse effect type: 1: Path scatter, 2: Falling scatter, 3: Rising scatter, 4: Edge moving scatter, 5: Tracking circle scatter, 6: Path lines, 7: Gathering scatter, 8: Gathering grid, 9: Moving grid, 10: Rising particles, 11: Circle random color particles, 12: Cone emission following blue particles
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // Mouse click effect color #xxxxxx or rgba(r,g,b,a)

  // Sakura falling effect
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // Toggle
  // Floating line segment effect
  NEST: process.env.NEXT_PUBLIC_NEST || false, // Toggle
  // Dynamic ribbon effect
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // Toggle
  // Static ribbon effect
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // Toggle
  // Starry sky rain effect, only effective in night mode
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // Toggle
  // ANIMATE.css animation
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' // Animation CDN
}
