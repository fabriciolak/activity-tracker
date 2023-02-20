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

    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // padding

    p: (value: string | number) => ({
      padding: value,
    }),
    pt: (value: string | number) => ({
      paddingTop: value,
    }),
    pb: (value: string | number) => ({
      paddingBottom: value,
    }),
    pr: (value: string | number) => ({
      paddingRight: value,
    }),
    pl: (value: string | number) => ({
      paddingLeft: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    // border-radius

    br: (value: string | number) => ({
      borderRadius: value
    }),

    // Sizes

    size: (value: string | number) => ({
      width: value,
      height: value,
    })
  }
})