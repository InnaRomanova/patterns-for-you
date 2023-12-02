import React from "react";
import "./Pattern.css";
import dress from "../../images/pattern-dress.png";
import coat from "../../images/pattern-coat.png";
import blouse from "../../images/pattern-blouse.png";

function Pattern() {

  return (
    <section className="pattern">
        <div className="pattern__container">
        <h2 className="news__title">Каталог выкроек</h2>
        <ul className="pattern__list">
            <li className="pattern__list-item">
                <img src={dress} alt="платье" className="pattern__image" />
                <div className="pattern__inform">
              <h3 className="card__inform-name">Платье Очарованье</h3>
              <p className="card__inform-katalog">женское платье</p>
              <span className="card__inform-price">135,00 Руб.</span>
            </div>
            </li>
        </ul>
        </div>
    </section>
  );
}

export default Pattern;
