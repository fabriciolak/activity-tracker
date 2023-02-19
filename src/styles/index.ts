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
      regular: 600,
    },

    fonts: {
      inter: 'Inter, sans-serif',
    },

    radii: {
      rounded: '4px',
      'rounded-md': '6px',
      'rounded-lg': '8px',
      'rounded-full': '9999px',
    },
  },

  utils: {
    // margin

    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // padding

    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // border-radius

    br: (value: string) => ({
      borderRadius: value
    }),

    // Sizes

    size: (value: string) => ({
      width: value,
      height: value,
    })
  }
})