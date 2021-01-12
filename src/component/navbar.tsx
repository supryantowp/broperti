import { Button, Flex, HStack, Image, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top={0}
      flexDir='row'
      py={4}
      align='center'
      justify='space-between'
      bg='#0F1837'
      px={{ base: 10, md: 20 }}
      zIndex={4}
    >
      <Image w={50} h={50} htmlWidth={50} htmlHeight={50} src='/logo.png' />
      <HStack d={{ base: 'none', md: 'block' }} spacing={6} justify='center'>
        <Link color='teal.300' href='#'>
          Home
        </Link>
        <Link color='gray.400' href='#'>
          Featured
        </Link>
        <Link color='gray.400' href='#'>
          Stories
        </Link>
        <Link color='gray.400' href='#'>
          Partner
        </Link>
        <Link color='gray.400' href='#'>
          About
        </Link>
      </HStack>
      <Button fontWeight='normal' colorScheme='teal'>
        My Account
      </Button>
    </Flex>
  )
}

export default Navbar
