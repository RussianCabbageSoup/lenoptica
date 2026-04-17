import React from "react";
import typeIco from "../images/icons/type.svg";

function TypeFilter() {
    return (
        <div className="filter__type">
            <div className="filter__type-title">
                <div className="filter__title-ico">
                    <img src={typeIco} />
                </div>
                <div className="filter__title-text">Тип</div>
            </div>
            <ul className="filter__type-list">
                <li className="filter__type-item">
                    <label className="filter__type-checkbox">
                        <input type="checkbox" name="type" defaultValue="default" /> Default
                    </label>
                </li>
                <li className="filter__type-item">
                    <label className="filter__type-checkbox">
                        <input type="checkbox" name="type" defaultValue="default" /> Default
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default TypeFilter;