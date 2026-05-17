import React, { useContext, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands } from "../http/brandAPI";
import { fetchTypes } from "../http/typeAPI";

const ProductPage = observer(() => {

    const {product} = useContext(Context);

    const [currentProduct, setCurrentProduct] = useState({info: []});
    const {id} = useParams()
    
    useEffect(() => {
        fetchSingleProduct(id).then(data => setCurrentProduct(data))  
        fetchBrands().then(data => product.setBrands(data.rows))
        fetchTypes().then(data => product.setTypes(data.rows))
    }, [])

    console.log(product.types)

    const brandName = product.brands.find(b => b.id === currentProduct.brandId)?.name || 'Не указан';
    const typeName = product.types.find(t => t.id === currentProduct.typeId)?.name || 'Не указан';

    console.log(brandName, typeName)

    return (   
        <div className="wrapper">
            <Header />
            <section className="product-page">
                <div className="container w1">
                    <div className="product-detail">
                        <div className="product-detail__inner">
                            <div className="product-detail__gallery">
                                <div className="product-detail__main-img">
                                    <img src={process.env.REACT_APP_API_URL + currentProduct?.img} alt={currentProduct?.name} />
                                </div>
                            </div>
                            <div className="product-detail__info">
                                <div className="product-detail__brand">{brandName}</div>
                                <h1 className="product-detail__title">{currentProduct.name}</h1>
                                <div className="product-detail__price">
                                    <span className="price-current">{currentProduct?.price} ₽</span>
                                    <span className="price-old">36 900 ₽</span>
                                </div>
                                <div className="product-detail__desc">
                                    {currentProduct.description}
                                </div>
                                <ul className="product-detail__features">
                                    <li>Бренд: {brandName}</li>
                                    <li>Тип: {typeName}</li>
                                </ul>
                                <div className="product-detail__actions">
                                    <button className="button">Добавить в корзину</button>
                                    <button className="button">В избранное</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
})

export default ProductPage;