import React, { Component } from 'react';
import './App.css';
import App from './App';


class Child1 extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   //something
    // }
  }
  handleClick = e => {
    e.preventDefault();
    let key = e.target.getAttribute('data-key');
    this.props.handleMove(key);
  }


  render() {
    let list1 = this.props.arr1.map((item, index) => (
      <li>{item} <button type="button" key={index} data-key={index} onClick={(e)=>this.handleClick(e)} >Move</button></li>
    ))
    return (
      <div className="App">
        <ul>
          {list1}
        </ul>
      </div>
    );
  }
}

export default Child1;
