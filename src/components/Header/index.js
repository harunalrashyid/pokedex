import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Container, Grid, Icon } from '@styled/common'
import logo from '@assets/logo.svg';

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
          <a href="https://github.com/harunalrashyid/pokedex" target="_blank" rel="noreferrer">
            <Icon size="2rem">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fillRule="evenodd" d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.488 11.488 0 0 1 16 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12Z" clipRule="evenodd"/></svg>
            </Icon>
          </a>
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
`
const AppModule = styled(Grid)``

const AppLogo = styled.div``
const AppLogoImage = styled.img`
  width: 32px;
  pointer-events: none;
`

const AppTitle = styled.div`
  flex: 0 0 auto;
  width: 80%;
  text-align: center;
`
const AppTitleLabel = styled.h1``
