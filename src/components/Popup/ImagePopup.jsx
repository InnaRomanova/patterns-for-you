function ImagePopup(props) {



    return (
        <div className={`popup popup_open-image ${props.card.link && 'popup_opened'}`}>
            <div className="popup__content">
                <button
                    className="popup__close-button"
                    id="Close-card"
                    type="button"
                    onClick={props.onClose}
                    value="close" />
                <img src={props.card.link} alt={props.card.name} className="popup__image" />
            </div>
        </div>
    )
}

export default ImagePopup;