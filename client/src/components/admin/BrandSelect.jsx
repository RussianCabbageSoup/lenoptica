import React, { useContext } from "react";
import BrandSelectItem from "./BrandSelectItem";
import { Context } from "../../index";

function BrandSelect() {
    const {product} = useContext(Context);

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
}

export default BrandSelect;