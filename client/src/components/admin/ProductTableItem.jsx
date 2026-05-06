import React from "react";
import editIco from "../../images/control/edit.svg";
import deleteIco from "../../images/control/delete.svg";
import { observer } from "mobx-react-lite";

const ProductTableItem = observer(({product, typeMap, brandMap}) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{typeMap.get(product.typeId) || product.typeId}</td>
            <td>{brandMap.get(product.brandId) || product.brandId}</td>
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