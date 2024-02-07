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


function SignUp({ onRegister }) {
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

    function handleSubmit(e) {
        e.preventDefault();
        onRegister({ name, email, password })
    }

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

                <form className="register__form" onSubmit={handleSubmit}>
                    <input className="register__form-input"
                        placeholder="Ваше имя"
                        value={name || ''}
                        onChange={((event) => { setName(event.target.value) })}
                        required />
                    <span className={isValidName ? "register__span_hidden" : "register__span"}>Что-то пошло не так ...</span>


                    <input className="register__form-input"
                        placeholder="Почта"
                        value={email || ''}
                        onChange={((event) => { setEmail(event.target.value) })}
                        required />
                    <span className={isValidEmail ? "register__span_hidden" : "register__span"}>Что-то пошло не так ...</span>

                    <input className="register__form-input"
                        placeholder="Пароль"
                        type="password"
                        value={password || ''}
                        onChange={((event) => { setPassword(event.target.value) })}
                        required />
                    <span className={isValidPassword ? "register__span_hidden" : "register__span"}>Что-то пошло не так ...</span>

                    {(isValidEmail && isValidName && isValidPassword && isEpmty) ? (<button className="register__button-submit"
                        type="submit">Зарегистрироваться</button>) : (<button className="register__button-submit_inactive" disabled>Зарегистрироваться</button>)}
                    <div className="register__text">Если вы уже зарегистрированы на сайте PFU Patterns ForYou <Link to="/signin" className="register__enter">Войти</Link></div>

                </form>
            </div >
            <Footer />
        </>
    );
}
export default SignUp;
