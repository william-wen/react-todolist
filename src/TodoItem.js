import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props){
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  delete(key){
    this.props.delete(key);
  }

  createTasks(item) {
    return <li key={item.key} onClick={() => this.delete(item.key)}> {item.text} </li>
  }
  render () {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="listItem">
        {listItems}
      </ul>
    );
  }
}

export default TodoItem;
