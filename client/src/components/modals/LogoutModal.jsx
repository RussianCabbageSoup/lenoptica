import React, { useContext } from "react";
import emailIco from "../../images/icons/mail.svg"
import passwordIco from "../../images/icons/key_106480.svg"
import RegistrationModal from "./RegistrationModal";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const LogoutModal = observer(() => {
    
    const {user} = useContext(Context);

    const handleLogout = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
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
                        <button className="button" data-bs-dismiss="modal">Отмена</button>
                        <button className="button" onClick={handleLogout} data-bs-dismiss="modal">Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default LogoutModal;