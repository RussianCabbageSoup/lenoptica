import React from "react";
import editIco from "../images/control/edit.svg";
import wishIco from "../images/control/heart_fill.svg";
import glass from "../images/png/glass.png";

function Profile() {
    return (
        <section className="profile">
            <div className="container">
                <div className="profile__inner">
                    <div className="profile__avatar">
                        <div className="profile__avatar-img">
                            <div>AK</div>
                        </div>
                        <div className="profile__avatar-name">
                            Анна Кузнецова
                        </div>
                        <div className="profile__avatar-email">
                            anna.kuznetsova@example.com
                        </div>
                        <div className="profile__avatar-button">
                            <div className="profile__button-ico">
                                <img src={editIco} alt="редактировать" />
                            </div>
                            <div className="profile__button-btn">
                                Редактировать профиль
                            </div>
                        </div>
                        <div className="profile__avatar-date">
                            Дата регистрации: <span>20.12.2025</span>
                        </div>
                    </div>
                    <div className="profile__right">
                        <div className="profile__wishlist">
                            <div className="profile__wishlist-head">
                                <div className="profile__wishlist-title">
                                    <img src={wishIco} />
                                    <span>Избранное</span>
                                </div>
                                <div className="profile__wishlist-button">
                                    Показать всё
                                </div>
                            </div>
                            <div className="profile__wishlist-grid">
                                <div className="products__grid-card">
                                    <a className="products__card-inner" href="#">
                                        <div className="card__img-box">
                                            <img src={glass} alt="Очки" />
                                            <div className="card__img-tag">Хит продаж</div>
                                        </div>
                                    </a><div className="card__content"><a className="products__card-inner" href="#">
                                        <div className="card__content-brand">RaY-bAN</div>
                                        <div className="card__content-model">Clubmaster RB3016</div>
                                        <div className="card__content-prices">
                                            <div className="card__prices-current">15750 ₽</div>
                                            <div className="card__prices-old">36 900 ₽</div>
                                        </div>
                                    </a><div className="card__content-button"><a className="products__card-inner" href="#">
                                    </a><a className="card__button-btn" href="#">
                                                Подробнее
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__grid-card">
                                    <a className="products__card-inner" href="#">
                                        <div className="card__img-box">
                                            <img src="images/png/glass.png" alt="Очки" />
                                            <div className="card__img-tag">Хит продаж</div>
                                        </div>
                                    </a><div className="card__content"><a className="products__card-inner" href="#">
                                        <div className="card__content-brand">RaY-bAN</div>
                                        <div className="card__content-model">Clubmaster RB3016</div>
                                        <div className="card__content-prices">
                                            <div className="card__prices-current">15750 ₽</div>
                                            <div className="card__prices-old">36 900 ₽</div>
                                        </div>
                                    </a><div className="card__content-button"><a className="products__card-inner" href="#">
                                    </a><a className="card__button-btn" href="#">
                                                Подробнее
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="products__grid-card">
                                    <a className="products__card-inner" href="#">
                                        <div className="card__img-box">
                                            <img src="images/png/glass.png" alt="Очки" />
                                            <div className="card__img-tag">Хит продаж</div>
                                        </div>
                                    </a><div className="card__content"><a className="products__card-inner" href="#">
                                        <div className="card__content-brand">RaY-bAN</div>
                                        <div className="card__content-model">Clubmaster RB3016</div>
                                        <div className="card__content-prices">
                                            <div className="card__prices-current">15750 ₽</div>
                                            <div className="card__prices-old">36 900 ₽</div>
                                        </div>
                                    </a><div className="card__content-button"><a className="products__card-inner" href="#">
                                    </a><a className="card__button-btn" href="#">
                                                Подробнее
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile__orders">
                            <div className="profile__orders-head">
                                <div className="profile__orders-title">
                                    <span>Последние заказы</span>
                                </div>
                                <div className="profile__orders-button">
                                    История
                                </div>
                            </div>
                            <div className="profile__orders-list">
                                <a className="profile__orders-card" href="#">
                                    <div className="orders__card-inner">
                                        <div className="orders__card-text">
                                            <div className="orders__card-id">ORD-2481</div>
                                            <div className="orders__card-date">12.10.2025</div>
                                            <div className="orders__card-status">Завершен</div>
                                        </div>
                                        <div className="orders__card-price">
                                            4 590 ₽
                                        </div>
                                    </div>
                                </a>
                                <a className="profile__orders-card" href="#">
                                    <div className="orders__card-inner">
                                        <div className="orders__card-text">
                                            <div className="orders__card-id">ORD-2481</div>
                                            <div className="orders__card-date">12.10.2025</div>
                                            <div className="orders__card-status">Завершен</div>
                                        </div>
                                        <div className="orders__card-price">
                                            4 590 ₽
                                        </div>
                                    </div>
                                </a>
                                <a className="profile__orders-card" href="#">
                                    <div className="orders__card-inner">
                                        <div className="orders__card-text">
                                            <div className="orders__card-id">ORD-2481</div>
                                            <div className="orders__card-date">12.10.2025</div>
                                            <div className="orders__card-status">Завершен</div>
                                        </div>
                                        <div className="orders__card-price">
                                            4 590 ₽
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Profile;