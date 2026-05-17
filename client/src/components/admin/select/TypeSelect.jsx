import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../index";
import TypeSelectItem from "./TypeSelectItem";
import { createType, fetchTypes } from "../../../http/typeAPI";
import { observer } from "mobx-react-lite";

const TypeSelect = observer(({ selected }) => {

    const { product } = useContext(Context);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        fetchTypes().then(data => {
            product.setTypes(data.rows)

            let defaultTypeId = data.rows[0].id;

            if (selected) {
                defaultTypeId = selected;
            }

            if (defaultTypeId) {
                setSelectedType(defaultTypeId);
                product.setSelectedType(defaultTypeId);
            } else {
                setSelectedType('');
                product.setSelectedType(null);
            }
        });
    }, [selected]);

    const [value, setValue] = useState('');

    const addType = () => {
        if (value) {
            createType({ name: value }).then(newType => {
                product.setTypes([...product.types, newType]);
                setSelectedType(newType.id);
                product.setSelectedType(newType.id);
                setValue('')
            })
        } else {
            console.log('rej')
        }
    }

    return (
        <div className="form__group">
            <label className="form__group-label">
                Тип
            </label>
            <select
                className="form__group-select"
                value={selectedType}
                onChange={e => {
                    setSelectedType(e.target.value)
                    product.setSelectedType(e.target.value)
                }}
                required
            >
                {product.types.map(type =>
                    <TypeSelectItem
                        key={type.id}
                        type={type}
                    />
                )}
            </select>
            <div className="form__group-new">
                <input
                    type="text"
                    className="form__group-input"
                    placeholder="Новый тип"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="button" onClick={addType}>Создать</button>
            </div>
        </div>
    );
})

export default TypeSelect;