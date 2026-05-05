import React, { useContext, useEffect } from "react";
import { Context } from "../../index";
import TypeSelectItem from "./TypeSelectItem";
import { fetchTypes } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import plusIco from "../../images/icons/1486395885-plus_80605.svg";


const TypeSelect = observer(() => {

    const { product } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
    }, []);

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
            <div className="form__group-new">
                <input type="text" className="form__group-input" placeholder="Новый тип"/>
                <button type="button">Создать</button>
            </div>
        </div>
    );
})

export default TypeSelect;