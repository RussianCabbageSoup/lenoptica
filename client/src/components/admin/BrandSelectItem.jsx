import React from "react";

function BrandSelectItem({brand}) {
    return (
        <option value={brand.name}>{brand.name}</option>
    );
}

export default BrandSelectItem;