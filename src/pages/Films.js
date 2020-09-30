import React, { useEffect, useState } from "react";
import "../styles/films.css";
import IV from "../assets/IV.jpg";
import V from "../assets/V.jpg";
import VI from "../assets/VI.jpg";
import I from "../assets/I.jpg";
import II from "../assets/II.jpg";
import III from "../assets/III.jpg";
import Nav from "../components/Nav";

const moviesImages = [
  { id: 4, img: IV },
  { id: 5, img: V },
  { id: 6, img: VI },
  { id: 1, img: I },
  { id: 2, img: II },
  { id: 3, img: III },
];

const Films = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (data) => {
          setMovies(data.results);
        },
        (error) => {
          return console.log("deu ruim", error);
        }
      );
  }, []);

  const getImages = () => {
    movies.forEach((movie) => {
      moviesImages.forEach((image) => {
        if (movie.episode_id === image.id) {
          movie.image = image.img;
          movie.image_id = image.id;
        }
      });
    });
  };

  getImages();

  return (
    <div>
      <Nav />
      <div className="films__container">
        <div className="films">
          {movies.map((movie) => {
            return (
              <div className="films__card">
                <div className="films__image-box">
                  <img src={movie.image} className="films__image" />
                </div>

                <div className="films__info">
                  <h4 className="films__title">{movie.title}</h4>
                  <p>{`Release Date: ${movie.release_date}`}</p>
                  <p>{movie.opening_crawl}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Films;
