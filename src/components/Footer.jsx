import React from "react";
import myLogo from "../images/logo/logo.svg";
import telegramIco from "../images/icons/telegram_logo_icon_144811.svg";
import vkIco from "../images/icons/VK.svg";
import maxIco from "../images/icons/Max_logo_black-512x512.png";
import phoneIco from "../images/icons/phone.svg";
import mailIco from "../images/icons/mail.svg";
import pinIco from "../images/icons/pin.svg";
import submitIco from "../images/control/Arrow2.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top-about">
                            <a className="footer__about-logo" href="#">
                                <img src={myLogo} />
                                <span>ЛенОптика</span>
                            </a>
                            <p className="footer__about-text">
                                Салон оптики с 18-летней историей.
                                Помогаем видеть мир ярче и чётче.
                            </p>
                            <div className="footer__about-icons">
                                <a href="#" className="footer__about-link">
                                    <img src={telegramIco} />
                                </a>
                                <a href="#" className="footer__about-link">
                                    <img src={maxIco} />
                                </a>
                                <a href="#" className="footer__about-link">
                                    <img src={vkIco} />
                                </a>
                            </div>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Информация</div>
                            <ul className="footer__col-list">
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">О компании</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Запись на приём</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Возврат и обмен</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Политика конфиденциальности</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Каталог</div>
                            <ul className="footer__col-list">
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Солнцезащитные очки</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Корригирующие очки</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Линзы</a>
                                </li>
                                <li className="footer__list-item">
                                    <a className="footer__list-link" href="#">Аксессуары</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Контакты</div>
                            <ul className="footer__col-list">
                                <li className="footer__list-item">
                                    <img src={phoneIco} />
                                    +0 (000) 000-00-00
                                </li>
                                <li className="footer__list-item">
                                    <img src={mailIco} />
                                    mail@mail.ru
                                </li>
                                <li className="footer__list-item">
                                    <img src={pinIco} />
                                    СПб, Приморский пр. 72
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-subscription">
                            <div className="footer__col-title">Будьте в курсе</div>
                            <p className="footer__subscription-text">
                                Подпишитесь на новости и получите скидку 5% на первый заказ
                            </p>
                            <form className="footer__subscription-form">
                                <input type="email" placeholder="Ваш E-mail" />
                                <button type="submit">
                                    <img src={submitIco} alt="Отправить" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        © 2026 ЛенОптика. Все права защищены.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;