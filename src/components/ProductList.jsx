import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    return (
        <div className="products__grid">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductList;