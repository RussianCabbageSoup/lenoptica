import React from "react";
import BrandFilter from "./BrandFilter";
import TypeFilter from "./TypeFilter";
import CostFilter from "./CostFilter";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const Filter = observer(() => {

    const {product} = useContext(Context);

    const filter = () => {
        product.setSelectedBrand({});
        product.setSelectedType({});
        product.setMinPrice('');
        product.setMaxPrice('');
    }

    return (
        <aside className="filter">
            <div className="filter__inner">
                <BrandFilter />
                <TypeFilter />
                <CostFilter />
                <div className="filter__button">
                    <div className="filter__button-btn button" onClick={filter}>Сбросить</div>
                </div>
            </div>
        </aside>
    );
})

export default Filter;