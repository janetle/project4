
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
      subtotal: 0
    

    };
   
  }

  componentDidMount() {
    fetch('/products.json')
    
      .then(res => res.json())

      .then(
        (result) => {
        	console.log(result)
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
 	
 
  render() {
 
  	console.log(this.state.products)
	  	const { error, isLoaded, products} = this.state;
	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else {
		    return (
		      <div>
		      	<Header/>
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