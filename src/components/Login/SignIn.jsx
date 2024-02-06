import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./SignIn.css";
import React from "react";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import KatalogImage from "../../images/Katalog-image.png";
import { useMediaQuery } from "react-responsive";


function SignIn() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });


    return (
        <>
            <Header />
            <div className="katalogPatterns__img">
                {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
                    (<img src={KatalogImage} className="katalogPatterns__image" />)}
            </div>
            <Footer />
        </>
    );
}
export default SignIn;
