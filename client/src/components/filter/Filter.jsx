import React from "react";
import BrandFilter from "./BrandFilter";
import TypeFilter from "./TypeFilter";
import CostFilter from "./CostFilter";

function Filter() {
    return (
        <aside className="filter">
            <div className="filter__inner">
                <BrandFilter />
                <TypeFilter />
                <CostFilter />
                <div className="filter__button">
                    <div className="filter__button-btn button">Применить</div>
                </div>
            </div>
        </aside>
    );
}

export default Filter;