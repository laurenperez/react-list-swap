import React, { Component } from 'react';
import './App.css';
import Child1 from './Child1';
import Child2 from './Child2';

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr1: ["bucket", "beach ball", "shovel", "towel", "umbrella"],
      arr2: ["sunscreen", "swim suit", "flip flops"]
    }
  }
  handleMove = key => {
    let tempArr1 = this.state.arr1;
    let item = tempArr1.splice(key, 1);
    let tempArr2 = this.state.arr2;
    tempArr2.push(item[0]);
    this.setState({
      arr1: tempArr1,
      arr2: tempArr2
     });
  }

  render() {
    return (
      <div className="App">
        <Child1 arr1={this.state.arr1} handleMove={this.handleMove}/>
        <Child2 arr2={this.state.arr2}/>
      </div>
    );
  }
}

export default App;
