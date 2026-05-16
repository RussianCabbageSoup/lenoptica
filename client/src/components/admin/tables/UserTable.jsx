import { observer } from "mobx-react-lite";
import React, { useCallback, useContext, useEffect } from "react";
import { Context } from "../../../index";
import { fetchUsers } from "../../../http/userAPI";
import UserTableItem from "./UserTableItem";

const UserTable = observer(() => {

    const { user } = useContext(Context);

    const loadUsers = useCallback(async () => {
        try {
            const data = await fetchUsers();          
            user.setUsers(data.rows);
        } catch (error) {
            console.error('Ошибка загрузки:', error);
        }
    }, [user.users]);

    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    return (
        <table className="dashboard__table">
            <thead className="table__head">
                <tr>
                    <th>id</th>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Роль</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {user.users.map(item =>
                    <UserTableItem 
                        key={item.id}
                        item={item}
                    />
                )}
            </tbody>
        </table>
    );
})

export default UserTable;