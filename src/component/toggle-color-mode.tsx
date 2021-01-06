import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

const ToggleColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <IconButton
      aria-label='toggler color mode'
      icon={<Icon as={colorMode === 'dark' ? FiMoon : FiSun} />}
      onClick={toggleColorMode}
      variant='ghost'
      borderRadius='full'
    />
  )
}

export default ToggleColorMode
