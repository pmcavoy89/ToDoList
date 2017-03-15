import React, { Component } from 'react';

const ToDoItem = ({ anItem }) => (
  <div>
    <label>
      <input type="checkbox" />
      {anItem}
    </label>
    <br />
  </div>
);

class ToDoList extends Component {

  render() {
    const { aList } = this.props;
    console.log('aList = ', aList);
    return (
      <div id="to-do-list">
        {
          aList.map((anItem, index) =>
            <ToDoItem key={index} anItem={anItem} />
          )
        }
      </div>
    );
  }
}

export default ToDoList;
