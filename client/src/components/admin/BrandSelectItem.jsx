import React from "react";

function BrandSelectItem({brand}) {
    return (
        <option value={brand.id}>{brand.name}</option>
    );
}

export default BrandSelectItem;