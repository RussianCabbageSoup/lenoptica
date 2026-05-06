import React, { useContext, useRef, useState } from "react";
import plusIco from "../../images/icons/1486395885-plus_80605.svg";
import BrandSelect from "./BrandSelect";
import TypeSelect from "./TypeSelect";
import { createProduct } from "../../http/productAPI";
import { Context } from "../../index";

function ControlNewProduct() {

    const {product} = useContext(Context)

    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);                          

    const handleFileChange = (e) => {
        const Tfile = e.target.files[0];
        setFile(Tfile);
        setFileName(Tfile ? Tfile.name : "");
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');

    const addProduct = (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('name', name);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('description', description);
        formData.append('brandId', product.selectedBrand);
        formData.append('typeId', product.selectedType);
        formData.append('img', file);

        createProduct(formData).then(data => {
            console.log(data)
        })
    }

    return (
        <div className="control__new">
            <div className="control__title">
                <img src={plusIco} alt="" />
                <h2>Новый товар</h2>
            </div>
            <form className="control__form" onSubmit={e => addProduct(e)}>
                <div className="form__group">
                    <label className="form__group-label">
                        Название товара
                    </label>
                    <input
                        type="text"
                        className="form__group-input"
                        placeholder="Введите название"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <TypeSelect />
                <BrandSelect />
                <div className="form__group">
                    <label className="form__group-label">
                        Цена (₽)
                    </label>
                    <input
                        type="number"
                        className="form__group-input"
                        placeholder={0.00}
                        step={10.00}
                        min={0}
                        required
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                </div>
                <div className="form__group">
                    <label className="form__group-label">
                        Наличие
                    </label>
                    <input
                        type="number"
                        className="form__group-input"
                        placeholder={0}
                        step={1}
                        min={0}
                        required
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                    />
                </div>
                <div className="form__group">
                    <label className="form__group-label">
                        Описание
                    </label>
                    <textarea
                        className="form__group-textarea"
                        placeholder="Описание товара"
                        defaultValue={""}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
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