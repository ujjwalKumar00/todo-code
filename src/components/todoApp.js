import React from 'react';
// import AddItemButton from './addItemButton';
import ItemInput from './itemInput';
import TodoList from './todoList';

import './todoAppStyles.css'
import Filters from './filters';

class TodoApp extends React.Component{
    constructor() {
        super();

        this.state = {
            itemList:
                [
                    {
                    text: "Keep Smiling",
                    completed: false
                    },
                ],
            
            // editing: false,

            filter: 'all'
        }

    }

    addItemClickHandler = ()=> {
        console.log("Editing set to TRUE");
        this.setState({
            editing: true
        })
    }

    addItemInputHandler = (item) => {
        this.setState((preState) => {
            return {
                ...preState,
                itemList: [
                    ...preState.itemList,
                    {
                        text: item,
                        completed: false
                    }
                ]
            }
        })
    }

    listUpdater = (newList) => {
        this.setState((preState) => {
            return {
                ...preState,
                itemList: newList
            }
        })
    }

    filterUpdater = (newFilter) => {
        this.setState({
            filter: newFilter
        })
    }


    render() {

        return (
            <div className='todoApp'>
                <div>
                    <Filters filterUpdater={this.filterUpdater} filter={this.state.filter} />
                    <TodoList
                        itemList={this.state.itemList}
                        filter={this.state.filter} 
                        listUpdater={this.listUpdater} 
                    />
                </div>
                <ItemInput handler={this.addItemInputHandler} />
                {/* {this.state.editing ?
                    <ItemInput handler={this.addItemInputHandler} /> :
                    <AddItemButton handler={this.addItemClickHandler} />
                } */}
            </div>
        )

    
    }
}

export default TodoApp;