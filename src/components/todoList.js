import React from 'react';
import TodoItem from './todoItem';

import './todoListStyles.css';


const TodoList = (props) => {
    
    // console.log(props);

    const completedClickHandler = (k) => {
        const newList = [...props.itemList];
        newList[k].completed = !newList[k].completed;
        props.listUpdater(newList)
    }

    const deleteClickHandler = (k) => {
        const newList = props.itemList.slice(0, k).concat(props.itemList.slice(k + 1));
        props.listUpdater(newList)
    }
    
    const filteredList = props.itemList.map(item => {
        return props.filter == 'all' ? item :
            ((props.filter == 'done' && item.completed) ? item :
            ((props.filter == 'todo' && !item.completed) ? item : null ))
    })
    

    return (
        <div className='todoList'>
            {
                filteredList.map(
                    (item, i) => {
                        if (item != null)
                            return (
                                <TodoItem
                                    key={i}
                                    id={i}
                                    text={item.text}
                                    completed={item.completed}
                                    completedClickHandler={completedClickHandler}
                                    deleteClickHandler = {deleteClickHandler}
                                />
                            )
                    })
            }
        </div>
    )
}

export default TodoList;

