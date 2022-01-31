import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: ${props => props.theme.screen.phone}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.tablet}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.laptop}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.desktop}) {
    max-width: 1200px;
  }

  ${props => props.fluid && `max-width: 100% !important;`}
`

export const Grid = styled.div`
  display: flex;
  align-items: ${props => props.align || '' };
  justify-content: ${props => props.justify || '' };
`

export const Button = styled.button`
  background: ${props => props.background || '#000'};
  color: ${props => props.color || '#fff'};
  opacity: ${props => props.disabled && '.5'};
  cursor: ${props => props.disabled && 'not-allowed'};
  padding: 8px 10px;
  border-radius: 4px;
`

export const ButtonLink = styled(Button)`
  color: ${props => props.color || props.theme.color.blue};
  background: transparent;
  padding: 0 6px;
`

export const Icon = styled.span`
  display: inline-flex;
  color: ${props => props.color || '' };
  font-size: ${props => props.size || '' };
`

export const Badge = styled.span`
  display: inline-block;
  font-size: 0.625rem;
  padding: .25rem .75rem;
  margin-right: .25rem;
  border-radius: 50px;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};

  &:last-child {
    margin-right: 0;
  }

  ${props => props.color === 'grass' && `
    & { background: ${props.theme.color.green}; }
  `}

  ${props => props.color === 'poison' && `
    & { background: ${props.theme.color.purple}; }
  `}

  ${props => props.color === 'electric' && `
    & {
      background: ${props.theme.color.yellow};
      color: ${props => props.theme.color.black};
    }
  `}

  ${props => props.color === 'water' && `
    & { background: ${props.theme.color.blue}; }
  `}

  ${props => props.color === 'flying' && `
    & { background: ${props.theme.color.skyBlue}; }
  `}

  ${props => props.color === 'bug' && `
    & { background: ${props.theme.color.green}; }
  `}

  ${props => props.color === 'fire' && `
    & { background: ${props.theme.color.red}; }
  `}

  ${props => props.color === 'rock' && `
    & { background: ${props.theme.color.brown}; }
  `}
`
