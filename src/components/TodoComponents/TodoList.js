import React from 'react';

//components
import Todo from './Todo';

const TodoList = props => {

    return(
        <div>
            {props.todos.map(i => (
                <Todo key={i.id} i = {i} toggler = {props.toggler}/>
            ))}
            <button onClick = {props.clear}>Clear Completed</button>
        </div>
    )
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
