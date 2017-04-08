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

  show(anItem, withCheckedValue) {
    let returnValue = anItem;

    if(withCheckedValue)
      returnValue =  <strike>{anItem}</strike>;

    return returnValue;
  }

  render() {
    const { anItem } = this.props;
    const { checked } = this.state;
    return (
      <div>
        <label>
          <input type="checkbox" onClick={this.strikeThrough} checked={checked} />
          {this.show(anItem, checked)}
        </label>
        <br />
      </div>
    );
  }
}

export default ToDoItem;
