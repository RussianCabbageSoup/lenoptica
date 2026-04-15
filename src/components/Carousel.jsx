import React from "react";
import { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import glassImg from "../images/png/glass.png";
import prevBtn from "../images/control/Arrow1.svg";
import nextBtn from "../images/control/Arrow2.svg";
import doneIco from "../images/icons/done.svg";
import awardIco from "../images/icons/award.svg";

function Carousel() {
    useEffect(() => {
        const swiper = new Swiper('.Carousel', {
            slidesPerView: 2.5,
            centeredSlides: true, 
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            breakpoints: {
                850: { slidesPerView: 4 },
                1024: { slidesPerView: 1.5 },
                1025: { slidesPerView: 2.5 }
            },
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <section className="carousel">
            <div className="container">
                <div className="carousel__inner">
                    <div className="swiper Carousel">
                        <div className="swiper-wrapper">
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 1</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 2</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 3</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 4</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 5</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 6</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 7</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                            <a className="swiper-slide" href="#">
                                <div className="slide__img">
                                    <img src={glassImg} alt="glass" />
                                </div>
                                <div className="slide__content">
                                    <div className="slide__content-title">Название 8</div>
                                    <div className="slide__content-price">Цена</div>
                                </div>
                            </a>
                        </div>
                        <div className="swiper-pagination" />
                        <div className="swiper__buttons-box">
                            <div className="swiper-button-prev">
                                <img src={prevBtn} alt="left" />
                            </div>
                            <div className="swiper-button-next">
                                <img src={nextBtn} alt="right" />
                            </div>
                        </div>
                    </div>
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