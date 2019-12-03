import React, {Component} from 'react';
import styled from 'styled-components';
class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }

    changeHandler = e => {
        e.preventDefault();
        this.setState({newTodo: e.target.value})
        console.log(e.target.value);
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        });
        console.log('submit handler clicked')
    };

    render() {
        console.log('rendering form')
        return(
            <FormContainer>
                <Form onSubmit = {this.submitHandler}>
                    <InputContainer>
                        <Input 
                            type = 'text'
                            name = 'todo'
                            onChange = {this.changeHandler}
                            value = {this.state.newTodo}
                            />
                    </InputContainer>
                    <ButtonContainer>
                        <AddButton>Add</AddButton>
                    </ButtonContainer>
                </Form>
                
            </FormContainer>
        )
    }
}

export default TodoForm;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;

`

const Form = styled.form`
    display: flex;
    width: 100%;
    height: 3rem;
    padding-left: 5%;
`
const InputContainer = styled.div`
    width: 70%;
`

const Input = styled.input`
    background: #FDD1F5;
    height: 2.2rem;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #AE1FCC;
    outline: 0;
`
const ButtonContainer = styled.div`
    width: 30%;
    padding-left: 2%;
`

const AddButton = styled.button`
    background: #99FFA4;
    border: 1px solid #99FFA4;
    height: 2.4rem;
    width: 80%;
    margin: 0 auto;
`