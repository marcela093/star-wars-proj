import React, { useEffect, useState } from "react";
import "../styles/films.css";
import newHope from "../assets/new-hope.jpg";
import empireV from "../assets/empire-v.jpg";
import Nav from "../components/Nav";
import Card from "../components/Card";

const Films = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/films/")
      .then((res) => res.json())
      .then(
        (data) => {
          setItems(data.results);
        },
        (error) => {
          return console.log("deu ruim", error);
        }
      );
  }, []);

  const images = [
    {
      id: 1,
      img: newHope,
    },
    {
      id: 2,
      img: empireV,
    },
  ];

  return (
    <div>
      <Nav />
      <div className="films__container">
        <div className="films__content-box">
          {items.map((item) => {
            {
              return <Card key={item} src={item} title={item.title} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Films;
