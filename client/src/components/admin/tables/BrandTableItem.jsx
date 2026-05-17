import React, { useCallback, useContext } from "react";
import editIco from "../../../images/control/edit.svg";
import deleteIco from "../../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { deleteBrand, fetchBrands } from "../../../http/brandAPI";

const BrandTableItem = observer(({ item }) => {

    const { product } = useContext(Context)

    const setData = () => {
        product.setSelectedProduct(item);
    }

    const refreshProducts = useCallback(async () => {
        try {
            const data = await fetchBrands();
            product.setBrands(data.rows);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [product]);

    const handleDelete = async () => {
        deleteBrand(item.id);
        await refreshProducts();
    }

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td className="table__buttons">
                <img
                    src={editIco}
                    alt="редактировать"
                    onClick={setData}
                />
                <img
                    src={deleteIco}
                    alt="удалить"
                    onClick={handleDelete}
                />
            </td>
        </tr>
    );
})

export default BrandTableItem;