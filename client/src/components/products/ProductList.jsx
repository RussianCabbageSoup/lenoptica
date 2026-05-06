import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductList = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchProducts(null, null, 6, 1).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
            console.log(data.rows, ' count: ', data.count)
        })
    }, []);

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.limit, product.page).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
            console.log(data.rows, ' count: ', data.count)
        })
    }, [product.page, product.selectedType, product.selectedBrand])

    return (
        <div className="products__grid">
            {product.products.map(product =>
                <ProductCard key={product.id} product={product} />
            )}
        </div>
    );
})

export default ProductList;