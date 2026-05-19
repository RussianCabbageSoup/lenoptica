import React, { useCallback } from "react";
import editIco from "../../images/control/edit.svg";
import { useContext } from "react";
import { Context } from "../../index"
import { observer } from "mobx-react-lite";
import { check } from "../../http/userAPI";
import { useState } from "react";
import { useEffect } from "react";
import EditMenu from "./EditMenu";

const Avatar = observer(() => {

    const { user } = useContext(Context)
    const isEditing = user.isEditing

    const loadUser = useCallback( async () => {
        const data = await check()
        console.log(data)
        user.setUser(data)
        console.log(user.user.name)
    }, [])

    const getInitials = (name) => {
        if (!name) return null;
        const words = name.trim().split(' ');
        const initials = words.map(word => word[0]).join('');
        return initials.slice(0, 2).toUpperCase();
    };

    console.log('Рендер Avatar, user.user:', user.user.name);

    useEffect(() => {
        loadUser();
    }, [])

    return (
        <div className="profile__avatar">
            <div className="profile__avatar-img">
                <div>
                    {getInitials(user.user.name)}
                </div>
                <div
                    className="profile__avatar-edit"
                    
                >
                    <img src={editIco} alt="" />
                </div>
            </div>
            <div className="profile__avatar-name">
                {user.user.name}
            </div>
            <div className="profile__avatar-email">
                {user.user.email}
            </div>
            {isEditing
                ? <EditMenu />
                : <div className="profile__avatar-button">
                    <div className="profile__button-ico">
                        <img src={editIco} alt="редактировать" />
                    </div>
                    <div
                        className="profile__button-btn"
                        onClick={e => user.setIsEditing(true)}
                    >
                        Редактировать профиль
                    </div>
                </div>
            }
        </div>
    );
})

export default Avatar;