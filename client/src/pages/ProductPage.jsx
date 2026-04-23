import React from "react";
import imgs from '../images/png/glass.png';

function ProductPage() {

    const product = 
        { id: 1, name: 'Очки 1', price: 1000, rating: 5, img: imgs }

    return (
        <section className="product-page">
            <div className="container">
                <div className="product-detail">
                    <div className="product-detail__inner">
                        <div className="product-detail__gallery">
                            <div className="product-detail__main-img">
                                <img src={product.img} alt />
                            </div>
                        </div>
                        <div className="product-detail__info">
                            <div className="product-detail__brand">RAY-BAN</div>
                            <h1 className="product-detail__title">Clubmaster RB3016<br />Классический стиль</h1>
                            <div className="product-detail__price">
                                <span className="price-current">{product.price} ₽</span>
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

    );
}

export default ProductPage;