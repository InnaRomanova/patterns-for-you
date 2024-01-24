import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Details.css";
import DetailsVectorSidbar from "../Elements/DetailsVectorSidbar";
import Shoppings from "../Elements/Shopping";
import Favourites from "../Elements/Favourites";
import DetailsModel from "../Details/DetailsModel";
// import Like from "../Elements/Like";
// import Comment from "../Elements/Comment";

function DetailsContent() {
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });


    return (
        <>

            <div className="details__content">
                {mobile ? (<>
                    <DetailsModel />

                    {/* Сайт-бар  */}
                    <div className="details__sidebar">
                        <ul className="details__sidmaster">
                            <li className="details__sidmaster-item details__sidebar-number">
                                Выкройка №023984209</li>

                            <li className="details__sidmaster-item">
                                <ul className="details__sidebar-list">
                                    <li className="details__sidebar-item">
                                        Расход материала
                                        <DetailsVectorSidbar /></li>
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
                                    <li className="details__sidebar-kategories">
                                        Женская верхняя одежда
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Пиджаки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Блузки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Юбки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Платья
                                        <DetailsVectorSidbar /></li>
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
                    <DetailsModel />

                    {/* Сайт-бар */}
                    <div className="details__sidebar">
                        <ul className="details__sidmaster">
                            <li className="details__sidmaster-item details__sidebar-number">
                                Выкройка №023984209</li>

                            <li className="details__sidmaster-item">
                                <ul className="details__sidebar-list">
                                    <li className="details__sidebar-item">
                                        Расход материала
                                        <DetailsVectorSidbar /></li>
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
                                    <li className="details__sidebar-kategories">
                                        Женская верхняя одежда
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Пиджаки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Блузки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Юбки
                                        <DetailsVectorSidbar /></li>
                                    <li className="details__sidebar-kategories">
                                        Платья
                                        <DetailsVectorSidbar /></li>
                                </ul></li>

                            <li className="details__sidmaster-price">
                                Цена: 150 руб.</li>

                            <li className="details__sidebar-item">
                                <button className="details__sidmaster-shopping">Купить <Shoppings />
                                </button><Favourites /></li>
                        </ul>
                    </div>
                </>)}
            </div>

        </>
    )
}
export default DetailsContent;
