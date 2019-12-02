import React, {Component} from 'react';

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
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input 
                        type = 'text'
                        name = 'todo'
                        onChange = {this.changeHandler}
                        value = {this.state.newTodo}
                        />
                    <button>Add</button>
                </form>
                
            </div>
        )
    }
}

export default TodoForm;