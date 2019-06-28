import React, { Component } from 'react';

class TodoItem extends Component {
  render () {
    const { display } = this.props;
    return (
      <div onClick={() => this.props.onClick(display)} className="listItem">
        {display}
      </div>
    );
  }
}

export default TodoItem;
