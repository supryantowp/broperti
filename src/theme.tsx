import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    black: '#16161D',
    teal: {
      50: '#e5fbe6',
      100: '#c1eec4',
      200: '#9ce1a0',
      300: '#76d57b',
      400: '#51c956',
      500: '#38b03c',
      600: '#2a892e',
      700: '#1c6220',
      800: '#0e3b11',
      900: '#001600',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
})

export default theme
