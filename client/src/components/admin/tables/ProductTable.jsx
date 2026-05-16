import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { Context } from "../../../index";
import ProductTableItem from "./ProductTableItem";
import { fetchProducts } from "../../../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductTable = observer(() => {

    const { product } = useContext(Context);

    const typeMap = useMemo(() => {
        return new Map(product.types.map(t => [t.id, t.name]));
    }, [product.types]);

    const brandMap = useMemo(() => {
        return new Map(product.brands.map(b => [b.id, b.name]));
    }, [product.brands]);


    const loadProducts = useCallback(async () => {
        try {
            const data = await fetchProducts(null, null, null, null, null, null, product.tableSearch);          
            product.setProducts(data.rows);
            product.setTotalCount(data.count);
        } catch (error) {
            console.error('Ошибка загрузки товаров:', error);
        }
    }, [product.tableSearch, product.selectedTable]);

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
                    <th />
                </tr>
            </thead>
            <tbody>
                {product.products.map(item =>
                    <ProductTableItem
                        key={item.id}
                        item={item}
                        typeMap={typeMap}
                        brandMap={brandMap}
                    />
                )}
            </tbody>
        </table>
    );
})

export default ProductTable;