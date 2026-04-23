import React, { useContext } from "react";
import tagIco from "../../images/icons/tag.svg";
import BrandFilterItem from "./BrandFilterItem";
import { Context } from "../../index";

function BrandFilter() {
    const {product} = useContext(Context);
    return (
        <div className="filter__brand">
            <div className="filter__brand-title">
                <div className="filter__title-ico">
                    <img src={tagIco} />
                </div>
                <div className="filter__title-text">Бренд</div>
            </div>
            <ul className="filter__brand-list">
                {product.brands.map(brand => 
                    <BrandFilterItem
                        key={brand.id} 
                        brand={brand.name}
                    />
                )}
            </ul>
        </div>
    );
}

export default BrandFilter;