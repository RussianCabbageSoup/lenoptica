import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import ProductTableItem from "./ProductTableItem";
import { fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductTable = observer(() => {

    const { product } = useContext(Context);

    useEffect(() => {
        fetchProducts().then(data => {
            product.setProducts(data.rows)
        }
        )
    }, []);

    return (
        <tbody>
            {product.products.map(product =>
                <ProductTableItem key={product.id} product={product} />
            )}
        </tbody>
    );
})

export default ProductTable;