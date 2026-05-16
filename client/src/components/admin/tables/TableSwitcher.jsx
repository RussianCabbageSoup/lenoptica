import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import ProductTable from "./ProductTable";
import UserTable from "./UserTable";
import BrandTable from "./BrandTable";
import TypeTable from "./TypeTable";
import { Context } from "../../../index";
import { TABLE_TYPES } from "../../../const/TableTypes";

const TableSwitcher = observer(() => {

    const { product } = useContext(Context);
    const selectedTable = product.selectedTable

    switch (selectedTable) {
        case TABLE_TYPES.PRODUCTS:
            return (
                <ProductTable />
            )
        case TABLE_TYPES.USERS:
            return (
                <UserTable />
            )
        case TABLE_TYPES.BRANDS: 
            return (
                <BrandTable />
            )
        case TABLE_TYPES.TYPES:
            return (
                <TypeTable />
            )
        default:
            return (
                <ProductTable />
            )
    }
})

export default TableSwitcher;