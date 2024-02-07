import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SignIn.css";
import React from "react";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import KatalogImage from "../../images/Katalog-image.png";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { isEmailValid, isPasswordValid, isEpmtyValid } from "../utils/validate";


function SignIn({ onLogin }) {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isEpmty, setIsEpmty] = useState(false);

    useEffect(() => {
        isEmailValid(email) ? setIsValidEmail(true) : setIsValidEmail(false);
        isPasswordValid(password) ? setIsValidPassword(true) : setIsValidPassword(false);
        isEpmtyValid({ email, password }) ? setIsEpmty(true) : setIsEpmty(false);
    }, [email, password])

    function handleSubmit(e) {
        e.preventDefault();
        onLogin({ email, password })
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
                    <span className="katalogPatterns__navigate register__navigate">Авторизация</span>
                </div>
                {/* 
                <Link to="/">
                    <img className="register__logo" src={Logo} alt="Логотип" /></Link> */}
                <h2 className="register__title">Рады снова Вас видеть!</h2>

                <form className="register__form" onSubmit={handleSubmit}>

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

                    {(isValidEmail && isValidPassword && isEpmty) ? (<button className="register__button-submit"
                        type="submit">Войти</button>) : (<button className="register__button-submit_inactive" disabled>Войти</button>)}
                    <div className="register__text">Если вы в первый раз на сайте PFU Patterns ForYou<Link to="/signup" className="register__enter">Зарегистрироваться</Link></div>

                </form>
            </div >
            <Footer />
        </>
    );
}
export default SignIn;
