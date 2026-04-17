import React from "react";
import rubleIco from "../images/icons/ruble.svg";

function CostFilter() {
    return (
        <div className="filter__cost">
            <div className="filter__cost-title">
                <div className="filter__title-ico">
                    <img src={rubleIco} />
                </div>
                <div className="filter__title-text">Цена</div>
            </div>
            <div className="filter__cost-inputs">
                <input type="number" placeholder="от" />
                <input type="number" placeholder="до" />
            </div>
        </div>
    );
}

export default CostFilter;