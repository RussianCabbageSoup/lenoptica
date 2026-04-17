import React from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../images/logo/logo.svg";
import telegramIco from "../images/icons/telegram_logo_icon_144811.svg";
import vkIco from "../images/icons/VK.svg";
import maxIco from "../images/icons/Max_logo_black-512x512.png";
import phoneIco from "../images/icons/phone.svg";
import mailIco from "../images/icons/mail.svg";
import pinIco from "../images/icons/pin.svg";
import submitIco from "../images/control/Arrow2.svg";

function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика подписки
        console.log("Подписка на новости");
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__top">
                        <div className="footer__top-about">
                            <Link className="footer__about-logo" to="/">
                                <img src={myLogo} alt="Логотип" />
                                <span>ЛенОптика</span>
                            </Link>
                            <p className="footer__about-text">
                                Салон оптики с 18-летней историей.
                                Помогаем видеть мир ярче и чётче.
                            </p>
                            <div className="footer__about-icons">
                                <a href="https://t.me/lenoptika" target="_blank" rel="noopener noreferrer" className="footer__about-link">
                                    <img src={telegramIco} alt="Telegram" />
                                </a>
                                <a href="https://max.ru/lenoptika" target="_blank" rel="noopener noreferrer" className="footer__about-link">
                                    <img src={maxIco} alt="Max" />
                                </a>
                                <a href="https://vk.com/lenoptika" target="_blank" rel="noopener noreferrer" className="footer__about-link">
                                    <img src={vkIco} alt="VK" />
                                </a>
                            </div>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Информация</div>
                            <ul className="footer__col-list">
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/about"
                                    >
                                        О компании
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/eye-exam"
                                    >
                                        Запись на приём
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/returns"
                                    >
                                        Возврат и обмен
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/privacy-policy"
                                    >
                                        Политика конфиденциальности
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Каталог</div>
                            <ul className="footer__col-list">
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/catalog/sunglasses"
                                    >
                                        Солнцезащитные очки
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/catalog/glasses"
                                    >
                                        Корригирующие очки
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/catalog/lenses"
                                    >
                                        Линзы
                                    </NavLink>
                                </li>
                                <li className="footer__list-item">
                                    <NavLink 
                                        className={({ isActive }) => 
                                            `footer__list-link ${isActive ? 'active-link' : ''}`
                                        } 
                                        to="/catalog/accessories"
                                    >
                                        Аксессуары
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-col">
                            <div className="footer__col-title">Контакты</div>
                            <ul className="footer__col-list" id="colContacts">
                                <li className="footer__list-item">
                                    <img src={phoneIco} alt="Телефон" />
                                    <a href="tel:+70000000000" className="footer__contact-link">
                                        +0 (000) 000-00-00
                                    </a>
                                </li>
                                <li className="footer__list-item">
                                    <img src={mailIco} alt="Email" />
                                    <a href="mailto:mail@mail.ru" className="footer__contact-link">
                                        mail@mail.ru
                                    </a>
                                </li>
                                <li className="footer__list-item">
                                    <img src={pinIco} alt="Адрес" />
                                    <span>СПб, Приморский пр. 72</span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__top-subscription">
                            <div className="footer__col-title">Будьте в курсе</div>
                            <p className="footer__subscription-text">
                                Подпишитесь на новости и получите скидку 5% на первый заказ
                            </p>
                            <form className="footer__subscription-form" onSubmit={handleSubmit}>
                                <input type="email" placeholder="Ваш E-mail" required />
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