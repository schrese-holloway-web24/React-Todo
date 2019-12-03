import React from 'react';
import styled from 'styled-components';

import './Todo.css'

const Todo = props => {


    return(
        <TaskContainer>
            <Task className = {`task${props.i.completed ? ' completed' : ''}`} onClick = {() => props.toggler(props.i.id)}>
                    <TaskText>{props.i.task}</TaskText>   
            </Task>
        </TaskContainer>
    )
}

export default Todo;

const TaskContainer = styled.div`
    display: flex;
    justify content: space-around;
    flex-wrap: wrap;
    width: 40%;
    padding: 0 5%;
`

const Task = styled.div`
    width: 100%;
    text-align: left;
    margin: 4px 0;
    padding-left: 8px;
`

const TaskText = styled.p`
    font-size: 1.2rem;
    cursor: pointer;
`