import React from "react";
import editIco from "../../images/control/edit.svg";
import deleteIco from "../../images/control/delete.svg";
import { observer } from "mobx-react-lite";

const ProductTableItem = observer(({product}) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.typeId}</td>
            <td>{product.brandId}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td className="table__buttons">
                <img src={editIco} alt="редактировать" />
                <img src={deleteIco} alt="удалить" />
            </td>
        </tr>
    );
})

export default ProductTableItem;