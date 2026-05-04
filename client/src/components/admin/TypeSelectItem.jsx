import React from "react";

function TypeSelectItem({type}) {
    return (  
        <option value={type.name}>{type.name}</option>
    );
}

export default TypeSelectItem;