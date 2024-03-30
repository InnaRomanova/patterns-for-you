import React, { useState } from "react";
import "../Katalog/Katalog.css";
import CardButton from "../Elements/CardButton";
import map from "lodash/map";
import { Link } from "react-router-dom";
import Card from "./cardList/Card";

function CardList({ arrClothes }) {


  return (
    <>
      <ul className="katalog-cards">
        {map(arrClothes, (pattern, index) => (
          <Card pattern={pattern} key={index} />
        ))
        }
      </ul>
    </>
  );
}
export default CardList;
