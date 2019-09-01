import React from 'react';
import Todos from './Todos'

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play the cricket'}
    ]
  }
  render(){
    return(
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todos</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

