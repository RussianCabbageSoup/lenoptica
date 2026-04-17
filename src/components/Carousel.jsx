import React from "react";
import doneIco from "../images/icons/done.svg";
import awardIco from "../images/icons/award.svg";
import CarouselSlides from "./CarouselSlides";

function Carousel() {
    return (
        <section className="carousel">
            <div className="container">
                <div className="carousel__inner">
                    <CarouselSlides />
                    <div className="carousel__content">
                        <div className="carousel__content-subtitle subtitle">лучшее</div>
                        <h2 className="carousel__content-title title">Лидеры продаж за <span>всё время</span></h2>
                        <div className="carousel__content-ico">
                            <div className="carousel__ico-item">
                                <img src={doneIco} />
                            </div>
                            <div className="carousel__ico-item">
                                <img src={awardIco} />
                            </div>
                        </div>
                        <div className="carousel__content-text">
                            <p>
                                Другие уже выбрали лучшее для себя. Присоединяйтесь к большинству довольных
                                покупателей!
                            </p>
                        </div>
                        <div className="carousel__content-button">
                            <a href="#" className="carousel__button-btn button">Узнать больше</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;