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
import DetailsRecommendations from "./DetailsRecommendations";
import DetailsHowToBuy from "./DetailsHowToBuy";
// import Like from "../Elements/Like";
// import Comment from "../Elements/Comment";

function DetailsContent({ cardValuePictures, cardValue }) {
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [openList2, setOpenList2] = useState(false);
    const [openList3, setOpenList3] = useState(false);

    // const selectedTypeOfClothes = arrClothes.find(item => item.key === selectedKey);
    // const selectedPattern = selectedTypeOfClothes.values;


    //функция открытия списка в сайт-баре
    const handleOpen = (listNumber) => {
        setSelectedNumber(listNumber);
        if (listNumber === 1) {
            setOpenModal1(true);
            setOpenList(!openList);
        } else if (listNumber === 2) {
            setOpenModal2(true);
            setOpenList2(!openList2);
        } else if (listNumber === 3) {
            setOpenModal3(true);
            setOpenList3(!openList3);
        }
    }

    //функция закрытия списка в сайт-баре
    const handleClose = (listNumber) => {
        if (listNumber === 1) {
            setOpenModal1(false);
            setOpenList(openList);
        } else if (listNumber === 2) {
            setOpenModal2(false);
            setOpenList2(openList2);
        } else if (listNumber === 3) {
            setOpenModal3(false);
            setOpenList3(openList3);
        } setSelectedNumber(null);
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
                                        <li className="details__sidebar-item" onClick={() => handleClose(1)}>
                                            Расход материала
                                            <DetailsVectorSidbar onOpen={openList} />
                                        </li>
                                        <DetailsConsumption /></>
                                    ) : (<li className="details__sidebar-item"
                                        onClick={() => handleOpen(1)}>
                                        Расход материала
                                        <DetailsVectorSidbar />
                                    </li>)}

                                    {openModal2 ? (<>
                                        <li className="details__sidebar-item" onClick={() => handleClose(2)}>
                                            Рекомендации по&nbsp;материалам
                                            <DetailsVectorSidbar onOpen={openList2} /></li>
                                            <DetailsRecommendations /></>) : (
                                        <li className="details__sidebar-item"
                                            onClick={() => handleOpen(2)}>
                                            Рекомендации по&nbsp;материалам
                                            <DetailsVectorSidbar /></li>)}

                                    {openModal3 ? (<>
                                    <li className="details__sidebar-item" onClick={() => handleClose(3)}>
                                        Как купить выкройку
                                        <DetailsVectorSidbar onOpen={openList3}/></li>
                                        <DetailsHowToBuy /></>) : (<li className="details__sidebar-item"
                                        onClick={() => handleOpen(3)}>
                                        Как купить выкройку
                                        <DetailsVectorSidbar /></li>)}
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
                                        <li className="details__sidebar-item" onClick={() => handleClose(1)}>
                                            Расход материала
                                            <DetailsVectorSidbar onOpen={openList} />
                                        </li>
                                        <DetailsConsumption /></>
                                    ) : (<li className="details__sidebar-item"
                                        onClick={() => handleOpen(1)}>
                                        Расход материала
                                        <DetailsVectorSidbar />
                                    </li>)}

                                    {openModal2 ? (<>
                                        <li className="details__sidebar-item" onClick={() => handleClose(2)}>
                                            Рекомендации по&nbsp;материалам
                                            <DetailsVectorSidbar onOpen={openList2} /></li>
                                        <DetailsRecommendations /></>) : (
                                        <li className="details__sidebar-item"
                                            onClick={() => handleOpen(2)}>
                                            Рекомендации по&nbsp;материалам
                                            <DetailsVectorSidbar /></li>)}

                                    {openModal3 ? (<>
                                    <li className="details__sidebar-item" onClick={() => handleClose(3)}>
                                        Как купить выкройку
                                        <DetailsVectorSidbar onOpen={openList3}/></li>
                                        <DetailsHowToBuy /></>) : (<li className="details__sidebar-item"
                                        onClick={() => handleOpen(3)}>
                                        Как купить выкройку
                                        <DetailsVectorSidbar /></li>)}
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
