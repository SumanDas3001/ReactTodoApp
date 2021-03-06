import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play the cricket'}
    ]
  }
  deleteTodos = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    })
    this.setState({
      todos: todos
    })
  }

  addTodos = (todoValue) => {
    todoValue.id = Math.random();
    let todoData = [...this.state.todos, todoValue];
    this.setState({
      todos: todoData
    })
  }

  render(){
    return(
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todos</h1>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} />
        <AddTodo addTodos={this.addTodos}/>
      </div>
    );
  }
}

export default App;


