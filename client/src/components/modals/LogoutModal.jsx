import React from "react";
import emailIco from "../../images/icons/mail.svg"
import passwordIco from "../../images/icons/key_106480.svg"
import RegistrationModal from "./RegistrationModal";

function LogoutModal() {
    const handleLogout = () => {
        // Удаляем токен из localStorage
        localStorage.removeItem('token');
        
        // Перезагружаем страницу или обновляем состояние
        window.location.reload();
    };
    return (
        <div className="modal fade" id="logoutModal" tabIndex={-1} aria-labelledby="logoutModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal__content-head">
                        <h2 className="modal__content-title">Выйти из аккаунта?</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                    </div>
                    <div className="modal__form-buttons">
                        <button className="button">Отмена</button>
                        <button className="button" onClick={handleLogout}>Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoutModal;