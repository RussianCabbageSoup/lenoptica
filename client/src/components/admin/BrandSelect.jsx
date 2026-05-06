import React, { useContext, useEffect, useState } from "react";
import BrandSelectItem from "./BrandSelectItem";
import { Context } from "../../index";
import { createBrand, fetchBrands } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const BrandSelect = observer(() => {
    const { product } = useContext(Context);

    const [selectedBrand, setSelectedBrand] = useState('');

    useEffect(() => {
        fetchBrands().then(data => {
            product.setBrands(data)
            if (data && data.length > 0) {
                setSelectedBrand(data[0].id)
                product.setSelectedBrand(data[0].id)
            } else {
                setSelectedBrand('')
                product.setSelectedBrand(null)
            }
        });
    }, []);

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