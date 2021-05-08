import React, { Component } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ZilliqaCompound from './components/ZilliqaCompound';

class App extends Component {
  constructor() {
    super();
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
