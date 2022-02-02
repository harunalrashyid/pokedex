import React from 'react'

import Layout from '@components/Layout'
import Pokemons from '@components/Pokemon'
import { Container } from '@styled/common'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Pokemons />
      </Container>
    </Layout>
  )
}

export default Home
