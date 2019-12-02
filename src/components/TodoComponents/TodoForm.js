import React, {Component} from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                        type = 'text'
                        name = 'todo'
                        />
                </form>
            </div>
        )
    }
}

export default TodoForm;