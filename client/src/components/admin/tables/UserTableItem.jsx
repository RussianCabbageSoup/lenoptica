import React from "react";
import editIco from "../../../images/control/edit.svg";
import deleteIco from "../../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { deleteUser, fetchUsers } from "../../../http/userAPI";
import { useCallback } from "react";
import { useContext } from "react";
import { Context } from "../../../index";

const UserTableItem = observer(({ item }) => {

    const { user } = useContext(Context)

    const refreshUsers = useCallback(async () => {
        try {
            const data = await fetchUsers();
            user.setUsers(data.rows);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [user]);

    const handleDelete = async () => {
        try {
            await deleteUser(item.id);

            await refreshUsers();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td className="table__buttons">
                <img
                    src={editIco}
                    alt="редактировать"
                />
                <img
                    src={deleteIco}
                    alt="удалить"
                    onClick={handleDelete}
                />
            </td>
        </tr>
    );
})

export default UserTableItem;