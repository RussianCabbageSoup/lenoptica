import React from "react";
import searchIco from "../../images/control/magnifier.svg";
import ProductTable from "./ProductTable";
import ControlNewProduct from "./ControlNewProduct";
import ControlEditProduct from "./ControlEditProduct";

function Admin() {
    return (
        <div className="container">
            <div className="admin">
                <div className="admin__dashboard">
                    <h2 className="dashboard__title title">Панель администратора</h2>
                    <div className="dashboard__buttons">
                        <div className="dashboard__buttons-btn">Товары</div>
                        <div className="dashboard__buttons-btn">Пользователи</div>
                    </div>
                    <div className="dashboard__list-header">
                        <h3>Список товаров</h3>
                        <form className="list__header-search">
                            <img src={searchIco} alt=""/>
                            <input type="text" placeholder="Поиск по названию, типу, бренду" />
                        </form>
                    </div>
                    <div className="dashboard__list-header" style={{ opacity: '0.3' }}>
                        <h3>Список пользователей</h3>
                        <form className="list__header-search">
                            <img src={searchIco} alt="" />
                            <input type="text" placeholder="Поиск по имени, почте, роли" />
                        </form>
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
}

export default Admin;