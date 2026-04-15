import React from "react";
import giftIco from "../images/icons/gift.svg";
import consultationIco from "../images/icons/consultation.svg";
import shieldIco from "../images/icons/shield.svg";
import picture from "../images/png/season.png";

function SeasonalSection() {
    return (
        <section className="seasonal">
            <div className="seasonal__inner">
                <div className="container">
                    <div className="seasonal__inner">
                        <div className="seasonal__content">
                            <div className="seasonal__content-subtitle subtitle">весна 2026</div>
                            <h2 className="seasonal__content-title title">
                                Солнцезащитные очки
                                со <span>скидкой до 40%</span>
                            </h2>
                            <div className="seasonal__content-promotion">
                                Только весной — эксклюзивная коллекция премиальных оправ и линз с поляризацией.
                                Защита
                                от UV400 и стильный образ для города и пляжа.
                            </div>
                            <ul className="seasonal__promotion-list">
                                <li className="seasonal__promotion-item">
                                    <img src={giftIco} />
                                    Поляризационные линзы в подарок
                                </li>
                                <li className="seasonal__promotion-item">
                                    <img src={consultationIco} />
                                    Консультация врача
                                </li>
                                <li className="seasonal__promotion-item">
                                    <img src={shieldIco} />
                                    Защита от ультрафиолета 100% UV400
                                </li>
                            </ul>
                            <div className="seasonal__button-box">
                                <a href="#" className="seasonal__button-btn button">Выбрать модель</a>
                            </div>
                        </div>
                        <div className="seasonal__img">
                            <div className="seasonal__img-box">
                                <img src={picture} alt="season-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeasonalSection;