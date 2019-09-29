
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
    this.reset = this.reset.bind(this);
  };
  
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
  reset() {
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isAllProduct: false,
      isCurrentTea: false
    })
  };

  home(event) {  
    const reset = this.reset;
    reset();
  };
  
  selectTea(event) { 
    const reset = this.reset; 
    reset()
    this.setState({isTeaClicked: true})
  }

  changeHandler(event) {                   //search Input
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
      if (searchWord.toLowerCase() === product.name.toLowerCase() || product.description.includes(searchWord.toLowerCase())){
        newSearchResult.push(product);
      }
    });
    const reset = this.reset; 
    reset()
    this.setState({searchOn:true, searchResult: newSearchResult, });
    console.log(this.state.searchResult.length)
  };

  addCart(event){ 
    let id = event.target.id;
    let addedItem = this.state.products.find(x => x.id === parseInt(id));
    let quantity = this.state.quantity;
    let isAdded = !this.state.isAdded;
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.product.id === parseInt(id))

    if (index === -1){
      this.setState({
        cart: [{product: addedItem, quantity:quantity}, ...this.state.cart] 
      });
    } else {
      cart[index].quantity  += parseInt(quantity);
      this.setState({cart: cart});
    }
};;

  showCart(event){
    const reset = this.reset; 
    reset();
    this.setState({isCartClicked: true});
  };

  selectItem(event){             //show single item
    console.log("original product id: ", event.target.id)
    let id = event.target.id;
    console.log(event.target)
    let selectedItem = this.state.products.find(x => x.id === parseInt(id));
    console.log(id);
    let similarTaste = [];
    let teaId = selectedItem.tea.id
    this.state.products.map(product => {
      if (product.tea.id === teaId){
        similarTaste.push(product)
      }
    });
    const reset = this.reset; 
    reset();
    this.setState({isCurrentItem: true, currentItem: selectedItem, similarTaste: similarTaste});

  };

  showCurrentTea(event) {       //show all the tea in one category
    event.preventDefault();  
    let id = parseInt(event.target.id);
    let products = this.state.products;
    let selectedTea = [];
    products.map (product => {
      if (product.tea.id === id) {
        selectedTea.push(product);
      }
    });
    const reset = this.reset; 
    reset();
    this.setState({isCurrentTea: true, isCurrentTea: true,});
  };

  selectOnChange(event) {
    let quantity = event.target.value;
    this.setState ({quantity: quantity})
  };

  removeItem(event) {
    let id = event.target.id;
    this.state.cart.splice(id,1);
    this.setState ({ cart: this.state.cart});
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
    const reset = this.reset; 
    reset();
    this.setState({isAllProduct: true,});
  }
 	
  render() {
  	const { 
      error, 
      isLoaded, 
      products, 
      searchOn,
      searchWord, 
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
    const header = () =>{
      return(
        <Header home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} 
                allProducts = { this.allProducts} />
                
        )
    };
    const displayCart = () => {
      return(
        <Cart cart= {cart} removeItem = {this.removeItem}
              changeQuantity = {this.changeQuantity}
              allProducts = {this.allProducts} />
        )
    };
    const displayItem = () => {
      return (
        <Item currentItem= {currentItem} 
              similarTaste = {similarTaste} 
              addCart = {this.addCart} 
              selectItem = {this.selectItem}
              selectOnChange = {this.selectOnChange}/>
        )
    };
    const displayAllProducts = () => {
      return (
        <AllProducts
            products = {this.state.products}  
            addCart = {this.addCart} 
            selectItem = {this.selectItem}
            selectOnChange= {this.selectOnChange} />
        )
    };
    const displayProducts = () => {
      
      return (
        <Products 
            products = {products}  
            addCart = {this.addCart} 
            selectItem = {this.selectItem}
            selectOnChange= {this.selectOnChange}/>
             
        )
    };
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    
    } else if (searchOn && searchWord.length > 0 ) {
      return (
        <div>
          {header()}
          <Banner />
          <Search  addCart = {this.addCart} 
                   selectItem = {this.selectItem}
                   searchResult = {searchResult}/>
          <Footer/>
        </div>
      );
       
    } else if (isCartClicked){
        return (
          <div>
            {header()}
            {displayCart()}
            <Footer/>
          </div>
          );
    } else if (isCurrentItem){
        return(
          <div>
             {header()}
             {displayItem()}
            <Footer/>
        </div>
        ); 
    } else if(isTeaClicked){
        return(
          <div>
            {header()}
            <Tea tea ={tea} showCurrentTea = {this.showCurrentTea}/>
          </div>
          );
    } else if(isCurrentTea) {
        return (
          <div>
            {header()}
            <CurrentTea selectItem = {this.selectItem} 
              currentTea = {currentTea} addCart = {this.addCart}/>
            <Footer/>
          </div>
          );
    } else if(isAllProduct){
        return(
          <div >
            {header()}
            {displayAllProducts ()}
          </div>
          );
    } else {
	    return (
	      <div className = "container-fluid">
	      	{header()}
	      	<Banner/>
          <div className= "product-container">
		        {displayProducts()}
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