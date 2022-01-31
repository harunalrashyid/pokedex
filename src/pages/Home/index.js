import React from 'react'

import Layout from '@components/Layout'
import Pokemons from '@components/Pokemon'
import { Container, Grid } from '@styled/common'


const Home = () => {
  return (
    <Layout>
      <Container>
        <Grid>
          <Pokemons />
        </Grid>
      </Container>
    </Layout>
  )
}

export default Home
