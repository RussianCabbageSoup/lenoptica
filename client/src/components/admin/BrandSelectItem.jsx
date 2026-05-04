import React from "react";

function BrandSelectItem({brand}) {
    return (
        <select className="form__group-select" required>
            <option value={brand.name}>{brand.name}</option>
        </select>
    );
}

export default BrandSelectItem;