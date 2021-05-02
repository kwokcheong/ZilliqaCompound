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
    return (
      <div>
        <Header title="Zilliqa Compound Calculator v2"/>
        <ZilliqaCompound/>
      </div>
    );
  }
}

export default App;
