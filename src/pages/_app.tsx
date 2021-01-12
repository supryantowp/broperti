import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import Navbar from '@/component/navbar'
import theme from '@/theme'
import SEO from '~/next-seo.config'
import siteConfig from '~/site-config'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
