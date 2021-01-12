import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'

const reasons = [
  `We are not asking for any fee from both party (landlord or even buyer)`,
  `We take care every single thing that buyer need to complete beforehand`,
  `We help buyer to find the place without hassle and helping them with paperwork`,
  `We help landlord to register their license to goverment in order want to sell`,
]

interface ListReasonProps {
  i: number
  reason: string
}

const ListReason = ({ i, reason }: ListReasonProps) => {
  return (
    <Flex align='center'>
      <Box
        textAlign='center'
        color='#5943A6'
        bgColor='#E7E5F9'
        borderRadius='md'
        p={3}
        w={50}
        h={50}
        mr={4}
      >
        {i}
      </Box>
      <Text>{reason}</Text>
    </Flex>
  )
}

const FeaturesReason = () => {
  return (
    <>
      <Stack py={8} spacing={8} maxW='xl'>
        <Heading fontWeight='normal'>Why Us Suit For You</Heading>
        {reasons.map((reason, i) => (
          <ListReason key={i} reason={reason} i={i + 1} />
        ))}
      </Stack>
    </>
  )
}

export default FeaturesReason
