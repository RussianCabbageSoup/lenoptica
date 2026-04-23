import React from "react";

function BrandFilterItem(props) {
    return (
        <li className="filter__brand-item">
            <label className="filter__brand-checkbox">
                <input type="checkbox" name="brand" defaultValue="ray-ban" /> {props.brand}
            </label>
        </li>
    );
}

export default BrandFilterItem;