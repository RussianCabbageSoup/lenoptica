import React from "react";
import tagIco from "../images/icons/tag.svg";
import typeIco from "../images/icons/type.svg";
import rubleIco from "../images/icons/ruble.svg";
import glass from "../images/png/glass.png";
import diamodIco from "../images/icons/diamond_.svg";
import rulerIco from "../images/icons/ruler.svg";
import shieldIco from "../images/icons/shield_icon.svg";
import nextIco from "../images/control/Arrow2.svg";
import prevIco from "../images/control/Arrow1.svg";

function Products() {
    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">
                    <div className="products__head">
                        <ul className="products__head-brands">
                            <li className="products__brands-item">Ray-bAn</li>
                            <li className="products__brands-item">PERSOL</li>
                            <li className="products__brands-item">TOM FORD</li>
                            <li className="products__brands-item">MASUNAGA</li>
                            <li className="products__brands-item">MYKITA</li>
                            <li className="products__brands-item">OLIVER PEOPLES</li>
                        </ul>
                        <h2 className="products__head-title">Выберите свою пару</h2>
                        <div className="products__head-subtitle">Коллекция премиальных оправ и линз с защитой от синего
                            света</div>
                    </div>
                    <div className="product__body">
                        <aside className="filter">
                            <div className="filter__inner">
                                <div className="filter__brand">
                                    <div className="filter__brand-title">
                                        <div className="filter__title-ico">
                                            <img src={tagIco} />
                                        </div>
                                        <div className="filter__title-text">Бренд</div>
                                    </div>
                                    <ul className="filter__brand-list">
                                        <li className="filter__brand-item">
                                            <label className="filter__brand-checkbox">
                                                <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                                            </label>
                                        </li>
                                        <li className="filter__brand-item">
                                            <label className="filter__brand-checkbox">
                                                <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                                            </label>
                                        </li>
                                        <li className="filter__brand-item">
                                            <label className="filter__brand-checkbox">
                                                <input type="checkbox" name="brand" defaultValue="ray-ban" /> RaY-bAN
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter__type">
                                    <div className="filter__type-title">
                                        <div className="filter__title-ico">
                                            <img src={typeIco} />
                                        </div>
                                        <div className="filter__title-text">Тип</div>
                                    </div>
                                    <ul className="filter__type-list">
                                        <li className="filter__type-item">
                                            <label className="filter__type-checkbox">
                                                <input type="checkbox" name="type" defaultValue="default" /> Default
                                            </label>
                                        </li>
                                        <li className="filter__type-item">
                                            <label className="filter__type-checkbox">
                                                <input type="checkbox" name="type" defaultValue="default" /> Default
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                                <div className="filter__cost">
                                    <div className="filter__cost-title">
                                        <div className="filter__title-ico">
                                            <img src={rubleIco} />
                                        </div>
                                        <div className="filter__title-text">Цена</div>
                                    </div>
                                    <div className="filter__cost-inputs">
                                        <input type="number" placeholder="от" />
                                        <input type="number" placeholder="до" />
                                    </div>
                                </div>
                                <div className="filter__button">
                                    <div className="filter__button-btn button">Применить</div>
                                </div>
                            </div>
                        </aside>
                        <div className="products__grid">
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
                        </div>
                    </div>
                    <div className="products__footer">
                        <div className="products__footer-pagination">
                            <div className="products__pagination-prev">
                                <img src={prevIco} alt="предыдущая" />
                            </div>
                            <div className="products__pagination-numbers">
                                <div className="products__numbers-item">1</div>
                                <div className="products__numbers-item">2</div>
                                <div className="products__numbers-item">3</div>
                            </div>
                            <div className="products__pagination-next">
                                <img src={nextIco} alt="следующая" />
                            </div>
                            <div className="products__pagination-count">
                                1/3
                            </div>
                        </div>
                        <ul className="products__footer-feature">
                            <li className="products__feature-item">
                                <div className="products__feature-ico">
                                    <img src={shieldIco} />
                                </div>
                                <div className="products__feature-key">Защита от UV400</div>
                                <div className="products__feature-value">Высокий класс оптики</div>
                            </li>
                            <li className="products__feature-item">
                                <div className="products__feature-ico">
                                    <img src={rulerIco} />
                                </div>
                                <div className="products__feature-key">Индивидуальная подгонка</div>
                                <div className="products__feature-value">Регулировка заушников</div>
                            </li>
                            <li className="products__feature-item">
                                <div className="products__feature-ico">
                                    <img src={diamodIco} />
                                </div>
                                <div className="products__feature-key">Авторский дизайн</div>
                                <div className="products__feature-value">Лимитированные серии</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Products;