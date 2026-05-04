import React from "react";
import editIco from "../../images/control/edit.svg";
import deleteIco from "../../images/control/delete.svg";

function ProductTableItem({product}) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>Тип 1</td>
            <td>Бренд 1</td>
            <td>{product.price}</td>
            <td>0</td>
            <td className="table__buttons">
                <img src={editIco} alt="редактировать" />
                <img src={deleteIco} alt="удалить" />
            </td>
        </tr>
    );
}

export default ProductTableItem;