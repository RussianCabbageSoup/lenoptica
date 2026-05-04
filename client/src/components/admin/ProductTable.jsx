import React, { useContext } from "react";
import { Context } from "../../index";
import ProductTableItem from "./ProductTableItem";

function ProductTable() {

    const {product} = useContext(Context);

    return (
        <tbody>
            {product.products.map(product => 
                <ProductTableItem key={product.id} product={product} />
            )}
        </tbody>
    );
}

export default ProductTable;