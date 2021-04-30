import styled from 'styled-components'

// components
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
`

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  height: 30vh;
  padding: 0;

  @media (min-width: 1280px) {
    flex-direction: row;
    height: 0;
  }
`

export const CustomLink = styled(Link)`
  &:hover {
    border: none;
  }
`
