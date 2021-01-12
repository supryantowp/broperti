import { Heading, Text } from '@chakra-ui/react'

interface ContentProps {
  title: string
  description: string
}

const Content = ({ title, description }: ContentProps) => {
  return (
    <>
      <Heading color='white'>{title}</Heading>
      <Text color='gray.400' my={6}>
        {description}
      </Text>
    </>
  )
}

export default Content
