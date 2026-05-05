import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../http/productAPI";
import { observer } from "mobx-react-lite";

const ProductPage = observer(() => {

    const [product, setProduct] = useState({info: []});
    const {id} = useParams()
    
    useEffect(() => {
        fetchSingleProduct(id).then(data => setProduct(data))  
    }, [])

    return (
        <div>
            <Header />
            <section className="product-page">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-detail__inner">
                            <div className="product-detail__gallery">
                                <div className="product-detail__main-img">
                                    <img src={process.env.REACT_APP_API_URL + product?.img} alt={product?.name} />
                                </div>
                            </div>
                            <div className="product-detail__info">
                                <div className="product-detail__brand">RAY-BAN</div>
                                <h1 className="product-detail__title">Clubmaster RB3016<br />Классический стиль</h1>
                                <div className="product-detail__price">
                                    <span className="price-current">{product?.price} ₽</span>
                                    <span className="price-old">36 900 ₽</span>
                                </div>
                                <div className="product-detail__desc">
                                    Легендарная модель Clubmaster с эффектом винтажного стиля. Верхняя линия выполнена из металла,
                                    оправа — из высококачественного ацетата. Линзы с защитой от UV400, антибликовым покрытием
                                    и фильтром синего света. Идеальны для повседневной носки и делового образа.
                                </div>
                                <ul className="product-detail__features">
                                    <li>Бренд: RRRR</li>
                                    <li>Модель: DDD</li>
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