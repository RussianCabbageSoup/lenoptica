import React from "react";
import { observer } from "mobx-react-lite";
import SearchAdmin from "./search/SearchAdmin";
import TableSelect from "./tables/TableSelect";
import TableSwitcher from "./tables/TableSwitcher";
import ControlProduct from "./controls/ControlProduct";

const Admin = observer(() => {

    return (
        <div className="admin">
            <div className="container">
                <div className="admin__dashboard">
                    <h2 className="dashboard__title title">Панель администратора</h2>
                    <TableSelect />
                    <SearchAdmin />
                    <div className="dashboard__list">
                        <TableSwitcher />
                    </div>
                </div>
                <ControlProduct />
            </div>
        </div>
    );
})

export default Admin;