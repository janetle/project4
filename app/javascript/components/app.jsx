
import React from 'react';
import Header from './header';
import Banner from './banner';
import Products from './products';
import Mailer from './mailer';
import Footer from './footer';
import Search from './search';
import Cart from './cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      searchOn: false,
      isCartClicked: false,
      searchResult:[],
      item:'hahaha',
      products: [],
      list: [],
      cart:[],
      subtotal: 0,
      searchWord: null
    
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.addCart = this.addCart.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  componentDidMount() {
    fetch('/products.json')
    
      .then(res => res.json())

      .then(
        (result) => {
        	
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  } 


  changeHandler(event) {
    console.log(event.target.value)
    this.setState({
      searchWord: event.target.value,
      searchResult: []
    })
  }

  submitHandler(event) {
    event.preventDefault()
    let searchWord = this.state.searchWord;
    let products = this.state.products
    let newSearchResult = [];

    products.map(product => {
      if (searchWord === product.name || product.description.includes(searchWord)){
        newSearchResult.push(product);
      }
    });
    this.setState({
      searchOn:true,

      searchResult: newSearchResult
    });

  }
  addCart(event){
    let id = event.target.id;
    let addedItem = this.state.products[id]
    let updatedCart = [...this.state.cart, addedItem];
    this.setState({cart: updatedCart});
  }

  showCart(event){
    this.setState ({
      searchOn: false,
      isCartClicked: true
    })
  };
 	
 
  render() {
	  	const { error, isLoaded, products, searchOn, searchResult, cart, isCartClicked} = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else if (searchOn){
        return (
          <div>
            <Header cart = {cart} showCart = {this.showCart} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
            <Banner/>
            <Search  addCart = {this.addCart} searchResult = {searchResult}/>
            <Mailer/>
            <Footer/>

          </div>
          )
      } else if (isCartClicked){
        return (
           <div>
            <Header cart ={cart} showCart = {this.showCart} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
            <Cart cart= {cart}  />
           
            <Footer/>

          </div>
          )
      } else {

		    return (
		      <div>
		      	<Header cart ={cart} showCart = {this.showCart} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
		      	<Banner/>
		      	<Products products = {this.state.products}  addCart = {this.addCart}/>
		      	<Mailer/>
		      	<Footer/>

		      </div>
		    );
	  	}
	}
}

export default App;