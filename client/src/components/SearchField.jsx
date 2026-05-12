import React, { useContext, useState } from "react";
import searchIco from "../images/control/magnifier.svg";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

function SearchField() {

    const { product } = useContext(Context)

    const navigate = useNavigate('');

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (query.trim()) {
            product.setSearch(query.trim());
        } else {
            product.setSearch(''); 
        }

        navigate('/products')
    }

    return (
        <form className="header__search-form" onSubmit={handleSubmit}>
            <input
                className="header__form-input"
                type="text"
                placeholder="Поиск товаров..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <button className="header__form-btn" type="submit">
                <img src={searchIco} alt="поиск" />
            </button>
        </form>
    );
}

export default SearchField;