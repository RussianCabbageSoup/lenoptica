import React from "react";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";

function CarouselSlide({product}) {
    return (  
        <Link to="/product" className="swiper-slide">
            <ProductCard product={product}/>
        </Link>
    );
}

export default CarouselSlide;