import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import Navbar from '@/component/navbar'
import theme from '@/theme'
import siteConfig from '~/site-config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
