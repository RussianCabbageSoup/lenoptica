import React, { useCallback, useContext } from "react";
import editIco from "../../../images/control/edit.svg";
import deleteIco from "../../../images/control/delete.svg";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import { useState } from "react";
import { deleteType, fetchTypes, updateType } from "../../../http/typeAPI";

const TypeTableItem = observer(({ item }) => {
    const { product } = useContext(Context)
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(item.name)

    const refreshTypes = useCallback(async () => {
        try {
            const data = await fetchTypes();
            product.setTypes(data.rows);
        } catch (error) {
            console.error('Ошибка обновления таблицы:', error);
        }
    }, [product]);

    const handleEdit = async (e) => {
        e.preventDefault()
        setIsEditing(false)

        try {
            const formData = new FormData()
            formData.append('name', name);

            await updateType(formData, item.id)

            await refreshTypes()
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            await deleteType(item.id);

            await refreshTypes();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <tr>
            <td>{item.id}</td>
            {isEditing ? (
                <td>
                    <form onSubmit={handleEdit}>
                        <input
                            className="table-input"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            onBlur={handleEdit}
                            autoFocus 
                        />
                    </form>
                </td>
            ) : (
                <td>{item.name}</td>
            )}
            <td className="table__buttons">
                <img
                    src={editIco}
                    alt="редактировать"
                    onClick={() => setIsEditing(true)}
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

export default TypeTableItem;