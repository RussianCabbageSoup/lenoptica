import React from "react";

function TypeSelect() {
    return (
        <div className="form__group">
            <label className="form__group-label">
                Тип
            </label>
            <select className="form__group-select" required>
                <option value="type1">тип 1</option>
                <option value="type2">тип 2</option>
                <option value="type3">тип 3</option>
            </select>
        </div>
    );
}

export default TypeSelect;