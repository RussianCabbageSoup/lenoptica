import React, { useContext, useEffect } from "react";
import typeIco from "../../images/icons/type.svg";
import TypeFilterItem from "./TypeFilterItem";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { fetchTypes } from "../../http/productAPI";

const TypeFilter = observer(() => {
    const {product} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data.rows))
    }, []);

    return (
        <div className="filter__type">
            <div className="filter__type-title">
                <div className="filter__title-ico">
                    <img src={typeIco} alt=""/>
                </div>
                <div className="filter__title-text">Тип</div>
            </div>
            <ul className="filter__type-list">
                {product.types.map(type => 
                    <TypeFilterItem 
                        key={type.id} 
                        type={type} 
                    />
                )}
            </ul>
        </div>
    );
})

export default TypeFilter;