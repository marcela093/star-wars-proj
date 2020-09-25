import React, { useEffect, useState } from "react";
import "../styles/films.css";
import IV from "../assets/IV.jpg";
import V from "../assets/V.jpg";
import VI from "../assets/VI.jpg";
import I from "../assets/I.jpg";
import II from "../assets/II.jpg";
import III from "../assets/III.jpg";
import Nav from "../components/Nav";
// import MoviesPoster from "../components/MoviesPoster";
import format from "date-fns/format";

const Films = () => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalId, setOpenModalId] = useState(null);

  const handleModalOpen = (modalId) => {
    setOpen(true);
    // setOpenModalId(modalId);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

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
    { id: 4, img: IV },
    { id: 5, img: V },
    { id: 6, img: VI },
    { id: 1, img: I },
    { id: 2, img: II },
    { id: 3, img: III },
  ];

  const getImages = () => {
    items.forEach((item) => {
      images.forEach((image) => {
        if (item.episode_id === image.id) {
          item.image = image.img;
          item.image_id = image.id;
        }
      });
    });
  };

  getImages();

  // const result = (id) => images.find((position) => position.id === id);
  // console.log(result);

  // items.forEach((item) => {
  //   item.image = images.img;
  //   item.image_id = images.id;
  //   items.push(item);
  //   console.log(items);
  // });

  return (
    <div>
      <Nav />
      <div className="films__container">
        <div className="films__box">
          {items.map((item) => {
            return (
              <div className="films__card">
                <div className="films__image">
                  <img src={item.image} />
                </div>

                <div className="films__info">
                  <h4>{item.title}</h4>
                  <p>{item.release_date}</p>
                  <p>{item.opening_crawl}</p>
                </div>

                {/* <Button onClick={handleModalOpen}>
                  <img src={item.image} />
                </Button>

                <Dialog onClose={handleModalClose} open={open}>
                  <div className="films__close-button">
                    <DialogTitle>{item.title}</DialogTitle>
                    <IconButton aria-label="close" onClick={handleModalClose}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <MuiDialogContent dividers>
                    <Typography gutterBottom>{item.title}</Typography>
                  </MuiDialogContent>
                </Dialog> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Films;
