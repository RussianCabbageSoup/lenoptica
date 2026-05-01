import React from "react";
import searchIco from "../../images/control/magnifier.svg";
import editIco from "../../images/control/edit.svg";
import deleteIco from "../../images/control/delete.svg";
import plusIco from "../../images/icons/1486395885-plus_80605.svg";

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
                            <tbody>
                                <tr>
                                    <td>Товар 1</td>
                                    <td>Тип 1</td>
                                    <td>Бренд 1</td>
                                    <td>Цена</td>
                                    <td>Наличие</td>
                                    <td className="table__buttons">
                                        <img src={editIco} alt="редактировать" />
                                        <img src={deleteIco} alt="удалить" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Т1</td>
                                    <td>Тип уацфффффффф1</td>
                                    <td>Бренд 1</td>
                                    <td>Цеауцффна</td>
                                    <td>Наличие</td>
                                    <td>
                                        <img src={editIco} alt="редактировать" />
                                        <img src={deleteIco} alt="удалить" />
                                    </td>
                                </tr>
                            </tbody>
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
                            <div className="form__group">
                                <label className="form__group-label">
                                    Тип
                                </label>
                                <select className="form__group-select" required>
                                    <option value="type1">тип 1</option>
                                    <option value="type2">тип 2</option>
                                    <option value="type3">тип 3</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Бренд
                                </label>
                                <select className="form__group-select" required>
                                    <option value="type1">ыы 1</option>
                                    <option value="type2">тип 2</option>
                                    <option value="type3">тип 3</option>
                                </select>
                            </div>
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
                            <div className="form__group">
                                <label className="form__group-label">
                                    Тип
                                </label>
                                <select className="form__group-select" required>
                                    <option value="type1">тип 1</option>
                                    <option value="type2">тип 2</option>
                                    <option value="type3">тип 3</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__group-label">
                                    Бренд
                                </label>
                                <select className="form__group-select" required>
                                    <option value="type1">ыы 1</option>
                                    <option value="type2">тип 2</option>
                                    <option value="type3">тип 3</option>
                                </select>
                            </div>
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