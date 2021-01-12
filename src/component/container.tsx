import { Box } from '@chakra-ui/react'

const Container = ({ children, ...rest }) => {
  return (
    <Box {...rest} py={6} px={{ base: 10, md: 20 }}>
      {children}
    </Box>
  )
}

export default Container
