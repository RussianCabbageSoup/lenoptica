import React, { useState } from "react";
import ProductTable from "./ProductTable";
import ControlNewProduct from "./ControlNewProduct";
import ControlEditProduct from "./ControlEditProduct";
import { observer } from "mobx-react-lite";
import SearchAdmin from "./SearchAdmin";
import TableSelect from "./TableSelect";

const Admin = observer(() => {

    return (
        <div className="admin">
            <div className="container">
                <div className="admin__dashboard">
                    <h2 className="dashboard__title title">Панель администратора</h2>
                    <TableSelect />
                    <div className="dashboard__list-header">
                        <h3>Список товаров</h3>
                        <SearchAdmin />
                    </div>
                    <div className="dashboard__list">
                        <ProductTable />
                    </div>
                </div>
                <div className="admin__control">
                    <ControlNewProduct />
                    <ControlEditProduct />
                </div>
            </div>
        </div>
    );
})

export default Admin;