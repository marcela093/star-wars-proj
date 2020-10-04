import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <p>Made with</p>
        <FavoriteBorderIcon style={{ margin: 5 }} />
        <p>by Marcela Souza</p>
      </div>
      <div className="footer__social">
        <a
          href="https://www.linkedin.com/in/marcela093/"
          target="blank"
          className="social"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/marcela093"
          target="blank"
          className="social"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
