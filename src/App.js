import React, { Component } from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      listItems: [],
    };
  }

  deleteItem = (display) => {
    let tempList = this.state.listItems;
    let keyArray = this.state.listItems.map((listItem) =>
      listItem.key
    );
    let index = keyArray.indexOf(display);
    if (index > -1){
      tempList.splice(index, 1);
    }
    this.setState({
      listItems: tempList
    });
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    let arrayItem = <TodoItem onClick={(display) => this.deleteItem(display)} display={this.state.value} key={this.state.value}/>;
    this.setState({
      listItems: this.state.listItems.concat(arrayItem),
      value: ""
    });
    e.preventDefault();
  }

  render () {
    const { listItems } = this.state;
    console.log(listItems);
    return (
      <div className="App">
        <div className="page-cover">
          <div className="inputAndButton">
            <h1> Todo List </h1>
            <form onSubmit={this.handleSubmit}>
              <input id="text-input" type="text" value={this.state.value} onChange={this.handleChange} autoFocus="autofocus"/>
              <button id="red-button"> Add </button>
            </form>
          </div>
          {listItems}
        </div>
      </div>
    );
  }
}

export default App;
