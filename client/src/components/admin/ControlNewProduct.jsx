import React, { useRef, useState } from "react";
import plusIco from "../../images/icons/1486395885-plus_80605.svg";
import BrandSelect from "./BrandSelect";
import TypeSelect from "./TypeSelect";

function ControlNewProduct() {
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "");
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="control__new">
            <div className="control__title">
                <img src={plusIco} alt="" />
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
                <div className="form__group">
                    <label className="form__group-label">Изображение</label>
                    <div className="input-group">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleButtonClick}
                        >
                            Выбрать файл
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="d-none"
                            accept=".jpg,.png,.jpeg"
                            required
                            onChange={handleFileChange}
                        />
                        <input
                            type="text"
                            className="form__group-input"
                            readOnly
                            value={fileName || "Файл не выбран"}
                            placeholder="Файл не выбран"
                        />
                    </div>
                </div>
                <button type="submit" className="form__button button">Сохранить</button>
            </form>
        </div>
    );
}

export default ControlNewProduct;