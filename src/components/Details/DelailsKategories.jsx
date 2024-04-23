import React from "react";
import DetailsVectorSidbar from "../Elements/DetailsVectorSidbar";
import { Link } from "react-router-dom";


function DetailsKategories({ kategories }) {


    return (
        <>
            <Link to={`/katalog/${kategories.key}`} className="details__sidebar-kategories">
                {kategories.titles}
                <DetailsVectorSidbar /></Link>
        </>
    )
}
export default DetailsKategories;
