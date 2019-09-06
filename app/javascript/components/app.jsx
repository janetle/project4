
import React from 'react';
import Header from './header';
import Banner from './banner';
import Products from './products';
import Mailer from './mailer';
import Footer from './footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      item:'hahaha',
      products: [],
      list: [],
      cart:[],
      subtotal: 0,
      searchWord: null
    

    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
   
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
    this.setState({searchWord: event.target.value})
  }

  submitHandler(event) {
    event.preventDefault()
    let searchWord = this.state.searchWord
    console.log(searchWord);
    let products = this.state.products
    let searchResult = [];

    products.map(product => {
      if (searchWord === product.name || product.description.includes(searchWord)){
        searchResult.push(product);
        
      }

    })
    this.setState({products: searchResult})

  }
 	
 
  render() {
 
	  	const { error, isLoaded, products} = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else {
		    return (
		      <div>
		      	<Header submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
		      	<Banner/>
		      	<Products products = {this.state.products}/>
		      	<Mailer/>
		      	<Footer/>

		      </div>
		    );
	  	}
	}
}

export default App;