import React from "react";
import { useState, useEffect, useRef } from "react";
import photo from "../images/png/about.png";
import photo2 from "../images/png/header-img.png";
import starIco from "../images/icons/star.svg";
import glassIco from "../images/icons/glassesoutline_118407.svg";
import personIco from "../images/icons/person_110935.svg";

function About() {
    const [currentImage, setCurrentImage] = useState(photo);
    const imgRef = useRef(null);

    useEffect(() => {
        const updateImage = () => {
            setCurrentImage(window.innerWidth <= 750 ? photo2 : photo);
        };

        updateImage(); // Устанавливаем начальное значение

        window.addEventListener('resize', updateImage);

        // Очистка слушателя
        return () => {
            window.removeEventListener('resize', updateImage);
        };
    }, []);

    return (
        <section className="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__images">
                        <div className="about__images-img">
                            <img 
                                ref={imgRef}
                                src={currentImage} 
                                alt="салон оптики" 
                            />
                            <img src={photo} alt="салон оптики" />
                        </div>
                        <div className="about__images-experience">
                            <div className="about__experience-num">19+</div>
                            <div className="about__experience-text">лет безупречной<br />работы</div>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__content-subtitle subtitle">О нас</div>
                        <h2 className="about__content-title title">
                            Забота о вашем зрении —
                            наша <span>главная миссия</span>
                        </h2>
                        <div className="about__content-text">
                            Сочетание передовых технологий диагностики и авторского
                            дизайна оправ.
                        </div>
                        <ul className="about__content-list">
                            <li className="about__list-item">
                                <div className="about__item-ico">
                                    <img src={starIco} />
                                </div>
                                <div className="about__item-text">
                                    <div className="about__item-key">Точная диагностика</div>
                                    <div className="about__item-value">
                                        Современное оборудование от Zeiss и Nidek для
                                        проверки зрения с точностью до 0.1 диоптрии.</div>
                                </div>
                            </li>
                            <li className="about__list-item">
                                <div className="about__item-ico">
                                    <img src={glassIco} />
                                </div>
                                <div className="about__item-text">
                                    <div className="about__item-key">Только лицензированные бренды</div>
                                    <div className="about__item-value">
                                        Ray-Ban, Polaroid, Gucci, Lindberg и другие мировые бренды с гарантией
                                        подлинности.
                                    </div>
                                </div>
                            </li>
                            <li className="about__list-item">
                                <div className="about__item-ico">
                                    <img src={personIco} />
                                </div>
                                <div className="about__item-text">
                                    <div className="about__item-key">Индивидуальный подход</div>
                                    <div className="about__item-value">
                                        Поможем подобрать линзы и оправу, учитывая образ жизни, род занятий и форму
                                        лица.
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="about__content-separate" />
                        <ul className="about__content-achievements">
                            <li className="about__achievements-item">
                                <div className="about__item-stat">
                                    <div className="about__stat-number">40000+</div>
                                    <div className="about__stat-text">выполненных заказов</div>
                                </div>
                            </li>
                            <li className="about__achievements-item">
                                <div className="about__item-stat">
                                    <div className="about__stat-number">1000+</div>
                                    <div className="about__stat-text">моделей оправ</div>
                                </div>
                            </li>
                            <li className="about__achievements-item">
                                <div className="about__item-stat">
                                    <div className="about__stat-number">24ч</div>
                                    <div className="about__stat-text">изготовление сложных линз</div>
                                </div>
                            </li>
                        </ul>
                        <div className="about__content-button">
                            <a href="#" className="about__button-btn button">
                                Узнать больше о нас
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;