import { Box, Heading, Stack, StackDivider, Text } from '@chakra-ui/react'

const FeaturesMetric = () => {
  return (
    <Stack
      justify='center'
      direction={{ base: 'column', md: 'row' }}
      textAlign='center'
      maxW='5xl'
      mx='auto'
      divider={<StackDivider color='gray.800' />}
      py={8}
      spacing={{ base: 10, md: 20 }}
    >
      <Box>
        <Heading>15,600</Heading>
        <Text color='gray.400'>House & Apartement</Text>
      </Box>
      <Box>
        <Heading>580K</Heading>
        <Text color='gray.400'>Success Buyer</Text>
      </Box>
      <Box>
        <Heading>99K</Heading>
        <Text color='gray.400'>Best Location</Text>
      </Box>
    </Stack>
  )
}
export default FeaturesMetric
