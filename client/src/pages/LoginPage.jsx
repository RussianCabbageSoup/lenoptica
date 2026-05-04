import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import mailIco from '../images/icons/mail.svg';
import passwordIco from '../images/icons/key_106480.svg';
import { Link } from "react-router-dom";
import { Context } from "../index";
import { login } from "../http/userAPI";

function LoginPage() {

    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let userData;
            userData = await login(email, password);
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
            <div className="login">
                <h2 className="login__title">Вход в аккаунт</h2>
                <form className="login__form" onSubmit={e => handleSubmit(e)}>
                    <div className="login__form-input">
                        <img src={mailIco} />
                        <input 
                            type="email" 
                            placeholder="Электронная почта" 
                            required 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login__form-input">
                        <img src={passwordIco} />
                        <input 
                            type="password" 
                            placeholder="Пароль" 
                            required 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
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