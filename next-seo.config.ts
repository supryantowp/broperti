import { DefaultSeoProps } from 'next-seo'

import siteConfig from './site-config'

const SEO: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: siteConfig.url,
    site_name: siteConfig.title,
  },
  title: siteConfig.title,
  titleTemplate: `%s • ${siteConfig.title}`,
  description: siteConfig.description,
}

export default SEO
