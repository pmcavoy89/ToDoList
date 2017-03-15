import React, { Component } from 'react';
import ToDoList from './ToDoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // TODO: Pull the list from a server
    this.state = {
      toDoList: [
        "Poop",
        "Coffee",
        "Make eggs",
        "Call tech support",
      ],
    };
  }

  render() {
    const { toDoList } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo Example</h2>
        </div>
        <p className="App-intro">
          This is an application designed to accept an item to do. After completing the item to do, a user may check the item as done.
        </p>
        <ToDoList aList={toDoList} />
      </div>
    );
  }
}

export default App;
