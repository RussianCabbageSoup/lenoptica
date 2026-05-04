import React, { useContext } from "react";
import BrandSelectItem from "./BrandSelectItem";
import { Context } from "../../index";

function BrandSelect() {
    const {brand} = useContext(Context);

    return (
        <div className="form__group">
            <label className="form__group-label">
                Бренд
            </label>
            {brand.brands.map(brand =>
                <BrandSelectItem brand={brand} />
            )}
        </div>
    );
}

export default BrandSelect;