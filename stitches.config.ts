import { createStitches } from '@stitches/react'
import { breakpoints } from './src/constants/breakpoints'
import { colors } from './src/constants/colors'
import { fontSizes } from './src/constants/fontSizes'

const {
  styled,
  globalCss: GlobalCss,
  getCssText,
  theme,
  css,
  keyframes,
  createTheme
} = createStitches({
  theme: {
    colors,
    space: {
      xs: '0.75rem',
      sm: '1rem',
      md: '1.37500',
      lg: '1.5rem'
    },
    fonts: {
      text: 'Inter, sans-serif'
    },
    radii: {
      sm: '8px'
    },
    lineHeights: {
      caption2: '0.8125rem',
      caption1: '1rem',
      footnote: '1.12500rem',
      subHeadline: '1.25rem',
      callout: '1.3125rem',
      body: '1.37500rem',
      title1: '1.5625rem',
      title2: '1.75rem',
      largeTitle: '2.5625rem'
    },
    fontSizes
  },
  media: breakpoints
})

const globalStyle = GlobalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    fontFamily: '$text',
    color: '$gray200',
    '-webkit-font-smoothing': 'antialiased'
  },
  body: {
    backgroundColor: '$background'
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  h1: {
    fontWeight: '500',
    fontFamily: '$text',
    lineHeight: '3.5rem'
  },
  h2: {
    fontFamily: '$text',
    fontWeight: '500',
    lineHeight: '4.3rem'
  },
  li: {
    listStyle: 'none'
  },
  a: {
    fontWeight: 500,
    textDecoration: 'none',
    cursor: 'pointer'
  }
})

export {
  styled, getCssText, theme, css, keyframes, createTheme, globalStyle
}
