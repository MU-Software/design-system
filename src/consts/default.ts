import React from 'react'

type ThemeType = {
  backgrounds: Record<string, React.CSSProperties['background']>
  fontFamilies: Record<string, React.CSSProperties['fontFamily']>
  borderRadiuses: string[]
}

export const defaultTheme: ThemeType = {
  backgrounds: {
    dark: '#333',
    light: '#F7F9F2',
    dusk: 'linear-gradient(#036564, #033649)',
  },
  fontFamilies: {
    sansSerif: `'Inter', Helvetica, Arial`,
    serif: `Georgia, 'Times New Roman', Times, serif`,
    monospace: `'Courier New', monospace`,
  },
  borderRadiuses: ['4px', '8px', '12px', '16px', '20px', '24px', '28px', '10000px'],
}
