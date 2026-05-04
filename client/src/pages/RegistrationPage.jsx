import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import personIco from "../images/icons/person_110935.svg";
import mailIco from "../images/icons/mail.svg";
import passwordIco from "../images/icons/key_106480.svg";
import { Link } from "react-router-dom";
import { registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const RegistrationPage = observer(() => {

    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let userData;
            userData = await registration(username, email, password);
            console.log(userData);

            user.setUser(userData);
            user.setIsAuth(true);

            navigate('/');
            
        } catch (error) {
            console.log(`err: ${error}`)
        }
    }

    return (
        <div className="bg__wrapper">
            <div className="registration">
                <h2 className="registration__title">Создать аккаунт</h2>
                <form className="registration__form"  onSubmit={e => handleSubmit(e)}>
                    <div className="registration__form-input">
                        <img src={personIco} alt="" />
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="registration__form-input">
                        <img src={mailIco} alt="" />
                        <input
                            type="email"
                            placeholder="Электронная почта"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="registration__form-input">
                        <img src={passwordIco} alt="" />
                        <input
                            type="password"
                            placeholder="Пароль"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="registration__form-input">
                        <img src={passwordIco} alt="" />
                        <input
                            type="password"
                            placeholder="Подтвердите пароль"
                            required
                        />
                    </div>
                    <button
                        className="registration__form-btn button"
                        type="submit"
                    >
                        Войти
                    </button>
                </form>
                <div className="registration__extra-note">Есть аккаунта? <Link to="/login">Вход</Link></div>
            </div>
        </div>
    );
})

export default RegistrationPage;