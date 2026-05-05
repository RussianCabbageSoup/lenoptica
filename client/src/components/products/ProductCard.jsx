import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({product}) {
    const navigate = useNavigate();

    const handleProductClick = (e) => {
        e.preventDefault();
        navigate(`/products/${product.id}`);
    };

    return (
        <div className="products__grid-card">
            <div className="products__card-inner" onClick={handleProductClick}>
                <div className="card__img-box">
                    <img src={process.env.REACT_APP_API_URL + product.img} alt="Очки" />
                    <div className="card__img-tag">Хит продаж</div>
                </div>
                <div className="card__content">
                    <div className="card__content-brand">RaY-bAN</div>
                    <div className="card__content-model">{product.name}</div>
                    <div className="card__content-prices">
                        <div className="card__prices-current">{product.price} ₽</div>
                        <div className="card__prices-old">36 900 ₽</div>
                    </div>
                    <div className="card__content-button">
                        <button className="card__button-btn" >
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;