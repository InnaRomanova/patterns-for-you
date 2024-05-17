import React, {useRef} from "react";
import "./ImagePopup.css";
import useOnClickOutside from 'use-onclickoutside';

function ImagePopup({ selectedImage, handleClose }) {

    const closeAllPopups = () => {
        handleClose();
    }

    return (
        <div className="popup">
            <div className="popup__content">
                <button
                    className="popup__close-button"
                    id="Close-card"
                    type="button"
                    onClick={closeAllPopups}
                    value="close" />
                <img src={selectedImage} alt="картинка" className="popup__image" />
            </div>
        </div>
    )
}

export default ImagePopup;
