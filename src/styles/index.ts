import { createStitches } from '@stitches/react'

export const {
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  config,
  styled
} = createStitches({
  theme: {
    colors: {
      // Commons
      black: '#000',
      white: '#FFF',

      // Text
      title: '#FFF',
      subtitle: '#9C9EAC',
      
      // Product
      
      green: '#51CC56',
      red: '#F53950',
      yellow: '#FABF16',
      background: '#333333',
      border: '#9C9EAC'

    },

    fontSizes: {
      12: '0.75rem',
      16: '1rem',
    },

    fontWeights: {
      bold: 700,
      regular: 400,
    },

    fonts: {
      inter: 'Inter, sans-serif',
    },
  }
})