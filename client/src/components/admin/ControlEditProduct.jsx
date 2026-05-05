import React from "react";
import editIco from "../../images/control/edit.svg";
import BrandSelect from "./BrandSelect";
import TypeSelect from "./TypeSelect";

function ControlEditProduct() {
    return (
        <div className="control__edit">
            <div className="control__title">
                <img src={editIco} alt="" />
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
    );
}

export default ControlEditProduct;