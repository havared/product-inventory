import React, { Component } from 'react';
import './App.css';
import Product from './Products.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search : '',
      checkbox: false
    }
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    });
  }

  handleChangeChkBox(){
    this.setState({
      checkbox: !this.state.checkbox
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Inventory</h2>
        </div>
        <div className="App-body">
          <input className="searchField" type="text" value={this.state.search} placeholder="Search Inventory" onChange={this.handleChange.bind(this)} />
          <p>
            <input type="checkbox" value={this.state.checkbox} onChange={this.handleChangeChkBox.bind(this)}/>
            Only show products in stock
          </p>
          <Product search = {this.state.search} inStockOnly = {this.state.checkbox}/>
        </div>
      </div>
    );
  }
}

export default App;
