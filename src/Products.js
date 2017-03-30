import React, { Component } from 'react';


let PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
export default class Products extends Component {
  render(){
    let displayProducts = [];
    let category = null;

    PRODUCTS.forEach((eachProduct) => {
      if(eachProduct.name.indexOf(this.props.search) == -1 || (!eachProduct.stocked && this.props.inStockOnly)){
        return;
      }
      if(eachProduct.category !== category){
        displayProducts.push(<h4>{eachProduct.category}</h4>)
      }
      let name = eachProduct.stocked ?
                    eachProduct.name :
                    <span style={{color: 'red'}}>
                      {eachProduct.name}
                    </span>;

      displayProducts.push(<h5>{name}  {eachProduct.price}</h5>);
      category = eachProduct.category;
    });
    if(displayProducts.length == 0){
      displayProducts = 'No product match'
    }
    return (
      <div>
        { displayProducts.length > 0 && <div>
          <h5>Name  Price</h5>
          {displayProducts}
          </div>
        }
      </div>
    );
  }
}
