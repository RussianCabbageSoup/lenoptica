import React from "react";
import mailIco from '../images/icons/mail.svg';
import passwordIco from '../images/icons/key_106480.svg';
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="bg__wrapper">
            <div className="login">
                <h2 className="login__title">Вход в аккаунт</h2>
                <form className="login__form">
                    <div className="login__form-input">
                        <img src={mailIco} />
                        <input type="email" placeholder="Электронная почта" required />
                    </div>
                    <div className="login__form-input">
                        <img src={passwordIco} />
                        <input type="password" placeholder="Пароль" required />
                    </div>
                    <a className="login__form-reset" href="#">Забыли пароль?</a>
                    <button className="login__form-btn button">Войти</button>
                </form>
                <div className="login__extra-note">Нет аккаунта? <Link to="/reg">Создать аккаунт</Link></div>
            </div>
        </div>
    );
}

export default LoginPage;