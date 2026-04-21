import React from "react";
import LoginModal from "./LoginModal";
import RegistrationModal from "./RegistrationModal";

function ModalList() {
    return (  
        <div>
            <div className="container mt-5 text-center">
                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#regModal">
                    1
                </button>
                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#loginModal">
                    2
                </button>
            </div>
            <LoginModal />
            <RegistrationModal />
        </div>
    );
}

export default ModalList;