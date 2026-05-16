import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import editIco from "../../../images/control/edit.svg";
import BrandSelect from "../select/BrandSelect";
import TypeSelect from "../select/TypeSelect";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import { fetchProducts, updateProduct } from "../../../http/productAPI";

const ControlEditProduct = observer(() => {

    const { product } = useContext(Context);

    const [selectedProduct, setSelectedProduct] = useState({})

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');

    const handleFileChange = (e) => {
        const Tfile = e.target.files[0];
        setFile(Tfile);
        setFileName(Tfile ? Tfile.name : "");
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const refreshProducts = useCallback(async () => {
        try {
            const data = await fetchProducts(null, null, null, null);
            product.setProducts(data.rows);
            product.setTotalCount(data.count);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [product]);

    const editProduct = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData()

            formData.append('name', name);
            formData.append('price', price);
            formData.append('quantity', quantity);
            formData.append('description', description);
            formData.append('brandId', product.selectedBrand);
            formData.append('typeId', product.selectedType);
            formData.append('img', file);

            const data = await updateProduct(formData, selectedProduct.id);
            console.log('Товар обновлен:', data);

            setName('');
            setPrice(0);
            setQuantity(0);
            setDescription('');
            setFile(null);
            setFileName('');

            await refreshProducts();

        } catch (error) {
            console.error('Ошибка при добавлении товара:', error);
        }
    }

    useEffect(() => {
        if (selectedProduct && selectedProduct.id) {
            setName(selectedProduct.name || '');
            setPrice(selectedProduct.price || 0);
            setQuantity(selectedProduct.quantity || 0);
            setDescription(selectedProduct.description || '');
        }
    }, [selectedProduct]);

    useEffect(() => {
        setSelectedProduct(product.selectedProduct)
    }, [product.selectedProduct])

    return (
        <div className="control__edit">
            <div className="control__title">
                <img src={editIco} alt="" />
                <h2>Редактирование товара</h2>
            </div>
            <form className="control__form" onSubmit={editProduct}>
                <div className="form__group">
                    <label className="form__group-label">
                        Название товара
                    </label>
                    <input
                        type="text"
                        className="form__group-input"
                        placeholder="Введите название"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>
                <TypeSelect selected={selectedProduct.typeId} />
                <BrandSelect selected={selectedProduct.brandId} />
                <div className="form__group">
                    <label className="form__group-label">
                        Цена (₽)
                    </label>
                    <input
                        type="number"
                        className="form__group-input"
                        placeholder={0.00}
                        step={10.00}
                        required
                        min={0}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
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
                        required
                        min={0}
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                </div>
                <div className="form__group">
                    <label className="form__group-label">
                        Описание
                    </label>
                    <textarea
                        className="form__group-textarea"
                        placeholder="Описание товара"
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
})

export default ControlEditProduct;