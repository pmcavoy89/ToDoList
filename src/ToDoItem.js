import React, { Component } from 'react';

class ToDoItem extends Component {
  constructor(props) {
    super(props);

    this.strikeThrough = this.strikeThrough.bind(this);
    this.state = {
      checked: false,
    };
  }

  strikeThrough() {
    const { checked } = this.state;

    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { anItem } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <label>
          <input type="checkbox" onClick={this.strikeThrough} checked={checked} />
          {anItem}
        </label>
        <br />
      </div>
    );
  }
}

export default ToDoItem;
