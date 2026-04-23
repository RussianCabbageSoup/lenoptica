import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import myLogo from "../../images/logo/logo.svg";
import heartIco from "../../images/control/heart.svg";
import cartIco from "../../images/control/shoppingbag_84031.svg";
import searchIco from "../../images/control/magnifier.svg";
import userIco from "../../images/control/user.svg";
import logoutIco from "../../images/control/logout_icon_138409.svg";
import promotionIco from "../../images/icons/promotion.svg";
import HeaderBurger from "./HeaderBurger";
import ModalList from "../modals/ModalList";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { login, registration } from "../../http/userAPI";

const HeaderDesktop = observer(() => {
    const { user } = useContext(Context);
    const isAuth = user.isAuth;

    const click = async () => {
        if (isAuth) {
            const response = await login()
        }
        else {
            const response = await registration()                           //  2:05:00
        }
    }

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
                <div>
                    {isAuth ?
                        <div className="header__top-icons">
                            <Link to="/favorites" className="header__icons-item">
                                <img src={heartIco} alt="избранное" />
                            </Link>
                            <Link to="/profile" className="header__icons-item">
                                <img src={userIco} alt="профиль" />
                            </Link>
                            <Link to="/cart" className="header__icons-item">
                                <img src={cartIco} alt="корзина" />
                            </Link>
                            <button className="header__icons-item" data-bs-toggle="modal" data-bs-target="#logoutModal">
                                <img src={logoutIco} alt="Выйти" />
                            </button>
                        </div>
                        :
                        <div className="header__top-buttons">
                            <button type="button" className="header__top-btn" data-bs-toggle="modal" data-bs-target="#loginModal">
                                Войти
                            </button>
                        </div>
                    }
                    <ModalList />
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
                                to="/products"
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
});

export default HeaderDesktop;