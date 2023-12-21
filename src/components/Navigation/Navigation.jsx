import React, { useState } from "react";
import "./Navigation.css";
import MenuList from "../Elements/MenuList";
import OpenVector from "../Elements/OpenVector";
import NavigationList from "../NavigationList/NavigationList";

function Navigation({}) {
  const [openList, setOpenList] = useState(false);

  function handleOpen() {
    setOpenList(!openList);
  }

  return (
    <div className="navigation__container">
    {/* <MenuList> */}
        <ul className="navigation__list">
            <li className="navigation__list-item navigation__text" onClick={handleOpen}>Каталог выкроек 
            <OpenVector onOpen={openList} /></li>
            {openList && <NavigationList />}
            <li className="navigation__list-item navigation__text">Блок форум</li>
            <li className="navigation__list-item navigation__text">Как скачать</li>
            <li className="navigation__list-item navigation__text">Контакты</li>
        </ul>
    {/* </MenuList> */}
        </div>
  );
}
export default Navigation;
