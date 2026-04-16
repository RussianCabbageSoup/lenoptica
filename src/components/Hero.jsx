import React from "react";
import img from "../images/png/season.png";

function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <div className="hero__content-subtitle subtitle">Коллекция весна-лето 2026</div>
                        <h2 className="hero__content-title title">
                            Идеальные очки
                            для вашего стиля
                        </h2>
                        <div className="hero__content-text">
                            Титановые оправы, качественная оптика и трендовые модели от европейских дизайнеров.
                        </div>
                        <div className="hero__content-button">
                            <a className="hero__button-btn button" href="#">
                                Смотреть новинки
                            </a>
                        </div>
                    </div>
                    <div className="hero__img">
                        <div className="hero__img-box">
                            <img src={img} alt />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;