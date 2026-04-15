
import React from "react";
import myLogo from "../images/logo/logo.svg";
import heartIco from "../images/control/heart.svg";
import cartIco from "../images/control/shoppingbag_84031.svg";
import searchIco from "../images/control/magnifier.svg";
import userIco from "../images/control/user.svg";
import promotionIco from "../images/icons/promotion.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="mobile-header d-lg-none">
            <div className="mobile-header__bar">
              <button className="burger-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#burgerMenu" aria-controls="burgerMenu">
                <span className="burger-icon" />
                <span className="burger-icon" />
                <span className="burger-icon" />
              </button>
              <a href="#" className="mobile-logo">
                <div className="mobile-logo-img">
                  <img src={myLogo} alt="логотип" />
                </div>
                <div className="mobile-logo-name">
                  <p>ЛенОптика</p>
                  <span>салон оптики</span>
                </div>
              </a>
              <div className="mobile-icons">
                <div className="mobile-icons-box">
                  <img src={heartIco} alt="избранное" />
                </div>
                <div className="mobile-icons-box">
                  <img src={cartIco} alt="корзина" />
                </div>
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
              <form className="mobile-search-form">
                <input className="mobile-search-input" type="text" placeholder="Поиск товаров..." />
                <button className="mobile-search-btn" type="submit">
                  <img src={searchIco} alt="поиск" />
                </button>
              </form>
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <a className="mobile-nav-link" href="#">Главная</a>
                </li>
                <li className="mobile-nav-item">
                  <a className="mobile-nav-link" href="#">Каталог</a>
                </li>
                <li className="mobile-nav-item">
                  <a className="mobile-nav-link" href="#">Проверка зрения</a>
                </li>
                <li className="mobile-nav-item">
                  <a className="mobile-nav-link" href="#">О нас</a>
                </li>
                <li className="mobile-nav-item">
                  <a className="mobile-nav-link" href="#">Контакты</a>
                </li>
              </ul>
              <div className="mobile-user-actions">
                <a href="#" className="mobile-user-link">
                  <img src={userIco} alt="профиль" />
                  <span>Личный кабинет</span>
                </a>
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
          <div className="header__top">
            <a href="#" className="header__top-logo">
              <div className="header__logo-img">
                <img src={myLogo} alt="логотип" />
              </div>
              <div className="header__logo-name">
                <p>ЛенОптика</p>
                <span>салон оптики</span>
              </div>
            </a>
            <div className="header__top-search">
              <form className="header__search-form">
                <input className="header__form-input" type="text" placeholder="Поиск товаров, брендов или категорий..." />
                <button className="header__form-btn" type="submit">
                  <img src={searchIco} />
                </button>
              </form>
            </div>
            <div className="header__top-icons">
              <div className="header__icons-box">
                <img src={heartIco} />
              </div>
              <div className="header__icons-box">
                <img src={userIco} />
              </div>
              <div className="header__icons-box">
                <img src={cartIco} />
              </div>
            </div>
          </div>
          <div className="header__bottom">
            <nav className="header__bottom-nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">Главная</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">Каталог</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">Проверка зрения</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">О нас</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">Контакты</a>
                </li>
              </ul>
            </nav>
            <div className="header__bottom-promotion">
              <div className="header__promotion-ico">
                <img src={promotionIco} />
              </div>
              <div className="header__promotion-text">
                Скидка 15% на первый заказ
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

