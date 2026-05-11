import React, { useContext } from "react";
import rubleIco from "../../images/icons/ruble.svg";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const CostFilter = observer(() => {

    const {product} = useContext(Context);

    return (
        <div className="filter__cost">
            <div className="filter__cost-title">
                <div className="filter__title-ico">
                    <img src={rubleIco} alt="" />
                </div>
                <div className="filter__title-text">Цена</div>
            </div>
            <div className="filter__cost-inputs">
                <input 
                    type="number" 
                    placeholder="от" 
                    min={0}
                    value={product.minPrice}
                    onChange={e => product.setMinPrice(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="до" 
                    min={0}
                    value={product.maxPrice}
                    onChange={e => product.setMaxPrice(e.target.value)}
                />
            </div>
        </div>
    );
})

export default CostFilter;