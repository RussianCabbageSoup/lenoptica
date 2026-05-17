import React, { useCallback, useContext } from "react";
import editIco from "../../../images/control/edit.svg";
import deleteIco from "../../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { deleteProduct, fetchProducts } from "../../../http/productAPI";

const ProductTableItem = observer(({ item, typeMap, brandMap, tableType }) => {

    const { product } = useContext(Context)

    const setData = () => {
        product.setSelectedProduct(item);
    }

    const refreshProducts = useCallback(async () => {
        try {
            const data = await fetchProducts(null, null, null, null);
            product.setProducts(data.rows);
            product.setTotalCount(data.count);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [product.products]);

    const handleDelete = async () => {
        await deleteProduct(item.id);
        await refreshProducts();
    }

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{typeMap.get(item.typeId) || item.typeId}</td>
            <td>{brandMap.get(item.brandId) || item.brandId}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
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

export default ProductTableItem;