import React from "react";
import glass from "../images/png/glass.png";

function ProductCard() {
    return (
        <div className="products__grid-card">
            <a className="products__card-inner" href="#">
                <div className="card__img-box">
                    <img src={glass} alt="Очки" />
                    <div className="card__img-tag">Хит продаж</div>
                </div>
            </a><div className="card__content"><a classname="products__card-inner" href="#">
                <div className="card__content-brand">RaY-bAN</div>
                <div className="card__content-model">Clubmaster RB3016</div>
                <div className="card__content-prices">
                    <div className="card__prices-current">15750 ₽</div>
                    <div className="card__prices-old">36 900 ₽</div>
                </div>
            </a><div className="card__content-button"><a classname="products__card-inner" href="#">
            </a><a className="card__button-btn" href="#">
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;