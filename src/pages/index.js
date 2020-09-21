import React from "react";
import "../styles/home.css";
import Films from "./Films";
import Logo from "../assets/star-wars-logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home">
        <img className="home__logo" src={Logo} />
      </div>
      <div className="home__container">
        <ul className="home__nav">
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="#">Personagens</Link>
          </li>
          <li>
            <Link to="#">Planetas</Link>
          </li>
          <li>
            <Link to="#">Naves</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
