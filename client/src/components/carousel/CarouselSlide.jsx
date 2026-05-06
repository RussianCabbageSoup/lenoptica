import React from "react";
import { Link } from "react-router-dom";

function CarouselSlide({ product }) {

    return (
        <Link to="/product" className="swiper-slide">
            слайд
        </Link>
    );
}

export default CarouselSlide;