import React, { Component } from 'react';
import './App.css';
import Cats from "./Cats";
import data from './data'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Cats data={data}/>
      </div>
    );
  }
}

export default App;
