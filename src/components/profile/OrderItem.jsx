import React from "react";

function OrderItem() {
    return (
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
    );
}

export default OrderItem;