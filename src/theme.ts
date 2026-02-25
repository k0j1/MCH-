/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const theme = {
  colors: {
    background: '#0f0f0f',
    surface: '#1a1a1a',
    primary: '#f3c623', // MCH Gold
    secondary: '#a67c00',
    accent: '#ff4d4d',
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      muted: '#666666',
    },
    border: '#333333',
    rarity: {
      common: '#b3b3b3',
      uncommon: '#4ade80',
      rare: '#60a5fa',
      epic: '#c084fc',
      legendary: '#fbbf24',
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  fonts: {
    sans: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  shadows: {
    sm: '0 2px 4px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.2)',
    lg: '0 8px 16px rgba(0,0,0,0.3)',
    gold: '0 0 15px rgba(243, 198, 35, 0.3)',
  }
};
