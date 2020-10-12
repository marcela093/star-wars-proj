import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { paginationButtons } from "../shared/paginationButtons";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pages}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setCharacters(data.results);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [pages]);

  const handleNext = () => {
    const nextPage = pages + 1;
    setPages(nextPage);
  };

  const handlePrevious = () => {
    const previousPage = pages - 1;
    setPages(previousPage);
  };

  const id = characters.find((character) => character.name);
  console.log(id);
  return (
    <div>
      <Nav />
      {characters.map((character) => (
        <div>
          <p>{character.name}</p>

          <Link to={`/character-detail/${id}`}>
            <button>Ver Mais</button>
          </Link>
        </div>
      ))}
      <div className="buttons__container">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
