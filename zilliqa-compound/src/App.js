import logo from './logo.svg';
import React, { Component } from 'react';
import Header from './components/Header';
import SingleTodo from './SingleTodo';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ZilliqaCompound from './components/ZilliqaCompound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  //e is taking in an event
  onInputChange = e => {
    //currentTodo becomes e.target.value
    this.setState({ currentTodo: e.target.value })
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: ""})
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();

    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  }

  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
      return(
        <SingleTodo todo={e} delete={() => this.deleteTodo(i) } />
      )
    });
    return (
      <div>
        <ZilliqaCompound/>
      </div>
    );
  }
}

export default App;
