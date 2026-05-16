import React from "react";

const TypeSelectItem = ({type}) => {
    return (  
        <option value={type.id}>{type.name}</option>
    );
}

export default TypeSelectItem;