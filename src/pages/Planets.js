import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "../styles/planets.css";
import Planet from "../assets/planet.svg";
import People from "../assets/people.svg";
import Climate from "../assets/climate.svg";
import Next from "../assets/next.svg";
import Previous from "../assets/previous.svg";
import { paginationButtons } from "../shared/paginationButtons";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${pages}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setPlanets(data.results);

          paginationButtons(data);
        },
        (error) => {
          return console.log(error);
        }
      );
  }, [pages]);

  const handleNextPage = () => {
    const nextPage = pages + 1;
    setPages(nextPage);
  };

  const handlePreviousPage = () => {
    const previousPage = pages - 1;
    setPages(previousPage);
  };

  // const format = planets.map((planet) => {
  //   return planet.population.toLocaleString();
  // });

  return (
    <>
      <Nav />
      <div className="planets__container">
        <table className="table">
          <tr className="table__tr">
            <th>
              <div className="table__title">
                <img src={Planet} className="icon" />
                <p>Planets</p>
              </div>
            </th>

            <th>
              <div className="table__title">
                <img src={Climate} className="icon" />
                <p>Climate</p>
              </div>
            </th>

            <th>
              <div className="table__title">
                <img src={People} className="icon" />
                <p>Population</p>
              </div>
            </th>
          </tr>

          {planets.map((planet) => (
            <tr className="table__td">
              <td>{planet.name}</td>

              <td>{planet.climate}</td>

              <td>{planet.population}</td>
            </tr>
          ))}
        </table>
        <div className="buttons__container">
          <button id="previous-button" onClick={handlePreviousPage}>
            <img src={Previous} className="button-img" />
          </button>
          <button id="next-button" onClick={handleNextPage}>
            <img src={Next} className="button-img" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Planets;
