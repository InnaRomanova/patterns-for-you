import React from "react";
import "./Menu.css";
import MenuList from "../Elements/MenuList";

function Menu() {

  return (
    <div className="menu__container">
    {/* <MenuList> */}
        <ul className="menu__list">
            <li className="menu__list-item">Каталог выкроек</li>
            <li className="menu__list-item">Блок форум</li>
            <li className="menu__list-item">Как скачать</li>
            <li className="menu__list-item">Контакты</li>
        </ul>
    {/* </MenuList> */}
        </div>
  );
}
export default Menu;
