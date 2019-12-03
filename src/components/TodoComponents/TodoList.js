import React from 'react';
import styled from 'styled-components';

//components
import Todo from './Todo';

const TodoList = props => {

    return(
        <Container>
            <TheList>
                {props.todos.map(i => (
                    <Todo key={i.id} i = {i} toggler = {props.toggler}/>
                ))}
            </TheList>
            <ButtonContainer>
                <ClearButton onClick = {props.clear}>Clear Completed</ClearButton>
            </ButtonContainer>
        </Container>
    )
}

export default TodoList;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const TheList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding-bottom: 5%;
    
`
const ButtonContainer = styled.div`
    padding: 5%;
`

const ClearButton = styled.button`
    background: #99FFA4;
    border: 1px solid #99FFA4;
    height: 50px;
    width: 170px;
    margin: 0 auto;

`