import React, { useContext, useEffect } from "react";
import tagIco from "../../images/icons/tag.svg";
import BrandFilterItem from "./BrandFilterItem";
import { Context } from "../../index";
import { fetchBrands } from "../../http/productAPI";
import { observer } from "mobx-react-lite";

const BrandFilter = observer(() => {

    const {product} = useContext(Context);

    useEffect(() => {
        fetchBrands().then(data => product.setBrands(data.rows));
    }, []);

    return (
        <div className="filter__brand">
            <div className="filter__brand-title">
                <div className="filter__title-ico">
                    <img src={tagIco} alt="" />
                </div>
                <div className="filter__title-text">Бренд</div>
            </div>
            <ul className="filter__brand-list">
                {product.brands.map(brand => 
                    <BrandFilterItem
                        key={brand.id} 
                        brand={brand}
                    />
                )}
            </ul>
        </div>
    );
})

export default BrandFilter;