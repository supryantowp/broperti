import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode='system' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
