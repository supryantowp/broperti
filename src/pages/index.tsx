import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import Container from '@/component/container'
import Content from '@/component/content'
import FeaturesImage from '@/component/features-image'
import FeaturesMetric from '@/component/features-metric'
import FeaturesReason from '@/component/features-reason'
import FormFilter from '@/component/form-filter'
import ListBest from '@/component/list-best'
import siteConfig from '~/site-config'

const Index = () => (
  <>
    <NextSeo title='Broperti Landing Page' titleTemplate='%s' />
    <Box py={{ base: 8, lg: 0 }} px={{ base: 10, md: 20 }} bg='#0F1837'>
      <Image pos='absolute' top={10} right={2} src='/Union.png' zIndex={1} />
      <Flex align='center' justify='space-between'>
        <Box maxW='350px' zIndex={3}>
          <Content
            title={siteConfig.description}
            description='Saving much time by finding the match one using our algorithm that we designed'
          />
          <FormFilter />
        </Box>
        <Image
          d={{ base: 'none', lg: 'block' }}
          maxW='700px'
          maxH='590px'
          objectFit='cover'
          src='/hero-1.png'
          zIndex={2}
        />
      </Flex>
    </Box>

    <Container>
      <Flex
        maxW='5xl'
        mx='auto'
        pb={8}
        justify='space-between'
        alignItems='center'
      >
        <FeaturesImage />
        <FeaturesReason />
      </Flex>
      <FeaturesMetric />
    </Container>

    <Container>
      <Flex py={8} justify='space-between'>
        <Text fontSize='2xl' fontWeight='normal' maxW='sm'>
          You‘re Probably Gonna Love These
        </Text>
        <Link color='gray.400'>VIEW ALL RECOMENDATION</Link>
      </Flex>
      <ListBest />
    </Container>

    <Container align='center'>
      <SimpleGrid
        color='white'
        bgColor='#0F1837'
        mx='auto'
        maxW='3xl'
        borderRadius='lg'
        spacing={4}
        p={4}
        my={8}
        columns={{ base: 1, md: 3 }}
      >
        <FormControl id='full_name'>
          <FormLabel>Full Name</FormLabel>
          <Input
            color='gray.800'
            bg='whitealpha'
            placeholder='Masayoshi Hazza'
          />
        </FormControl>
        <FormControl id='email'>
          <FormLabel>Email Address</FormLabel>
          <Input
            color='gray.800'
            bg='whitealpha'
            placeholder='@masayoshi@gmail.com'
          />
        </FormControl>
        <Button colorScheme='teal' h={{ base: '40px', md: 'full' }}>
          Sign Up
        </Button>
      </SimpleGrid>
      <Text color='gray.400'>
        Copyright 2021. Design by BuildWith Angga. Slicing By Supryanto Widadi
        Putra
      </Text>
    </Container>
  </>
)

export default Index
