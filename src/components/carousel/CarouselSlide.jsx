import React from "react";
import ProductCard from "../products/ProductCard";

function CarouselSlide() {
    return (  
        <a className="swiper-slide" href="#">
            <ProductCard />
        </a>
    );
}

export default CarouselSlide;