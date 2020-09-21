import React, { useEffect, useState } from "react";
import "../styles/films.css";

const Films = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setItems(result.results);
        },
        (error) => {
          return console.log("deu ruim", error);
        }
      );
  }, []);

  return (
    <div className="films">
      <ul>
        {items.map((item) => {
          {
            return (
              <li>
                {item.title}: {item.opening_crawl}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Films;
