import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <IconButton
      aria-label='toggler color mode'
      icon={<Icon as={colorMode === 'dark' ? FaMoon : FaSun} />}
      onClick={toggleColorMode}
      shadow='md'
    />
  )
}

export default ToggleColorMode
