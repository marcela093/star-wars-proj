import React from "react";
import "../styles/home.css";
import Logo from "../assets/star-wars-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home">
        <Link to="/home" className="home__logo-link">
          <img className="home__logo" src={Logo} />
        </Link>
      </div>
      <div>
        <ul className="home__nav">
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
    </div>
  );
};

export default Home;
