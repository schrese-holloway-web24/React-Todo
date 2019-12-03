import React from 'react';
import styled from 'styled-components';

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
    completed: false
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
      <TodoApp>
        <Welcome>Welcome to your Todo App!</Welcome>
        <TodoForm addTodo={this.addTodo}/>
        <List>Todo:</List>
        <TodoList todos={this.state.todos} toggler = {this.toggler} clear = {this.clear}/>
        
      </TodoApp>
    );
  }
}

export default App;

const TodoApp = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 3px solid green;
  width: 30%;
  margin: 0 auto;
  background: #66CCAA;
`

const Welcome = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
`

const List = styled.h4`
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
  margin: auto 0;
  padding-left: 5%;
`