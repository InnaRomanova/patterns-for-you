import React from "react";
import "./ImagePopup.css";

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
