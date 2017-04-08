import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
  create(anItem, index) {
    return (<ToDoItem key={index} anItem={anItem} />);
  }

  render() {
    const { aList } = this.props;
    console.log('aList = ', aList);
    return (
      <div id="to-do-list">
        {
          aList.map(this.create)
        }
      </div>
    );
  }
}

export default ToDoList;
