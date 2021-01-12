import { Box, Flex, Image, Text } from '@chakra-ui/react'

import { Place } from './list-best'

interface CardPlaceProps {
  place: Place
}

const CardPlace = ({ place }: CardPlaceProps) => {
  return (
    <Box>
      <Box
        align='center'
        position='relative'
        bgColor='white'
        color='#5943A6'
        maxW='150px'
        borderBottomRightRadius='lg'
        p={4}
        top={14}
      >
        <Text>{place.category}</Text>
      </Box>
      <Image
        src={place.image}
        h='380px'
        w={{ base: 'full', md: '293px' }}
        objectFit='cover'
        borderRadius='lg'
      />
      <Flex my={4} justify='space-between' align='center'>
        <Box>
          <Text fontWeight='bold'>{place.name}</Text>
          <Text color='gray.800'>{place.address}</Text>
        </Box>
        <Text fontWeight='bold' color='teal.400'>
          {place.price}
        </Text>
      </Flex>
    </Box>
  )
}

export default CardPlace
