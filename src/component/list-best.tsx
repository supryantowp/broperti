import { SimpleGrid } from '@chakra-ui/react'

import CardPlace from './card-place'

export type Place = {
  category: string
  image: string
  name: string
  address: string
  price: string
}

const lists: Place[] = [
  {
    category: 'Mansion',
    image: '/image-10.png',
    name: 'De Park',
    address: 'Sullo, Kamasia',
    price: '$592,000',
  },
  {
    category: 'Apartement',
    image: '/image-11.png',
    name: 'Yellow Glow',
    address: 'Palo, Inkopaid',
    price: '$88,000',
  },
  {
    category: 'House',
    image: '/image-12.png',
    name: 'Brown Gask',
    address: 'Lohu, Lammva',
    price: '$190,300',
  },
  {
    category: 'Mansion',
    image: '/image-8.png',
    name: 'White Cow',
    address: 'Ikha, Hajjar',
    price: '$188,000',
  },
]

const ListBest = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} spacing={16}>
      {lists.map((item, i) => (
        <CardPlace place={item} key={i} />
      ))}
    </SimpleGrid>
  )
}

export default ListBest
