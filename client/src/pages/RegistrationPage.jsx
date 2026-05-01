import React from "react";
import personIco from "../images/icons/person_110935.svg";
import mailIco from "../images/icons/mail.svg";
import passwordIco from "../images/icons/key_106480.svg";
import { Link } from "react-router-dom";

function RegistrationPage() {
    return (
        <div className="bg__wrapper">
            <div className="registration">
                <h2 className="registration__title">Создать аккаунт</h2>
                <form className="registration__form">
                    <div className="registration__form-input">
                        <img src={personIco} />
                        <input type="text" placeholder="Ваше имя" required />
                    </div>
                    <div className="registration__form-input">
                        <img src={mailIco} />
                        <input type="email" placeholder="Электронная почта" required />
                    </div>
                    <div className="registration__form-input">
                        <img src={passwordIco} />
                        <input type="password" placeholder="Пароль" required />
                    </div>
                    <div className="registration__form-input">
                        <img src={passwordIco} />
                        <input type="password" placeholder="Подтвердите пароль" required />
                    </div>
                    <button className="registration__form-btn button">Войти</button>
                </form>
                <div className="registration__extra-note">Есть аккаунта? <Link to="/login">Вход</Link></div>
            </div>
        </div>
    );
}

export default RegistrationPage;