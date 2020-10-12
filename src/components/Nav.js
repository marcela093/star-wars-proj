import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/star-wars-logo.png";
import NavMobile from "../components/NavMobile";
import "../styles/nav.css";

const Nav = () => {
  return (
    <div className="nav__container">
      <Link to="/home" className="nav__logo-link">
        <img className="nav__logo" src={Logo} alt="star wars logo" />
      </Link>
      <NavMobile />
      <ul className="nav__content">
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
      </ul>
    </div>
  );
};

export default Nav;
