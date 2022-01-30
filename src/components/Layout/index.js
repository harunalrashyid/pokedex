import styled, { ThemeProvider } from 'styled-components'

import GlobalStyles from '@styled/GlobalStyles'
import theme from '@styled/theme'
import Header from '@components/Header'

const Layout = ({ children }) => (
  <ThemeProvider theme={ theme }>
    <AppLayout>
      <GlobalStyles />
      <Header />
      <Main>{ children }</Main>
    </AppLayout>
  </ThemeProvider>
)

export default Layout;

const Main = styled.main``
const AppLayout = styled.div`
  position: relative;
  background-color: #ffffff;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
`
