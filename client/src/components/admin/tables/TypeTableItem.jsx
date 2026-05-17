import React, { useCallback, useContext } from "react";
import editIco from "../../../images/control/edit.svg";
import deleteIco from "../../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { fetchTypes } from "../../../http/typeAPI";

const TypeTableItem = observer(({ item }) => {

    const { product } = useContext(Context)

    const setData = () => {
        product.setSelectedProduct(item);
    }

    const refreshProducts = useCallback(async () => {
        try {
            const data = await fetchTypes();
            product.setTypes(data.rows);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [product]);

    // const handleDelete = async () => {
    //     removeProduct(item.id);
    //     await refreshProducts();
    // }

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td className="table__buttons">
                <img
                    src={editIco}
                    alt="редактировать"
                    // onClick={setData}
                />
                <img
                    src={deleteIco}
                    alt="удалить"
                    // onClick={handleDelete}
                />
            </td>
        </tr>
    );
})

export default TypeTableItem;