import React, { useContext } from "react";
import editIco from "../../images/control/edit.svg";
import deleteIco from "../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const ProductTableItem = observer(({item, typeMap, brandMap}) => {

    const {product} = useContext(Context)

    const setData = () => {
        product.setSelectedProduct(item);
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
                />
            </td>
        </tr>
    );
})

export default ProductTableItem;