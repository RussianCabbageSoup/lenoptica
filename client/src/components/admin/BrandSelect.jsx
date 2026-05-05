import React, { useContext, useEffect } from "react";
import BrandSelectItem from "./BrandSelectItem";
import { Context } from "../../index";
import { fetchBrands } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const BrandSelect = observer(() => {
    const { product } = useContext(Context);

    useEffect(() => {
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    return (
        <div className="form__group">
            <label className="form__group-label">
                Бренд
            </label>
            <select className="form__group-select" required>
                {product.brands.map(brand =>
                    <BrandSelectItem key={brand.id} brand={brand} />
                )}
            </select>
        </div>
    );
})

export default BrandSelect;