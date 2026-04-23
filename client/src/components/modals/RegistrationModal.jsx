import React, { useState, useContext } from "react";
import emailIco from "../../images/icons/mail.svg";
import passwordIco from "../../images/icons/key_106480.svg";
import userIco from "../../images/icons/person_110935.svg"
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const RegistrationModal = observer(() => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
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
        if (!formData.name.trim()) {
            setError("Имя не может быть пустым");
            setLoading(false);
            return;
        }
        
        if (!formData.email.trim()) {
            setError("Введите email");
            setLoading(false);
            return;
        }
        
        if (formData.password.length < 4) {
            setError("Пароль должен содержать минимум 4 символа");
            setLoading(false);
            return;
        }
        
        try {
            const response = await fetch('http://localhost:5000/api/user/reg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role: 'USER' // или 'ADMIN' по умолчанию
                })
            });
            
            const data = await response.json();
            console.log(data)
            
            if (response.ok) {
                localStorage.setItem('token', data.token);
                setSuccess(true);
                
            } else {
                setError(data.message || "Ошибка при регистрации");
            }
        } catch (err) {
            setError("Ошибка соединения с сервером");
            console.error("Registration error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: "", email: "", password: "" });
        setError("");
        setSuccess(false);
    };

    return (
        <div className="modal fade" id="regModal" tabIndex={-1} aria-labelledby="regModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal__content-head">
                        <h2 className="modal__content-title">Регистрация</h2>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Закрыть"
                            onClick={handleClose}
                        />
                    </div>
                    
                    {success ? (
                        <div className="alert alert-success m-3">
                            Регистрация успешна! Перенаправление...
                        </div>
                    ) : (
                        <form className="modal__content-form" onSubmit={handleSubmit}>
                            <div className="modal__form-input">
                                <img src={userIco} alt="user" />
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Имя" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    disabled={loading}
                                />
                            </div>
                            
                            <div className="modal__form-input">
                                <img src={emailIco} alt="email" />
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    disabled={loading}
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
                                />
                            </div>
                            
                            {error && (
                                <div className="alert alert-danger m-3">
                                    {error}
                                </div>
                            )}
                            
                            <div className="modal__form-buttons">
                                <button 
                                    type="button" 
                                    className="button" 
                                    data-bs-dismiss="modal"
                                    onClick={handleClose}
                                    disabled={loading}
                                >
                                    Отмена
                                </button>
                                <button 
                                    type="submit" 
                                    className="button"
                                    disabled={loading}
                                >
                                    {loading ? "Регистрация..." : "Зарегистрироваться"}
                                </button>
                            </div>
                        </form>
                    )}
                    
                    <div className="modal__content-text">
                        Уже есть аккаунт? <button data-bs-toggle="modal" data-bs-target="#loginModal">Вход</button>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default RegistrationModal;
