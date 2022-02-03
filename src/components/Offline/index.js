import React from 'react'
import styled from 'styled-components'

import { Container, Grid, Button } from '@styled/common'

const defaultTitle = 'It seems you were offline, reconnect to internet to view this page'

const Offline = ({ title }) => {
  const handleReload = () => window.location.reload()

  return (
    <Container>
      <OfflineGrid wrap="wrap" justify="center">
        <OfflineTitle>{title || defaultTitle}</OfflineTitle>
        <OfflineBtn onClick={handleReload}>RELOAD</OfflineBtn>
      </OfflineGrid>
    </Container>
  )
}

export default Offline

const OfflineGrid = styled(Grid)`
  margin-top: 30vh;
`
const OfflineTitle = styled.h1`
  margin-top: 0;
  text-align: center;
`
const OfflineBtn = styled(Button)`
  font-size: .875rem;
`