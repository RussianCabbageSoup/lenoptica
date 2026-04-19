import React from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../../images/logo/logo.svg";
import heartIco from "../../images/control/heart.svg";
import cartIco from "../../images/control/shoppingbag_84031.svg";
import searchIco from "../../images/control/magnifier.svg";
import userIco from "../../images/control/user.svg";
import promotionIco from "../../images/icons/promotion.svg";
import HeaderBurger from "./HeaderBurger";

function HeaderDesktop() {
    return (
        <div>
            <div className="header__top">
                <Link to="/" className="header__top-logo">
                    <div className="header__logo-img">
                        <img src={myLogo} alt="логотип" />
                    </div>
                    <div className="header__logo-name">
                        <p>ЛенОптика</p>
                        <span>салон оптики</span>
                    </div>
                </Link>
                <div className="header__top-search">
                    <form className="header__search-form">
                        <input className="header__form-input" type="text" placeholder="Поиск товаров, брендов или категорий..." />
                        <button className="header__form-btn" type="submit">
                            <img src={searchIco} alt="поиск" />
                        </button>
                    </form>
                </div>
                <div className="header__top-icons">
                    <Link to="/favorites" className="header__icons-box">
                        <img src={heartIco} alt="избранное" />
                    </Link>
                    <Link to="/profile" className="header__icons-box">
                        <img src={userIco} alt="профиль" />
                    </Link>
                    <Link to="/cart" className="header__icons-box">
                        <img src={cartIco} alt="корзина" />
                    </Link>
                </div>
            </div>
            <div className="header__bottom">
                <nav className="header__bottom-nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/"
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/store"
                            >
                                Каталог
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/eye-exam"
                            >
                                Проверка зрения
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/about"
                            >
                                О нас
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `header__nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/contacts"
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="header__bottom-promotion">
                    <div className="header__promotion-ico">
                        <img src={promotionIco} alt="акция" />
                    </div>
                    <div className="header__promotion-text">
                        Скидка 15% на первый заказ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderDesktop;