import React from "react";
import tagIco from "../images/icons/tag.svg";

function BrandFilter() {
    return (
        <div className="filter__brand">
            <div className="filter__brand-title">
                <div className="filter__title-ico">
                    <img src={tagIco} />
                </div>
                <div className="filter__title-text">Бренд</div>
            </div>
            <ul className="filter__brand-list">
                <li className="filter__brand-item">
                    <label className="filter__brand-checkbox">
                        <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                    </label>
                </li>
                <li className="filter__brand-item">
                    <label className="filter__brand-checkbox">
                        <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                    </label>
                </li>
                <li className="filter__brand-item">
                    <label className="filter__brand-checkbox">
                        <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default BrandFilter;