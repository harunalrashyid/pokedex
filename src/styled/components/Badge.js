import styled from 'styled-components'

const Badge = styled.span`
  display: inline-block;
  font-size: 0.625rem;
  padding: .25rem .75rem;
  margin-right: .25rem;
  border-radius: 50px;
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};
  transition: all .25s ease;

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

  ${props => props.color === 'ground' && `
    & { background: ${props.theme.color.brown}; }
  `}

  ${props => props.type === 'outline' && `
    & {
      background: transparent;
      color: ${props.theme.color.black};
      border: 1px solid ${props.theme.color.light};
    }

    &:hover {
      background: ${props.theme.color.light};
    }
  `}

  ${props => props.active && `
    & {
      background: ${props.theme.color.green};
      color: ${props.theme.color.white};
    }

    &:hover {
      background: ${props.theme.color.green};
      color: ${props.theme.color.white};
    }
  `}
`

export default Badge
