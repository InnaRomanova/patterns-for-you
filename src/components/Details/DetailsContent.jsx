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
import DetailsConsumption from "./DetailsConsumption";
// import Like from "../Elements/Like";
// import Comment from "../Elements/Comment";

function DetailsContent({ cardValuePictures, cardValue }) {
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [openModal1, setOpenModal1] = useState(false);
    const [openList, setOpenList] = useState(false);

    // const selectedTypeOfClothes = arrClothes.find(item => item.key === selectedKey);
    // const selectedPattern = selectedTypeOfClothes.values;


    const handleOpen = () => {
        setOpenModal1(true);
        setOpenList(!openList);
    }

    const handleClose = () => {
        setOpenModal1(false);
        setOpenList(openList);
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
                                    {openModal1 ? (<>
                                        <li className="details__sidebar-item"
                                            onClick={handleClose}>
                                            Расход материала
                                            <DetailsVectorSidbar
                                                onOpen={openList}
                                            />
                                        </li>
                                        <DetailsConsumption /></>

                                    ) : (
                                        <li className="details__sidebar-item"
                                            onClick={handleOpen}>
                                            Расход материала
                                            <DetailsVectorSidbar />
                                        </li>
                                    )}

                                    <li className="details__sidebar-item">
                                        Рекомендации по материалам
                                        <DetailsVectorSidbar />
                                    </li>
                                    <li className="details__sidebar-item">
                                        Как купить выкройку
                                        <DetailsVectorSidbar />
                                    </li>
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

                                    {openModal1 ? (<>
                                        <li className="details__sidebar-item" onClick={handleClose}>
                                            Расход материала
                                            <DetailsVectorSidbar onOpen={openList} />
                                        </li>
                                        <DetailsConsumption /></>

                                    ) : (
                                        <li className="details__sidebar-item"
                                            onClick={handleOpen}>
                                            Расход материала
                                            <DetailsVectorSidbar />
                                        </li>
                                    )}

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
