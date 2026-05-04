import React from "react";
import searchIco from "../../images/control/magnifier.svg";
import editIco from "../../images/control/edit.svg";
import plusIco from "../../images/icons/1486395885-plus_80605.svg";
import BrandSelect from "./BrandSelect";
import TypeSelect from "./TypeSelect";
import ProductTable from "./ProductTable";

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
                            <img src={searchIco} />
                            <input type="text" placeholder="Поиск по названию, типу, бренду" />
                        </form>
                    </div>
                    <div className="dashboard__list-header" style={{ opacity: '0.3' }}>
                        <h3>Список пользователей</h3>
                        <form className="list__header-search">
                            <img src={searchIco} />
                            <input type="text" placeholder="Поиск по имени, почте, роли" />
                        </form>
                    </div>
                    <div className="dashboard__list">
                        <table className="dashboard__table">
                            <thead className="table__head">
                                <tr>
                                    <th>Название</th>
                                    <th>Тип</th>
                                    <th>БрЕнд</th>
                                    <th>цЕна</th>
                                    <th>наЛИЧие</th>
                                    <th />
                                </tr>
                            </thead>
                            <ProductTable />
                        </table>
                    </div>
                </div>
                <div className="admin__control">
                    <div className="control__new">
                        <div className="control__title">
                            <img src={plusIco} alt />
                            <h2>Новый товар</h2>
                        </div>
                        <form className="control__form">
                            <div className="form__group">
                                <label className="form__group-label">
                                    Название товара
                                </label>
                                <input type="text" className="form__group-input" placeholder="Введите название" required />
                            </div>
                            <TypeSelect />
                            <BrandSelect />
                            <div className="form__group">
                                <label className="form__group-label">
                                    Цена (₽)
                                </label>
                                <input type="number" className="form__group-input" placeholder={0.00} step={1.00} required />
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Наличие
                                </label>
                                <input type="number" className="form__group-input" placeholder={0} step={1} required />
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Описание
                                </label>
                                <textarea className="form__group-textarea" placeholder="Описание товара" defaultValue={""} />
                            </div>
                            <button type="submit" className="form__button button">Сохранить</button>
                        </form>
                    </div>
                    <div className="control__edit">
                        <div className="control__title">
                            <img src={editIco} alt />
                            <h2>Редактирование товара</h2>
                        </div>
                        <form className="control__form">
                            <div className="form__group">
                                <label className="form__group-label">
                                    Название товара
                                </label>
                                <input type="text" className="form__group-input" placeholder="Введите название" required />
                            </div>
                            <TypeSelect />
                            <BrandSelect />
                            <div className="form__group">
                                <label className="form__group-label">
                                    Цена (₽)
                                </label>
                                <input type="number" className="form__group-input" placeholder={0.00} step={1.00} required />
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Наличие
                                </label>
                                <input type="number" className="form__group-input" placeholder={0} step={1} required />
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Описание
                                </label>
                                <textarea className="form__group-textarea" placeholder="Описание товара" defaultValue={""} />
                            </div>
                            <button type="submit" className="form__button button">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;