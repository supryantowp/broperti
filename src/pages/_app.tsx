import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import Navbar from '@/component/navbar'
import theme from '@/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
