import React, { useContext, useEffect, useMemo } from "react";
import { Context } from "../../index";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductList = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {

        const PAGE_LIMIT = 6

        fetchProducts(null, null, PAGE_LIMIT, 1).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
        product.setLimit(PAGE_LIMIT)
    }, []);

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.limit, product.page, product.minPrice, product.maxPrice, product.search).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [
        product.selectedType.id, 
        product.selectedBrand.id, 
        product.limit, 
        product.page,  
        product.minPrice, 
        product.maxPrice,
        product.search
    ])

    const brandMap = useMemo(() => {
        return new Map(product.brands.map(b => [b.id, b.name]));
    }, [product.brands]);

    return (
        <div className="products__grid">
            {product.products.map(product =>
                <ProductCard
                    key={product.id}
                    product={product}
                    brandMap={brandMap}
                />
            )}
        </div>
    );
})

export default ProductList;