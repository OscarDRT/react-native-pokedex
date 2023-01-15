import { scale } from '@root/utils/commons'
import { createTheme } from '@shopify/restyle'

const palette = {
  primary: '#F7B916',
  secondary: '#FFFFFF',
  primaryBackground: '#2A3051',
  primaryForeground: '#343E63',
  primaryText: '#000000',
  secondaryText: '#FFFFFF',
  transparent: 'transparent',
  grass: '#00CA91',
  bug: '#AEDF78',
  water: '#43CCFF',
  fire: '#E95C4D',
  normal: '#A5A5A5',
}

const theme = createTheme({
  colors: {
    primary: palette.primary,
    secondary: palette.secondary,
    primaryBackground: palette.primaryBackground,
    primaryForeground: palette.primaryForeground,
    primaryText: palette.primaryText,
    secondaryText: palette.secondaryText,
    transparent: palette.transparent,
    grass: palette.grass,
    bug: palette.bug,
    water: palette.water,
    fire: palette.fire,
    normal: palette.normal,
  },
  spacing: {
    none: 0,
    xs: scale(4),
    s: scale(8),
    m: scale(16),
    l: scale(24),
    xl: scale(40),
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title: {
      fontSize: scale(24),
      fontWeight: '700',
      color: 'primaryText',
    },
    subtitle: {
      fontSize: scale(16),
      fontWeight: '400',
      color: 'secondaryText',
    },
    body: {
      fontSize: scale(12),
      fontWeight: '400',
      color: 'primaryText',
    },
    defaults: {},
  },

  pokemonVariants: {
    bug: { backgroundColor: 'bug' },
  },
})

export type Theme = typeof theme
export default theme
