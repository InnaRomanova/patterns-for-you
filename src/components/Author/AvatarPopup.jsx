import React from "react";
import PopupWidthForm from "./PopupWidthForm";
import { useState } from "react";
import  newApi  from "../utils/MainApi";


function  AvatarPopup({ isOpen, onClose }) {
    const avatarRef = React.useRef()
    const [isEditAvatarClick, setIsEditAvatarClick] = useState(false);
     const [currentUser, setCurrentUser] = useState({});
     const [avatarUrl, setAvatarUrl] = useState('');//состояние хранения ссылки на аватар

    function handleSubmit(e) {
        e.preventDefault();
        handleUpDateAvatar({ avatar: avatarUrl }); /* передаю ссылку на аватар при вызове функции editAvatar */
    }
    
  const handleUpDateAvatar = (avatarData) => {
    newApi.editAvatar(avatarData)
      .then((newData) => {
        //обновляю состояние currentUser, если необходимо
        setCurrentUser(newData);
        setIsEditAvatarClick(false);
      })
      .catch((err) => {
        console.error(err);
      })
  }


    return (
        <>
            <PopupWidthForm 
            isOpen={isOpen} 
            name="avatar" 
            onClose={onClose} 
            onSubmit={handleSubmit}
            editAvatar={handleUpDateAvatar}
            >
                <div
                    className="form"
                    id="form-avatar"
                    name="avatar"
                    method="post"
                    noValidate="">
                    <h2 className="form__title">Обновить аватар</h2>
                    <fieldset className="form__user" id="avatar__fields">
                        <input
                            className="form__item"
                            id="avatar__image"
                            name="url"
                            type="url"
                            placeholder="Ссылка на картинку"
                            required=""
                            ref={avatarRef}
                            //обновляю состояние при изменении значения
                            onChange={(e) => setAvatarUrl(e.target.value)} />
                        <span className="form__item-error" id="avatar__image-error" />
                    </fieldset>
                </div>
            </PopupWidthForm>

        </>
    );
}

export default AvatarPopup;