import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import OpenVector from "../Elements/OpenVector";
import NavigationList from "../NavigationList/NavigationList";

function Navigation() {
  const [openList, setOpenList] = useState(false);

  function handleOpen() {
    setOpenList(!openList);
  }

  return (
    <div className="navigation__container">
      <ul className="navigation__list">
        <li className="navigation__list-item navigation__text"><Link to="/" className="navigation__link">Главная</Link></li>
        <li className="navigation__list-item navigation__text" onClick={handleOpen}>Каталог выкроек
          <OpenVector onOpen={openList} /></li>
        {openList && <NavigationList />}
        <li className="navigation__list-item navigation__text"><Link to="/block" className="navigation__link">Блок форум</Link></li>
        <li className="navigation__list-item navigation__text"><Link to="/support" className="navigation__link">Как скачать</Link></li>
        <li className="navigation__list-item navigation__text"><Link to="/contacts" className="navigation__link">Контакты</Link></li>
      </ul>
    </div>
  );
}
export default Navigation;
