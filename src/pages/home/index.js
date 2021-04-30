import React from 'react'
import { Link } from 'react-router-dom'

// styles
import '../../styles/home.css'
import { Wrapper, Navbar, Div, CustomLink } from './styles'

// icons
import Logo from '../../assets/star-wars-logo.png'

const Home = () => {
  return (
    <Wrapper>
      <Div>
        <CustomLink to="/home">
          <img className="home__logo" src={Logo} alt="star wars logo" />
        </CustomLink>
      </Div>

      <Navbar>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </Navbar>
    </Wrapper>
  )
}

export default Home
