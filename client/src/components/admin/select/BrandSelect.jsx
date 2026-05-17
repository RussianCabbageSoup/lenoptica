import React, { useContext, useEffect, useState } from "react";
import BrandSelectItem from "./BrandSelectItem";
import { Context } from "../../../index";
import { createBrand, fetchBrands } from "../../../http/brandAPI";
import { observer } from "mobx-react-lite";

const BrandSelect = observer(({ selected }) => {
    const { product } = useContext(Context);

    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        fetchBrands().then(data => {
            product.setBrands(data.rows)

            let defaultBrandId = data.rows[0].id;

            if (selected) {
                defaultBrandId = selected;
            }

            console.log('id: ', data.rows[0])

            if (defaultBrandId) {
                setSelectedBrand(defaultBrandId);
                product.setSelectedBrand(defaultBrandId);
            } else {
                setSelectedBrand('');
                product.setSelectedBrand(null);
            }
        });
    }, [selected]);

    const [value, setValue] = useState('');


    const addBrand = () => {
        if (value) {
            createBrand({ name: value }).then(newBrand => {
                product.setBrands([...product.brands, newBrand]);
                setSelectedBrand(newBrand.id);
                product.setSelectedBrand(newBrand.id)
                setValue('')
            })
        } else {
            console.log('rej')
        }
    }

    return (
        <div className="form__group">
            <label className="form__group-label">
                Бренд
            </label>
            <select
                className="form__group-select"
                value={selectedBrand}
                onChange={e => {
                    setSelectedBrand(e.target.value)
                    product.setSelectedBrand(e.target.value)
                }}
                required
            >
                {product.brands.map(brand =>
                    <BrandSelectItem key={brand.id} brand={brand} />
                )}
            </select>
            <div className="form__group-new">
                <input
                    type="text"
                    className="form__group-input"
                    placeholder="Новый бренд"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="button" onClick={addBrand}>Создать</button>
            </div>
        </div>
    );
})

export default BrandSelect;