import React, { Component } from 'react';

class ToDoListComponent extends Component {

  render() {
    const { anItem } = this.props;
    return (
      <div>
        <label>
          <input type="checkbox" />
          {anItem}
        </label>
        <br />
      </div>
    );
  }
}

export default ToDoListComponent;
