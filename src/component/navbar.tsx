import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

import routes from '@/routes'

import ToggleColorMode from './toggle-color-mode'

const Navbar = () => {
  return (
    <Flex
      as='nav'
      pos='sticky'
      top={0}
      flexDir='row'
      px={{ base: 10, md: 20 }}
      py={8}
      align='center'
      justify='space-between'
    >
      <HStack spacing={6} justify='center'>
        <Text fontSize='xl' fontWeight='bold'>
          Sakura
        </Text>
        {routes.map(([text, href]) => (
          <div key={href}>
            <NextLink href={href} key={href}>
              <Link href={href}>{text}</Link>
            </NextLink>
          </div>
        ))}
      </HStack>
      <HStack spacing={6}>
        <NextLink href='/login'>
          <Link>Login</Link>
        </NextLink>
        <ToggleColorMode />
      </HStack>
    </Flex>
  )
}

export default Navbar
