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
  flex-wrap: ${props => props.wrap || '' };
  align-items: ${props => props.align || '' };
  justify-content: ${props => props.justify || '' };

  ${props => props.col && `
    & { flex: 0 0 auto; }
  `};

  ${props => props.col === 12 && `
    & { width: 100% }
  `};

  ${props => props.col === 6 && `
    & { width: 50% }
  `};
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
