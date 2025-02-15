/**
 * Site beautification animation configuration
 */
module.exports = {
  // Mouse click fireworks effect
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // Switch
  // Fireworks colors (thanks to https://github.com/Vixcity for the suggested colors)
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // Mouse follow effect
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || false, // Switch
  // The following two settings apply only when the mouse follow effect is enabled
  // Mouse effect type: 1: scattered path dots, 2: falling dots, 3: rising dots, 4: edge-to-mouse moving dots, 5: tracking circular dots, 6: path lines, 7: cluster dots, 8: cluster grid, 9: moving grid, 10: rising particles, 11: revolving multicolor particles, 12: blue cone-shaped particles following the cursor
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // Color for the mouse click effect (#hex or rgba)

  // Sakura falling effect
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // Switch
  // Floating line effect
  NEST: process.env.NEXT_PUBLIC_NEST || false, // Switch
  // Dynamic ribbon effect
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // Switch
  // Static ribbon effect
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // Switch
  // Starry sky rain effect (effective in dark mode)
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // Switch
  // ANIMATE.css animations
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' // Animation CDN
}
