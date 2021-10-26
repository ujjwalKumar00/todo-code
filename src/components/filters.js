import React from 'react';

import './filtersStyles.css'

const Filters = (props) => {
    

    return (
        <div className='filterContainer'>
            <div className='filter' id='all'
                onClick={() => props.filterUpdater('all')}
                style={props.filter=='all' ? {backgroundColor: 'white', color: 'black'}:null}
            >
                All
            </div>
            <div className='filter' id='done'
                onClick={() => props.filterUpdater('done')}
                style={props.filter=='done' ? {backgroundColor: 'white', color: 'black'}:null}
            >
                Done
            </div>
            <div className='filter' id='todo'
                onClick={() => props.filterUpdater('todo')}
                style={props.filter=='todo' ? {backgroundColor: 'white', color: 'black'}:null}
            >
                To do
            </div>
        </div>
    )
}

export default Filters;