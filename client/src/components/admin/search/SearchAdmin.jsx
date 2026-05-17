import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../../index";
import ProductSearch from "./ProductSearch";
import { TABLE_TYPES } from "../../../const/TableTypes";
import UserSearch from "./UserSearch";
import BrandSearch from "./BrandSearch";
import TypeSearch from "./TypeSearch";

const SearchAdmin = observer(() => {

    const { product } = useContext(Context);
    const selectedTable = product.selectedTable

    switch (selectedTable) {                       
        case TABLE_TYPES.PRODUCTS:
            return (
                <ProductSearch />
            )
        case TABLE_TYPES.USERS:
            return (
                <UserSearch />
            )
        case TABLE_TYPES.BRANDS: 
            return (
                <BrandSearch />
            )
        case TABLE_TYPES.TYPES:
            return (
                <TypeSearch />
            )
        default:
            return (
                <ProductSearch />
            )
    }
})

export default SearchAdmin;