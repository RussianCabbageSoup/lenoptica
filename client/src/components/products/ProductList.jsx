import React, { useContext } from "react";
import { Context } from "../../index";
import ProductCard from "./ProductCard";

function ProductList() {
    const {product} = useContext(Context)
    return (
        <div className="products__grid">
            {product.products.map(product => 
                <ProductCard key={product.id} product={product}/>
            )}
        </div>
    );
}

export default ProductList;