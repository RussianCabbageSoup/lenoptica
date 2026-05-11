import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const TypeFilterItem = observer(({ type }) => {

    const { product } = useContext(Context);

    const isSelected = product.selectedType?.id === type.id;

    const handleChange = () => {
        if (isSelected) {
            product.setSelectedType({});
        } else {
            product.setSelectedType(type);
        }
    };

    return (
        <li className="filter__type-item">
            <label className="filter__type-checkbox">
                <input
                    type="checkbox"
                    name="type"
                    value={type.id}
                    checked={isSelected}
                    onChange={handleChange}
                /> {type.name}
            </label>
        </li>
    );
})

export default TypeFilterItem;