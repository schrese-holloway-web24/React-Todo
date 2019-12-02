import React from 'react';

//components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos, 
      
    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggler = id => {
    this.setState({
      todos: this.state.todos.map(i => {
        if(i.id === id) {
          return {
            ...i,
            completed: !i.completed 
          } 
        } else {
          return i
        }
      }) 
    })
  }
  clear = () => {
    this.setState({
      todos: this.state.todos.filter(i => {
        console.log(i.completed)
        return i.completed === false
      })
    })
  }
  

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggler = {this.toggler} clear = {this.clear}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
