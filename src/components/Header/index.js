import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container, Grid } from '@styled/common'
import logo from '@assets/logo.svg';
import Search from '@components/Search'

const Header = () => (
  <AppHeader>
    <Container>
      <Grid align="center" justify="space-between">
        <AppLogo>
          <Link to="/">
            <AppLogoImage src={logo} className="App-logo" alt="logo" />
          </Link>
        </AppLogo>
        <AppTitle>
          <AppTitleLabel>Pokédex</AppTitleLabel>
        </AppTitle>
        <AppModule>
          <Search />
        </AppModule>
      </Grid>
    </Container>
  </AppHeader>
)

export default Header

const AppHeader = styled.header`
  background-color: ${props => props.theme.color.white};
  border-bottom: 1px solid ${props => props.theme.color.light};
  height: 70px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`
const AppModule = styled(Grid)``

const AppLogo = styled.div``
const AppLogoImage = styled.img`
  width: 32px;
  pointer-events: none;
`

const AppTitle = styled.div``
const AppTitleLabel = styled.h1``
