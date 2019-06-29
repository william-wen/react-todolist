import React, { Component } from 'react';
import { Popconfirm, message, Icon } from 'antd';
import FlipMove from "react-flip-move";
import 'antd/dist/antd.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key){
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <div>
        <li key={item.key} onClick={() => this.delete(item.key)}> {item.text} </li>
        <Popconfirm
          title="Are you sure you want to delete this item?"
          placement="right"
          onConfirm={() => this.delete(item.key)}
          okText="Yes"
          cancelText="No"
        >
          <Icon className="minus-icon" type="minus-circle" style={{ fontSize: "16px" }}/>
        </Popconfirm>
      </div>
    );
  }
  render () {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="listItem">
      <FlipMove duration={250} easing="ease-out">
        {listItems}
      </FlipMove>
      </ul>
    );
  }
}

export default TodoItem;
