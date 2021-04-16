import React, { Component } from 'react';
import './App.css';
import App from './App';


class Child2 extends Component {
  constructor(props) {
    super(props);
  }
  componentWillReceiveProps(props) {
    console.log(props);
  }
  render(){
    var displayItems = this.props.arr2.map(function(item, index) {
      return (<li>{item}</li>);
    });
    return (
      <div className="App">
        <ul>
          {displayItems}
        </ul>
      </div>
    );
  }
}

export default Child2;
