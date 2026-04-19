import React from "react";
import pinIco from "../images/icons/pin.svg";
import clockIco from "../images/icons/clock.svg";
import phoneIco from "../images/icons/phone.svg";
import telegramIco from "../images/icons/telegram_logo_icon_144811.svg";
import arrowIco from "../images/control/Arrow2.svg";
import vkIco from "../images/icons/VK.svg";
import maxIco from "../images/icons/Max_logo_black-512x512.png";
import mailIco from "../images/icons/mail.svg";

function Contacts() {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <div className="contacts__head">
                        <div className="contact__head-subtitle subtitle">контакты</div>
                        <h2 className="contact__head-title title">
                            Остались Вопросы?<br></br>
                            <span>Свяжитесь с нами</span>
                        </h2>
                    </div>
                    <div className="contacts__list">
                        <div className="contacts__list-map">
                            <div className="contacts__map-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.0094555075522!2d30.21112848971814!3d59.98159632127532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696368be588c349%3A0x8c021258c4435546!2z0KLQoNCaINCf0LjRgtC10YDQu9GN0L3QtA!5e0!3m2!1sru!2sru!4v1776111746480!5m2!1sru!2sru" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                            <ul className="contacts__map-info">
                                <li className="contacts__info-item">
                                    <div className="contacts__info-ico">
                                        <img src={pinIco} />
                                    </div>
                                    <div className="contacts__info-text">
                                        Санкт-Петербург, ТРК Питерлэнд, Приморский пр. 72
                                    </div>
                                </li>
                                <li className="contacts__info-item">
                                    <div className="contacts__info-ico">
                                        <img src={clockIco} />
                                    </div>
                                    <div className="contacts__info-text">
                                        Пн–Пт: 10:00 – 20:00
                                    </div>
                                </li>
                                <li className="contacts__info-item">
                                    <div className="contacts__info-ico">
                                        <img src={phoneIco} />
                                    </div>
                                    <div className="contacts__info-text">
                                        +0 (000) 000-00-00
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="contacts__list-wrapper">
                            <div className="contacts__list-form">
                                <div className="contacts__form-title">Напишите нам</div>
                                <form className="contacts__form">
                                    <input className="contacts__form-input" type="text" placeholder="Ваше имя" />
                                    <input className="contacts__form-input" type="email" placeholder="Email" />
                                    <textarea className="contacts__form-textarea" placeholder="Ваше вопрос" defaultValue={""} />
                                    <button className="contacts__form-btn button" type="submit">
                                        Отправить
                                    </button>
                                </form>
                            </div>
                            <div className="contacts__list-social">
                                <div className="contacts__social-title">Мы в соцсетях</div>
                                <ul className="contacts__social-list">
                                    <li className="contacts__social-item">
                                        <div className="contacts__social-ico">
                                            <img src={telegramIco} />
                                        </div>
                                        <div className="contacts__social-name">Telegram</div>
                                        <div className="contacts__social-btn">
                                            <img src={arrowIco} />
                                        </div>
                                    </li>
                                    <li className="contacts__social-item">
                                        <div className="contacts__social-ico">
                                            <img src={vkIco} />
                                        </div>
                                        <div className="contacts__social-name">ВКонтакте</div>
                                        <div className="contacts__social-btn">
                                            <img src={arrowIco} />
                                        </div>
                                    </li>
                                    <li className="contacts__social-item">
                                        <div className="contacts__social-ico">
                                            <img src={maxIco} />
                                        </div>
                                        <div className="contacts__social-name">Max</div>
                                        <div className="contacts__social-btn">
                                            <img src={arrowIco} />
                                        </div>
                                    </li>
                                    <li className="contacts__social-item">
                                        <div className="contacts__social-ico">
                                            <img src={mailIco} />
                                        </div>
                                        <div className="contacts__social-name">Email</div>
                                        <div className="contacts__social-btn">
                                            <img src={arrowIco} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;