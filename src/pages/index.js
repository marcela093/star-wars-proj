import React from "react";
import "../styles/home.css";
import Teste from "./api";
import Logo from "../assets/star-wars-logo.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <img className="home__logo" src={Logo} />
      </div>

      <Teste />
    </div>
  );
};

export default Home;
