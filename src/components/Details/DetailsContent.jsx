import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Details.css";
import DetailsVectorSidbar from "../Elements/DetailsVectorSidbar";
import Shoppings from "../Elements/Shopping";
import Favourites from "../Elements/Favourites";
import DetailsModel from "../Details/DetailsModel";
import { arrClothes } from "../Constants/Objects/Massiv";
import map from "lodash/map";
import DetailsKategories from "./DelailsKategories";
// import Like from "../Elements/Like";
// import Comment from "../Elements/Comment";

function DetailsContent({ cardValuePictures, cardValue }) {
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [openList, setOpenList] = useState(false);

    // const selectedTypeOfClothes = arrClothes.find(item => item.key === selectedKey);
    // const selectedPattern = selectedTypeOfClothes.values;

    const handleOpen = () => {
        setOpenList(true);
    }

    const handleClose = () => {
        setOpenList(false);
    }

    return (
        <>

            <div className="details__content">
                {mobile ? (<>
                    <DetailsModel cardValuePictures={cardValuePictures} />

                    {/* Сайт-бар  */}
                    <div className="details__sidebar">
                        <ul className="details__sidmaster">
                            {cardValue.map((kategories, index) => {
                                <li key={index} className="details__sidmaster-item details__sidebar-number">
                                    Выкройка №{kategories.number}</li>
                            })}

                            <li className="details__sidmaster-item">
                                <ul className="details__sidebar-list">
                                    {openList ? (
                                        <li className = "details__sidebar-item" onClick={handleClose}>
                                        Расход материала b n/l/l/l/l
                                        <DetailsVectorSidbar/></li>
                                    ): (
                                            <li className = "details__sidebar-item">
                                        Расход материала
                                        <DetailsVectorSidbar onClick={handleOpen}/></li>
                                    )}

                            <li className="details__sidebar-item">
                                Рекомендации по материалам
                                <DetailsVectorSidbar /></li>
                            <li className="details__sidebar-item">
                                Как купить выкройку
                                <DetailsVectorSidbar /></li>
                        </ul></li>

                    <li className="details__sidmaster-title">

                        <ul className="details__sidebar-list-kategories">
                            Категории
                            {map(arrClothes, (kategories, index) => (
                                <DetailsKategories kategories={kategories} key={index} />))}
                        </ul></li>
                    <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>

                    <li className="details__sidmaster-price">
                        Цена: 150 руб.</li>

                    <li className="details__sidebar-item">
                        <button className="details__sidmaster-shopping">Купить <Shoppings />
                        </button><Favourites /></li>
                </ul>
            </div>
        </>) : (<>
            <DetailsModel
                cardValuePictures={cardValuePictures}
            />

            {/* Сайт-бар */}
            <div className="details__sidebar">
                <ul className="details__sidmaster">
                    {cardValue.map((kategories, index) => (
                        <li key={index} className="details__sidmaster-item details__sidebar-number">
                            Выкройка №{kategories.number}</li>))}


                    <li className="details__sidmaster-item">
                        <ul className="details__sidebar-list">
                            <li className="details__sidebar-item">
                                Расход материала
                                <DetailsVectorSidbar /></li>
                            <li className="details__sidebar-item">
                                Рекомендации по&nbsp;материалам
                                <DetailsVectorSidbar /></li>
                            <li className="details__sidebar-item">
                                Как купить выкройку
                                <DetailsVectorSidbar /></li>
                        </ul></li>

                    <li className="details__sidmaster-title">

                        <ul className="details__sidebar-list-kategories">
                            Категории
                            {map(arrClothes, (kategories, index) => (
                                <DetailsKategories kategories={kategories} key={index} />))}
                        </ul></li>

                    <li className="details__sidmaster-price">
                        Цена: 150 руб.</li>

                    <li className="details__sidebar-item">
                        <button className="details__sidmaster-shopping">Купить <Shoppings />
                        </button><Favourites /></li>
                </ul>
            </div>
        </>)
}
            </div >

        </>
    )
}
export default DetailsContent;
