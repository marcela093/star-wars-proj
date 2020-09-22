import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className={props.className}>
        <img src={props.src} />
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
