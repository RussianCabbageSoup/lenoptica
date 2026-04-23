import React from "react";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";
import LogoutModal from "./LogoutModal";

function ModalList() {
    return (  
        <div>
            <LoginModal />
            <RegistrationModal />
            <LogoutModal />
        </div>
    );
}

export default ModalList;