import React from 'react';


function AddItemButton(props) {
    
    return (
        <button
            onClick={props.handler}
        >
            Add Item
        </button>
    )
}

export default AddItemButton;