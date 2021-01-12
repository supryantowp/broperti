import {
  Button,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
} from '@chakra-ui/react'

const FormFilter = () => {
  return (
    <SimpleGrid
      alignItems='center'
      bgColor='white'
      shadow='md'
      borderRadius='md'
      minW={{ base: 'full', md: '713px' }}
      columns={{ base: 1, md: 3 }}
      spacing={4}
      p={4}
    >
      <FormControl id='location'>
        <FormLabel>Location</FormLabel>
        <Select icon={<></>}>
          <option>Jakarta</option>
          <option>Jawa Barat</option>
          <option>Jawa Tengah</option>
        </Select>
      </FormControl>
      <FormControl id='type'>
        <FormLabel>Type</FormLabel>
        <Select icon={<></>}>
          <option>Apartement</option>
          <option>House</option>
        </Select>
      </FormControl>
      <Button h={{ base: '40px', md: 'full' }} colorScheme='teal'>
        Explore Now
      </Button>
    </SimpleGrid>
  )
}

export default FormFilter
