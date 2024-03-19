import React from "react";
import PopupWidthForm from "./PopupWidthForm";
import { CurrentUserContext } from "../contexts/CurrentContexts";
import { useState } from "react";
import  newApi  from "../utils/MainApi";

function ProfilePopup({ isOpen, onClose }) {
  const [name, setName] = React.useState('');
//   const [currentUser, setСurrentUser] = useState({});
const [isEditProfilePopupOpen, setIsEditProfileClick] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);  // Подписка на контекст

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
  }, [currentUser, isOpen]);

  // Обработчик изменения инпута обновляет стейт
  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();// Запрещаем браузеру переходить по адресу формы
    // Передаём значения управляемых компонентов во внешний обработчик
    handleUpdateUser({
      name,
    });
  }

  const handleUpdateUser = (user) => {
    newApi.editUserInfo(user)
      .then((newData) => {
        currentUser(newData);
        setIsEditProfileClick(false);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <PopupWidthForm isOpen={isOpen} name="profile" title="Редактировать профиль"
      onSubmit={handleSubmit} onClose={onClose}>
        <div
        className="form"
        id="form_profile"
        name="profile"
        method="post"
        action="#"
        noValidate="">
        <fieldset className="form__user" id="profile__fields">
          <input
            className="form__item"
            type="text"
            id="profile__name"
            name="name"
            placeholder="Введите ваше имя"
            autoComplete="off"
            value={name || ''}
            minLength="2"
            maxLength="40"
            required=""
            onChange={handleChangeName} />
          <span className="form__item-error" id="profile__name-error" />
        </fieldset>
      </div>
      </PopupWidthForm>
  )
}

export default ProfilePopup;