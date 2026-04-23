// import React from "react";
// import emailIco from "../../images/icons/mail.svg"
// import passwordIco from "../../images/icons/key_106480.svg"
// import RegistrationModal from "./RegistrationModal";

// function LoginModal() {
//     return (
//         <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModal" aria-hidden="true">
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal__content-head">
//                         <h2 className="modal__content-title">Вход</h2>
//                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
//                     </div>
//                     <form className="modal__content-form">
//                         <div className="modal__form-input">
//                             <img src={emailIco} />
//                             <input type="email" placeholder="email" />
//                         </div>
//                         <div className="modal__form-input">
//                             <img src={passwordIco} />
//                             <input type="password" placeholder="Пароль" />
//                         </div>
//                         <div className="modal__form-buttons">
//                             <button className="button">Отмена</button>
//                             <button className="button" type="submit">Войти</button>
//                         </div>
//                     </form>
//                     <div className="modal__content-text">
//                         Нет аккаунта? <button data-bs-toggle="modal" data-bs-target="#regModal">Регистрация</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginModal;

import React, { useState, useContext } from "react";
import emailIco from "../../images/icons/mail.svg";
import passwordIco from "../../images/icons/key_106480.svg";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const LoginModal = observer(() => {
    const { user } = useContext(Context);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        
        // Валидация
        if (!formData.email.trim()) {
            setError("Введите email");
            setLoading(false);
            return;
        }
        
        if (!formData.password.trim()) {
            setError("Введите пароль");
            setLoading(false);
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });
            
            const data = await response.json();
            console.log('response: ', data);
            
            if (response.ok) {
                // Сохраняем токен в localStorage
                localStorage.setItem('token', data.token);
                user.setIsAuth(true)
                
                // Очищаем форму
                setFormData({ email: "", password: "" });
                
                // Перезагружаем страницу или обновляем состояние
                // window.location.reload();
            } else {
                setError(data.message || "Ошибка при входе");
            }
        } catch (err) {
            setError("Ошибка соединения с сервером");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({ email: "", password: "" });
        setError("");

    };

    return (
        <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal__content-head">
                        <h2 className="modal__content-title">Вход</h2>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Закрыть"
                            onClick={handleCancel}
                        />
                    </div>
                    <form className="modal__content-form" onSubmit={handleSubmit}>
                        <div className="modal__form-input">
                            <img src={emailIco} alt="email" />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                        </div>
                        <div className="modal__form-input">
                            <img src={passwordIco} alt="password" />
                            <input 
                                type="password" 
                                name="password"
                                placeholder="Пароль" 
                                value={formData.password}
                                onChange={handleChange}
                                disabled={loading}
                                required
                            />
                        </div>
                        
                        {error && (
                            <div className="alert alert-danger" style={{ margin: '10px 20px', padding: '8px' }}>
                                {error}
                            </div>
                        )}
                        
                        <div className="modal__form-buttons">
                            <button 
                                type="button" 
                                className="button" 
                                onClick={handleCancel}
                                disabled={loading}
                            >
                                Отмена
                            </button>
                            <button 
                                className="button" 
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? "Вход..." : "Войти"}
                            </button>
                        </div>
                    </form>
                    <div className="modal__content-text">
                        Нет аккаунта? <button 
                            data-bs-toggle="modal" 
                            data-bs-target="#regModal"
                        >
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default LoginModal;