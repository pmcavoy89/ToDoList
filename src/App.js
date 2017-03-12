import React, { Component } from 'react';
import ToDoListComponent from './ToDoListComponent';
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
        {
          toDoList.map((anItem, index) => {
            return (
              <ToDoListComponent key={index} anItem={anItem} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
