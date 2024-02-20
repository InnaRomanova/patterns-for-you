import { useState } from "react";

function ImagePopup() {
    const [selectedImage, setSelectedImage] = useState(null);

    const closeAllPopups = () => {
        setSelectedImage(false);
    }

    return (
        <div className="popup">
            <div className="popup__content">
                <button
                    className="popup__close-button"
                    id="Close-card"
                    type="button"
                    onClose={closeAllPopups}
                    value="close" />
                <img src={selectedImage} alt="картинка" className="popup__image" />
            </div>
        </div>
    )
}

export default ImagePopup;