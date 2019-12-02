import React from 'react';

const Todo = props => {


    return(
        <div className = {`task${props.i.completed ? ' completed' : ''}`} onClick = {() => props.toggler(props.i.id)}>
            <p>{props.i.task}</p>
        </div>
    )
}

export default Todo;