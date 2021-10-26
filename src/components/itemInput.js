import React, { useState } from 'react';
import './itemInputStyles.css';


const ItemInput = (props)=> {
    const [newItem, updateNewItem] = useState('');

    const onChangeHandler = (e) => {
        updateNewItem(e.target.value)
    }

    const onClickHandler = (event) => {
        event.preventDefault();
        if(newItem.trim().length)
            props.handler(newItem);
        updateNewItem('');
    }

    return (
        <form>
            <input type='text' value={newItem} onChange={onChangeHandler} />
            <button type='submit' onClick={onClickHandler} >Add</button>
        </form>
    )
}

export default ItemInput;