import { Box, Heading, Text } from '@chakra-ui/react'

import ToggleColorMode from '@/component/toggle-color-mode'
import siteConfig from '~/site-config'

const Index = () => (
  <Box d='grid' placeItems='center' minH='100vh'>
    <Box>
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
      <ToggleColorMode />
    </Box>
  </Box>
)

export default Index
