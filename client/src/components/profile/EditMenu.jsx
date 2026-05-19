import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import cancelIco from "../../images/control/4115230-cancel-close-cross-delete_114048.svg"
import { Context } from "../../index"
import { updateUser } from "../../http/userAPI"
import { useNavigate } from "react-router-dom"

const EditMenu = observer(() => {

    const { user } = useContext(Context)
    const navigate = useNavigate()

    const [name, setName] = useState(user.user.name);
    const [email, setEmail] = useState(user.user.email);
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append('name', name);
            formData.append('email', email);
            formData.append('currentPassword', currentPassword);
            formData.append('newPassword', newPassword);

            const data = await updateUser(formData, user.user.id)
            console.log(data)

            if (data.token) {
                logout()
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="edit-menu">
            <div
                className="edit-menu__cancel"
                onClick={e => user.setIsEditing(false)}
            >
                <img src={cancelIco} alt="" />
            </div>
            <form className="edit-menu__form" onSubmit={handleSubmit}>
                <div className="edit-menu__form-input">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="edit-menu__form-input">
                    <input
                        type="email"
                        placeholder="Электронная почта"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="edit-menu__form-input">
                    <input
                        type="password"
                        placeholder="Текущий пароль"
                        required
                        value={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="edit-menu__form-input">
                    <input
                        type="password"
                        placeholder="Новый пароль"
                        required
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>
                <button
                    className="edit-menu__form-btn button"
                    type="submit"
                >
                    Сохранить
                </button>
            </form>
        </div>
    )
})

export default EditMenu