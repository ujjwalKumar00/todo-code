import React from 'react';
import './todoItemStyles.css';

function TodoItem(props) {

    return (
        <div className='todoItem'
            style={props.completed ? { backgroundColor: '#03c03c' } : null}>

            <button
                className='crossButton'
                title='Delete task'
                onClick={() => { props.deleteClickHandler(props.id); }}
            >&#10006;</button>

            <div className='itemText'> {props.text} </div>

            <button
                className='tickButton'
                title='Task completed'
                onClick={() => { props.completedClickHandler(props.id); }}
            >&#10003;</button>

        </div>
        
    )
}


export default TodoItem;