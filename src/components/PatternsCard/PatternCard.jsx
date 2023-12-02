import React from "react";
import "./PatternCard.css";
import map from "lodash/map";

function PatternCard({patternArray}) {

  return (
    <>
    {map(patternArray, (arrPatterns, index) => (
    <li className="pattern__list-item" key={index}>
                <img src={arrPatterns.image} alt="платье" className="pattern__image" />
            <div className="pattern__inform">
              <h3 className="card__inform-name">{arrPatterns.name}</h3>
              <p className="card__inform-katalog">{arrPatterns.text}</p>
              <span className="card__inform-price">{arrPatterns.price} Руб.</span>
            </div>
            </li>
            ))}
    </>            
  );
}

export default PatternCard;
