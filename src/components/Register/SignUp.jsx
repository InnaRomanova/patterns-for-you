import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SignUp.css";
import React from "react";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import KatalogImage from "../../images/Katalog-image.png";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { isEmailValid, isNameValid, isPasswordValid, isEpmtyValid } from '../utils/validate';
import { Link } from 'react-router-dom';


function SignUp() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isEpmty, setIsEpmty] = useState(false);


    useEffect(() => {
        isEmailValid(email) ? setIsValidEmail(true) : setIsValidEmail(false);
        isNameValid(name) ? setIsValidName(true) : setIsValidName(false);
        isPasswordValid(password) ? setIsValidPassword(true) : setIsValidPassword(false);
        isEpmtyValid({ email, name, password }) ? setIsEpmty(true) : setIsEpmty(false);
    }, [email, name, password])

    return (
        <>
            <Header />
            <div className="katalogPatterns__img">
                {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
                    (<img src={KatalogImage} className="katalogPatterns__image" />)}
            </div>

            <div className="register">
                <div className="katalogPatterns__block">
                    <span className="katalogPatterns__navigate register__navigate">Регистрация</span>
                </div>
                {/* 
                <Link to="/">
                    <img className="register__logo" src={Logo} alt="Логотип" /></Link> */}
                <h2 className="register__title">Добро пожаловать!</h2>

                <form className="register__form">
                    <input className="register__form-input"
                        placeholder="Ваше Имя"
                        value={name || ''}
                        onChange={((event) => { setName(event.target.value) })}
                        required />
                    <span className={isValidName ? "form__span_hidden" : "form__span"}>Что-то пошло не так ...</span>

                    <label className="form__label">E-mail
                        <input className="form__input"
                            value={email || ''}
                            onChange={((event) => { setEmail(event.target.value) })}
                            required />
                        <span className={isValidEmail ? "form__span_hidden" : "form__span"}>Что-то пошло не так ...</span>
                    </label>

                    <label className="form__label">Пароль
                        <input className="form__input"
                            type="password"
                            value={password || ''}
                            onChange={((event) => { setPassword(event.target.value) })}
                            required />
                        <span className={isValidPassword ? "form__span_hidden" : "form__span"}>Что-то пошло не так ...</span>
                    </label>

                    {(isValidEmail && isValidName && isValidPassword && isEpmty) ? (<button className="form__button-submit"
                        type="submit">Зарегистрироваться</button>) : (<button className="form__button-submit_inactive" disabled>Зарегистрироваться</button>)}
                    <div className="form__text">Уже зарегистрированы? <Link to="/signin" className="form__enter">Войти</Link></div>

                </form>
            </div>
            <Footer />
        </>
    );
}
export default SignUp;
