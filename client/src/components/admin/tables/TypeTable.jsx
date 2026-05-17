import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../../../index";
import { fetchTypes } from "../../../http/typeAPI";
import TypeTableItem from "./TypeTableItem";

const TypeTable = observer(() => {

    const { product } = useContext(Context);

    const loadTypes = useCallback(async () => {
        try {
            const data = await fetchTypes(product.tableSearch);          
            product.setTypes(data.rows);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }, [product.types]);

    useEffect(() => {
        loadTypes();
    }, [loadTypes]);

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
                {product.types.map(item =>
                    <TypeTableItem 
                        key={item.id}
                        item={item}
                    />
                )}
            </tbody>
        </table>
    );
})

export default TypeTable;