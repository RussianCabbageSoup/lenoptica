import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index"

const TableSelect = observer(() => {
    const { product } = useContext(Context)

    const tabs = ['Товары', 'Пользователи', 'Бренды', 'Типы'];

    return (
        <div className="dashboard__buttons">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`dashboard__buttons-btn ${product.selectedTable === tab ? 'active-btn' : ''}`}
                    onClick={() => product.setSelectedTable(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
})

export default TableSelect;