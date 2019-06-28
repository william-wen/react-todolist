import React, { Component } from 'react';
import TodoItem from './TodoItem.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listItems: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem = (e) => {
    if (this._inputElement.value !== ""){
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          listItems: prevState.listItems.concat(newItem)
        };
      });
    }

    this._inputElement.value="";
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.listItems.filter( function(item){
      return (item.key !== key)
    });

    this.setState({
      listItems: filteredItems
    });
  }

  render () {
    const { listItems } = this.state;
    return (
      <div className="App">
        <div className="page-cover">
          <div className="inputAndButton">
            <h1> Todo List </h1>
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} id="text-input" placeholder="Enter Task" autoFocus="autofocus"/>
              <button type="submit" id="red-button"> Add </button>
            </form>
          </div>
          <TodoItem entries={this.state.listItems} delete={(key) => this.deleteItem(key)}/>
        </div>
      </div>
    );
  }
}

export default App;
