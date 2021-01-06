import { Box } from '@chakra-ui/react'

const Container = ({ children }) => {
  return (
    <Box py={4} px={{ base: 10, md: 20 }}>
      {children}
    </Box>
  )
}

export default Container
