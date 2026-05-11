import React, { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const BrandFilterItem = observer(({ brand }) => {
    const { product } = useContext(Context);
    
    const isSelected = product.selectedBrand?.id === brand.id;
    
    const handleChange = () => {
        if (isSelected) {
            product.setSelectedBrand({});
        } else {
            product.setSelectedBrand(brand);
        }
    };
    
    return (
        <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
                <input 
                    type="checkbox" 
                    name="brand" 
                    value={brand.id}
                    checked={isSelected}
                    onChange={handleChange}
                /> 
                {brand.name}
            </label>
        </li>
    );
});

export default BrandFilterItem;