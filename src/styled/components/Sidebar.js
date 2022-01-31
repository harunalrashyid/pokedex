import styled from 'styled-components'

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-width: 480px;
  margin: 0 auto;
  background: ${props => props.theme.color.white};
  padding: 1.5rem 1rem;
  transition: all .25s ease-in-out;
  transform: translateX(100%);
  opacity: 0;

  ${props => props.active && `
    & {
      transform: translateX(0);
      opacity: 1;
    }
  `}
`

export default Sidebar
