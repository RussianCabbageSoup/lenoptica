import React from "react";
import editIco from "../../images/control/edit.svg";

function Avatar() {
    return (
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
    );
}

export default Avatar;