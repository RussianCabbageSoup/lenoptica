import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../../../index";
import { fetchBrands } from "../../../http/productAPI";
import TypeBrandTableItem from "./TypeBrandTableItem";

const BrandTable = observer(() => {

    const { product } = useContext(Context);

    const loadBrands = useCallback(async () => {
        try {
            const data = await fetchBrands();          
            product.setBrands(data.rows);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }, [product.brands]);

    useEffect(() => {
        loadBrands();
    }, [loadBrands]);

    return (
        <table className="dashboard__table">
            <thead className="table__head">
                <tr>
                    <th>id</th>
                    <th>Название</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {product.brands.map(item =>
                    <TypeBrandTableItem 
                        key={item.id}
                        item={item}
                    />
                )}
            </tbody>
        </table>
    );
})

export default BrandTable;