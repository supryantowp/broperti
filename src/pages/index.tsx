import { Heading, Text } from '@chakra-ui/react'

import Container from '@/component/container'
import siteConfig from '~/site-config'

const Index = () => (
  <Container>
    <Heading
      bgGradient='linear(to-l, #7928CA,#FF0080)'
      bgClip='text'
      fontSize='6xl'
      fontWeight='extrabold'
    >
      {siteConfig.title}
    </Heading>
    <Text>{siteConfig.description}</Text>
    <Text>under development</Text>
  </Container>
)

export default Index
