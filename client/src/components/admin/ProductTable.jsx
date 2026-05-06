import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../../index";
import ProductTableItem from "./ProductTableItem";
import { fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductTable = observer(() => {

    const { product } = useContext(Context);

    const loadProducts = useCallback(async () => {
        try {
            const data = await fetchProducts(null, null, null, null);
            product.setProducts(data.rows);
            product.setTotalCount(data.count);
            console.log('Товары загружены:', data.count);
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
        }
    }, [product]);

    useEffect(() => {
        loadProducts();
    }, [loadProducts]);

    return (
        <table className="dashboard__table">
            <thead className="table__head">
                <tr>
                    <th>id</th>
                    <th>Название</th>
                    <th>Тип</th>
                    <th>БрЕнд</th>
                    <th>цЕна</th>
                    <th>наЛИЧие</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {product.products.map(product =>
                    <ProductTableItem key={product.id} product={product} />
                )}
            </tbody>
        </table>
    );
})

export default ProductTable;