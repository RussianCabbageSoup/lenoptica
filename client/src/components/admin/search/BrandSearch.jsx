import { observer } from "mobx-react-lite";
import searchIco from "../../../images/control/magnifier.svg";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../index";

const BrandSearch = observer(() => {

    const { product } = useContext(Context);

    useEffect(() => {
        product.setTableSearch('');
    }, [])

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim()) {
            product.setTableSearch(query.trim());
        } else {
            product.setTableSearch('');
        }
    }

    return (
        <div className="dashboard__list-header">
            <h3>Список брендов</h3>
            <form className="list__header-search" 
                onSubmit={handleSubmit} 
            >
                <img src={searchIco} alt="" />
                <input
                    type="text"
                    placeholder="Поиск по названию"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                />
            </form >
        </div>
    );
})

export default BrandSearch;