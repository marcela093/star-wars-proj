import React, { useEffect, useState } from "react";

const Teste = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/1/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setItems(result);
        },
        (error) => {
          return console.log("deu ruim", error);
        }
      );
  }, []);

  return <div>{items.director}</div>;
};

export default Teste;
