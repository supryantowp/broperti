import { Box, Flex, Image, Text } from '@chakra-ui/react'

const FeaturesImage = () => {
  return (
    <Box d={{ base: 'none', lg: 'block' }}>
      <Flex
        bgColor='white'
        position='relative'
        align='center'
        borderRadius='md'
        justify='space-between'
        shadow='md'
        p={3}
        bottom={-150}
        left={20}
      >
        <Box>
          <Text fontWeight='bold'>Palm House</Text>
          <Text color='gray.400'>Medan, Kesanaan</Text>
        </Box>
        <Text ml={3} fontWeight='bold' color='teal.400'>
          $250,509
        </Text>
      </Flex>
      <Flex
        bgColor='yellow.400'
        position='relative'
        align='center'
        borderRadius='md'
        justify='space-between'
        shadow='md'
        p={3}
        bottom={-400}
        right={10}
        w='150px'
      >
        <Text>0% BOTH FEE</Text>
      </Flex>
      <Image maxH='450px' src='/image-features.png' borderRadius='xl' />
    </Box>
  )
}

export default FeaturesImage
