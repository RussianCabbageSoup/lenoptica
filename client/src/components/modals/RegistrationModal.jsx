import React from "react";
import emailIco from "../../images/icons/mail.svg"
import passwordIco from "../../images/icons/key_106480.svg"
import personIco from "../../images/icons/person_110935.svg"

function RegistrationModal() {
    return (
        <div className="modal fade" id="regModal" tabIndex={-1} aria-labelledby="regModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal__content-head">
                        <h2 className="modal__content-title">Регистрация</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <form className="modal__content-form">
                        <div className="modal__form-input">
                            <img src={personIco} />
                            <input type="text" placeholder="Ваше имя" />
                        </div>
                        <div className="modal__form-input">
                            <img src={emailIco} />
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="modal__form-input">
                            <img src={passwordIco} />
                            <input type="password" placeholder="Пароль" />
                        </div>
                        <div className="modal__form-input">
                            <img src={passwordIco} />
                            <input type="password" placeholder="Подтвердите пароль" />
                        </div>
                        <div className="modal__form-buttons">
                            <button className="button">Отмена</button>
                            <button className="button" type="submit">Отправить</button>
                        </div>
                    </form>
                    <div className="modal__content-text">
                        Уже есть аккаунт? <button data-bs-toggle="modal" data-bs-target="#loginModal">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationModal;