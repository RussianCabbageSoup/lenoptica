import React from "react";
import doctorIco from "../images/icons/doctorsvg.svg";
import calendIco from "../images/icons/calend.svg";
import shieldIco from "../images/icons/shield_icon.svg";
import phoneIco from "../images/icons/phone.svg";
import maxIco from "../images/icons/Max_logo_black-512x512.png";
import mailIco from "../images/icons/mail.svg";

function Appointment() {
    return (
        <section className="appointment">
            <div className="container">
                <div className="appointment__inner">
                    <div className="appointment__content">
                        <div className="appointment__content-subtitle subtitle">
                            <span />
                            Онлайн-запись 24/7
                        </div>
                        <h2 className="appointment__content-title title">
                            Запишитесь к врачу <span>без очередей</span>
                        </h2>
                        <div className="appointment__content-line" />
                        <div className="appointment__content-text">
                            Опытные специалисты, cовременное оборудование и комфортные условия. Выберите удобный
                            способ связи, и мы подберем лучшее время для вашего визита.
                        </div>
                        <ul className="appointment__content-icons">
                            <li className="appointment__icons-item">
                                <img src={doctorIco} />
                            </li>
                            <li className="appointment__icons-item">
                                <img src={calendIco} />
                            </li>
                            <li className="appointment__icons-item">
                                <img src={shieldIco} />
                            </li>
                        </ul>
                    </div>
                    <div className="appointment__contacts">
                        <h3 className="appointment__contacts-title">Как записаться?</h3>
                        <h4 className="appointment__contacts-subtitle">Выберите удобный вариант — мы всё организуем</h4>
                        <ul className="appointment__contacts-list">
                            <li className="appointment__contacts-item">
                                <div className="appointment__contacts-img">
                                    <img src={phoneIco} />
                                </div>
                                <div className="appointment__item-text">
                                    <div className="appointment__text-key">Позвоните нам</div>
                                    <div className="appointment__text-value">+0 (000) 000-00-00</div>
                                </div>
                            </li>
                            <li className="appointment__contacts-item">
                                <div className="appointment__contacts-img">
                                    <img src={maxIco} />
                                </div>
                                <div className="appointment__item-text">
                                    <div className="appointment__text-key">Max</div>
                                    <div className="appointment__text-value">Напишите в мессенджер</div>
                                </div>
                            </li>
                            <li className="appointment__contacts-item">
                                <div className="appointment__contacts-img">
                                    <img src={mailIco} />
                                </div>
                                <div className="appointment__item-text">
                                    <div className="appointment__text-key">Электронная почта</div>
                                    <div className="appointment__text-value">mail@mail.ru</div>
                                </div>
                            </li>
                        </ul>
                        <div className="appointment__contacts-button">
                            <a href="#" className="appointment__button-btn button">
                                Заказать обратный звонок
                            </a>
                            <p className="appointment__button-time">Работаем ежедневно с 8:00 до 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Appointment;