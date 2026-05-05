import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductList = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchProducts().then(data => {
            product.setProducts(data.rows)
            console.log(data.rows)
        }
        )
    }, []);

    return (
        <div className="products__grid">
            {product.products.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    );
})

export default ProductList;