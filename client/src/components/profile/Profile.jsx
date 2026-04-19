import React from "react";
import OrdersList from "./OrdersList";
import WishList from "./WishList";
import Avatar from "./Avatar";

function Profile() {
    return (
        <section className="profile">
            <div className="container">
                <div className="profile__inner">
                    <Avatar />
                    <div className="profile__right">
                        <WishList />
                        <OrdersList />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Profile;