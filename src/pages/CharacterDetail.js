import { RedoOutlined } from "@material-ui/icons";
import React from "react";

const CharacterDetail = (character) => {
  return (
    <div>
      <div>
        <p>{character.name}</p>
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>{character.eye_color}</p>
        <p>{character.height}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
