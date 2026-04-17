import React from "react";
import glass from "../images/png/glass.png";
import diamodIco from "../images/icons/diamond_.svg";
import rulerIco from "../images/icons/ruler.svg";
import shieldIco from "../images/icons/shield_icon.svg";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import Pagination from "./UI/Pagination";
import Filter from "./Filter";

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
                        <div className="products__head-subtitle">
                            Коллекция премиальных оправ и линз с защитой от синего
                            света
                        </div>
                    </div>
                    <div className="product__body">
                        <Filter />
                        <ProductList />
                    </div>
                    <div className="products__footer">
                        <Pagination />
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