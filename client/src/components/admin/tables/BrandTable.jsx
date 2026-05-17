import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../../../index";
import { fetchBrands } from "../../../http/brandAPI";
import BrandTableItem from "./BrandTableItem";

const BrandTable = observer(() => {

    const { product } = useContext(Context);

    const loadBrands = useCallback(async () => {
        try {
            const data = await fetchBrands(product.tableSearch);          
            product.setBrands(data.rows);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }, [product.tableSearch]);

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
                    <BrandTableItem 
                        key={item.id}
                        item={item}
                    />
                )}
            </tbody>
        </table>
    );
})

export default BrandTable;