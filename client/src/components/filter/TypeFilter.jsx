import React, { useContext } from "react";
import typeIco from "../../images/icons/type.svg";
import TypeFilterItem from "./TypeFilterItem";
import { Context } from "../../index";

function TypeFilter() {
    const {product} = useContext(Context);
    return (
        <div className="filter__type">
            <div className="filter__type-title">
                <div className="filter__title-ico">
                    <img src={typeIco} />
                </div>
                <div className="filter__title-text">Тип</div>
            </div>
            <ul className="filter__type-list">
                {product.types.map(type => 
                    <TypeFilterItem key={type.id} type={type.name} />
                )}
            </ul>
        </div>
    );
}

export default TypeFilter;