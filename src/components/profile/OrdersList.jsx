import React from "react";
import OrderItem from "./OrderItem";

function OrdersList() {
    return (
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
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
        </div>
    );
}

export default OrdersList;