
import React from 'react';
import Header from './header';
import Banner from './banner';
import Products from './products';
import AllProducts from './showAll';
import Mailer from './mailer';
import Footer from './footer';
import Search from './search';
import Cart from './cart';
import Item from './item';
import Tea from './tea';
import CurrentTea from './tea_cate';
import About from './about';



const initalState = {
      error: null,
      isLoaded: false,
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: false,
      isAllProduct: false,
      tea: [],
      currentTea: "",
      searchResult:[],
      currentItem:'',
      similarTaste:[],
      products: [],
      list: [],
      cart:[],
      subtotal: 0,
      searchWord: null,
      quantity: 1
    
    };


class App extends React.Component {
  constructor() {

    super();
    this.state = initalState;
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.addCart = this.addCart.bind(this);
    this.showCart = this.showCart.bind(this);
    this.selectItem= this.selectItem.bind(this);
    this.selectTea= this.selectTea.bind(this);
    this.showCurrentTea= this.showCurrentTea.bind(this);
    this.home= this.home.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.allProducts = this.allProducts.bind(this);
  }
  
  componentDidMount() {
    fetch('/products.json')         //fetch all teas
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
      .then(fetch('/teas/index')      //fetch categories
          .then(res => res.json())

          .then(
            (result) => {
              
              this.setState({
                isLoaded: true,
                tea: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          ))
  } 

  home(event) {                //back to main page
    
    this.setState({
          searchOn: false,
          isCartClicked: false,
          isCurrentItem: false,
          isTeaClicked: false,
          isAllProduct: false,
          isCurrentTea: false
    })
  };
  
  selectTea(event) {          // to Category page
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
      isAllProduct: false,
      isTeaClicked: true

    })
  }

  changeHandler(event) {                   //search Input
    console.log(event.target.value)
    this.setState({
      searchWord: event.target.value,
      searchResult: []
    })
  };

  submitHandler(event) {
    event.preventDefault()                  //search
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
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
      isTeaClicked: true,
      isAllProduct: false,
      searchResult: newSearchResult
    });

  };
  addCart(event){ 
    let id = event.target.id;
    let addedItem = this.state.products.find(x => x.id === parseInt(id));
    
    let quantity = this.state.quantity;
    let cart = this.state.cart;
    {
      this.setState({
        cart: [{product: addedItem, quantity:quantity}, ...this.state.cart] 
      })
    // };
  }
};


  showCart(event){
    this.setState ({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
      isTeaClicked: false,
      isAllProduct: false,
      isCartClicked: true
    })
  };

  selectItem(event){             //show single item
    console.log("original product id: ", event.target.id)
    let id = event.target.id;
    let selectedItem = this.state.products.find(x => x.id === parseInt(id));
    let similarTaste = [];
    let teaId = selectedItem.tea.id
    console.log("tea id: ", teaId)
    this.state.products.map(product => {
      if (product.tea.id === teaId){
        similarTaste.push(product)
      }
    })
    console.log(similarTaste)
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: true,
      isCurrentTea: false,
      isTeaClicked: false,
      isAllProduct: false,
      isCartClicked: false,
      currentItem: selectedItem ,
      similarTaste: similarTaste

    });

  };

  showCurrentTea(event) {       //show all the tea in one category
    event.preventDefault();  
    let id = parseInt(event.target.id);
    console.log(id)
    let products = this.state.products;
    console.log(products)
    let selectedTea = [];
    products.map (product => {
      if (product.tea.id === id) {
        selectedTea.push(product);
      }
    });
    console.log(selectedTea)
    this.setState ({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: true,
      isAllProduct: false,
      currentTea: selectedTea
    })
  }
  selectOnChange(event) {
    let quantity = event.target.value;
    this.setState ({quantity: quantity})
  };

  removeItem(event) {
    let id = event.target.id;
    this.state.cart.splice(id,1);
    this.setState ({ cart: this.state.cart});
    // console.log("removing")
  };

  changeQuantity(event){
    
    let newQuantity = event.target.value;
    let id = event.target.id;
    let currentCart = this.state.cart;
    currentCart[id].quantity = newQuantity;

    this.setState({
      cart: currentCart
    })
  };

  allProducts(event) {
    event.preventDefault(); 
    this.setState ({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
      isTeaClicked: false,
      isCartClicked: false,
      isAllProduct: true,

    })

  }
 	
  render() {
	  	const { 
        error, 
        isLoaded, 
        products, 
        searchOn, 
        searchResult, 
        cart, 
        isCartClicked,
        isAllProduct,
        currentItem,
        currentTea,
        isCurrentTea, 
        isCurrentItem,
        isTeaClicked,
        similarTaste,
        tea
      } = this.state;

	    if (error) {
	      return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      return <div>Loading...</div>;
	    } else if (searchOn){
        return (
          <div>
            <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
            
            <Banner/>
            <Search  addCart = {this.addCart} 
                      selectItem = {this.selectItem}
                     searchResult = {searchResult}/>
           
            <Mailer/>
            <Footer/>
          </div>
        );
      } else if (isCartClicked){
            return (
               <div>
                <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
                <Cart cart= {cart} removeItem = {this.removeItem}
                      changeQuantity = {this.changeQuantity}
                      allProducts = {this.allProducts} />
                <Footer/>

              </div>
              );
         
      } else if (isCurrentItem){
          return(
            <div>
              <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
              <Item 
                currentItem= {currentItem} 
                similarTaste = {similarTaste} 
                addCart = {this.addCart} 
                selectItem = {this.selectItem}
                selectOnChange = {this.selectOnChange}/>
                
              <Footer/>
          </div>
          );
      } else if(isTeaClicked){
          return(
            <div>
              <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
              <Tea tea ={tea} showCurrentTea = {this.showCurrentTea}/>

            </div>
            );
      } else if(isCurrentTea) {
          return (
            <div>
              <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
              <CurrentTea selectItem = {this.selectItem} 
                currentTea = {currentTea} addCart = {this.addCart}/>
              <Footer/>
            </div>
            );
      } else if(isAllProduct){
          return(
            <div >
              <Header 
                  home = {this.home} cart ={cart} 
                  showCart = {this.showCart} 
                  submitHandler={this.submitHandler} 
                  changeHandler={this.changeHandler}
                  selectTea ={this.selectTea} 
                  allProducts = { this.allProducts} />
              

              <AllProducts
                  products = {this.state.products}  
                  addCart = {this.addCart} 
                  selectItem = {this.selectItem}
                  selectOnChange= {this.selectOnChange} />
           
              <Footer/>
            </div>
            );

      } else {

		    return (
		      <div>
		      	<Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
		      	<Banner/>
            <div className= "product-container">
  		      	<Products 
                  products = {this.state.products}  
                  addCart = {this.addCart} 
                  selectItem = {this.selectItem}
                  selectOnChange= {this.selectOnChange} />
            </div>
            <About />
		      	<Mailer/>
		      	<Footer/>

		      </div>
		    );
	  	};
    }
}	 



export default App;