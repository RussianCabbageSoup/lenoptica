import React from "react";
import emailIco from "../../images/icons/mail.svg"
import passwordIco from "../../images/icons/key_106480.svg"
import RegistrationModal from "./RegistrationModal";

function LoginModal() {
    return (
        <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal__content-head">
                        <h2 className="modal__content-title">Вход</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <form className="modal__content-form">
                        <div className="modal__form-input">
                            <img src={emailIco} />
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="modal__form-input">
                            <img src={passwordIco} />
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="modal__form-buttons">
                            <button className="button">Отмена</button>
                            <button className="button" type="submit">Войти</button>
                        </div>
                    </form>
                    <div className="modal__content-text">
                        Нет аккаунта? <button data-bs-toggle="modal" data-bs-target="#regModal">Регистрация</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;