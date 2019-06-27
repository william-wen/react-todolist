import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      listItems: [],
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    })
  }

  handleClick = (value) => {
    let arrayItem = <div> {value} </div>;
    this.setState({
      listItems: this.state.listItems.concat(arrayItem)
    });
  }

  render () {
    const { value, listItems } = this.state;
    return (
      <div className="App">
        <div className="inputAndButton">
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
          <button onClick={() => this.handleClick(value)}> Add </button>
        </div>
        {listItems}
      </div>
    );
  }
}

export default App;
