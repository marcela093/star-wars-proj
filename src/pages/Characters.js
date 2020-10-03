import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";

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

  return (
    <div>
      <Nav />

      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
      <div className="buttons__container">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
