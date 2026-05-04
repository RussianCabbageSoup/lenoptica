import React, { useContext } from "react";
import { Context } from "../../index";
import TypeSelectItem from "./TypeSelectItem";

function TypeSelect() {

    const {product} = useContext(Context);

    return (
        <div className="form__group">
            <label className="form__group-label">
                Тип
            </label>
            <select className="form__group-select" required>
                {product.types.map(type => 
                    <TypeSelectItem key={type.id} type={type} />
                )}
            </select>
        </div>
    );
}

export default TypeSelect;