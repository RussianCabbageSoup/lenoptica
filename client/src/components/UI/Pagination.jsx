import React from "react";
import nextIco from "../../images/control/Arrow2.svg";
import prevIco from "../../images/control/Arrow1.svg";

function Pagination() {
    return (
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
    );
}

export default Pagination;