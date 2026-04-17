import React from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../images/logo/logo.svg";
import heartIco from "../images/control/heart.svg";
import cartIco from "../images/control/shoppingbag_84031.svg";
import searchIco from "../images/control/magnifier.svg";
import userIco from "../images/control/user.svg";
import promotionIco from "../images/icons/promotion.svg";

function HeaderBurger() {
    return (
        <div>
            <div className="mobile-header d-lg-none">
                <div className="mobile-header__bar">
                    <button className="burger-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#burgerMenu" aria-controls="burgerMenu">
                        <span className="burger-icon" />
                        <span className="burger-icon" />
                        <span className="burger-icon" />
                    </button>
                    <Link to="/" className="mobile-logo">
                        <div className="mobile-logo-img">
                            <img src={myLogo} alt="логотип" />
                        </div>
                        <div className="mobile-logo-name">
                            <p>ЛенОптика</p>
                            <span>салон оптики</span>
                        </div>
                    </Link>
                    <div className="mobile-icons">
                        <Link to="/favorites" className="mobile-icons-box">
                            <img src={heartIco} alt="избранное" />
                        </Link>
                        <Link to="/cart" className="mobile-icons-box">
                            <img src={cartIco} alt="корзина" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="burgerMenu" aria-labelledby="burgerMenuLabel">
                <div className="offcanvas-header">
                    <div className="offcanvas-logo">
                        <img src={myLogo} alt="логотип" />
                        <div>
                            <p>ЛенОптика</p>
                            <span>салон оптики</span>
                        </div>
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Закрыть" />
                </div>
                <div className="offcanvas-body">
                    <form className="mobile-search-form" onSubmit={(e) => e.preventDefault()}>
                        <input className="mobile-search-input" type="text" placeholder="Поиск товаров..." />
                        <button className="mobile-search-btn" type="submit">
                            <img src={searchIco} alt="поиск" />
                        </button>
                    </form>
                    <ul className="mobile-nav-list">
                        <li className="mobile-nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/"
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li className="mobile-nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/store"
                            >
                                Каталог
                            </NavLink>
                        </li>
                        <li className="mobile-nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/eye-exam"
                            >
                                Проверка зрения
                            </NavLink>
                        </li>
                        <li className="mobile-nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/about"
                            >
                                О нас
                            </NavLink>
                        </li>
                        <li className="mobile-nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    `mobile-nav-link ${isActive ? 'active-link' : ''}`
                                }
                                to="/contacts"
                            >
                                Контакты
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mobile-user-actions">
                        <Link to="/profile" className="mobile-user-link">
                            <img src={userIco} alt="профиль" />
                            <span>Личный кабинет</span>
                        </Link>
                    </div>
                    <div className="mobile-promotion">
                        <div className="mobile-promotion-ico">
                            <img src={promotionIco} alt="акция" />
                        </div>
                        <div className="mobile-promotion-text">
                            Скидка 15% на первый заказ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBurger;