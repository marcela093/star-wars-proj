import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { Link } from 'react-router-dom'
import '../styles/navMobile.css'
import MenuIcon from '@material-ui/icons/Menu'

const NavMobile = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="nav-mobile__container">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <div className="menu">
          <MenuIcon />
        </div>
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link to="/characters" className="nav-mobile__item">
            Characters
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/movies" className="nav-mobile__item">
            Movies
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/planets" className="nav-mobile__item">
            Planets
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/starships" className="nav-mobile__item">
            Starships
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default NavMobile
