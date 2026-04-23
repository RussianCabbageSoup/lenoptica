import React from "react";

function TypeFilterItem(props) {
    return (
        <li className="filter__type-item">
            <label className="filter__type-checkbox">
                <input type="checkbox" name="type" defaultValue="default" /> {props.type}
            </label>
        </li>
    );
}

export default TypeFilterItem;