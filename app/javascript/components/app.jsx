
import React from 'react';
import Header from './header';
import Banner from './banner';
import Products from './products';
import Mailer from './mailer';
import Footer from './footer';
import Search from './search';
import Cart from './cart';
import Item from './item';
import Tea from './tea';
import CurrentTea from './tea_cate';
import About from './about';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: false,
      tea: [],
      currentTea: "",
      searchResult:[],
      currentItem:'',
      products: [],
      list: [],
      cart:[],
      subtotal: 0,
      searchWord: null,
      quantity: 1
    
    };
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

  home(event){                //back to main page
    
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: false
    })
  };
  
  selectTea(event) {          // to Category page
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
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
      searchResult: newSearchResult
    });

  };
  addCart(event){ 
    let id = event.target.id -1;
    let addedItem = this.state.products[id];
    let quantity = this.state.quantity;
    console.log(quantity)
    this.setState({ 
      cart: [{product: addedItem, quantity:quantity}, ...this.state.cart]
    });
  };

  showCart(event){
    this.setState ({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isCurrentTea: false,
      isTeaClicked: false,
      isCartClicked: true
    })
  };

  selectItem(event){             //show single item

    let id = event.target.id - 1;
    console.log(id)
    let selectedItem = this.state.products[id];
    console.log(selectedItem)
    this.setState({
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: true,
      currentItem: selectedItem 

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
      currentTea: selectedTea
    })
  }

  selectOnChange(event) {
    // console.log(event.target.value)
    let quantity = event.target.value;
    // console.log(quantity);
    this.setState ({quantity: quantity})
  };

  removeItem(event) {
    let id = event.target.id;
    // console.log(id);
    this.state.cart.splice(id,1);
    this.setState ({ cart: this.state.cart});
    // console.log("removing")
  };

  changeQuantity(event){
    console.log(event.target.id)
    console.log("entered change quatity")
    // console.log(event.target.value)
    let newQuantity = event.target.value;
    let id = event.target.id;
    console.log(newQuantity);
    let currentCart = this.state.cart;
    currentCart[id].quantity = newQuantity;

    this.setState({
      cart: currentCart
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
        currentItem,
        currentTea,
        isCurrentTea, 
        isCurrentItem,
        isTeaClicked,
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
                     searchResult = {searchResult}/>
            <Mailer/>
            <Footer/>

          </div>
          )
      } else if (isCartClicked ){
          // let currentCart = {cart};
          // alert(currentCart);
          // if (currentCart.length > 0){
            return (
               <div>
                <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
                <Cart cart= {cart} removeItem = {this.removeItem}
                      changeQuantity = {this.changeQuantity} />
               
                <Footer/>

              </div>
              )
          // } else {
          //   let n = currentCart.length;
          //   console.log(n);
          //   return (
          //      <div>
          //       <Header home = {this.home} cart ={cart} showCart = {this.showCart} submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>

          //       <Banner/>
          //       <p>There's no item in your cart</p>
          //       <Footer/>

          //     </div>
          //     )
              
          // }
      } else if (isCurrentItem){
         return(
          <div>
            <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
            <Item 
                currentItem= {currentItem}  
                addCart = {this.addCart} 
                selectOnChange = {this.selectOnChange}/>
           
            <Footer/>

          </div>
          )

      } else if(isTeaClicked){
          return(
            <div>
            <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
              <Tea tea ={tea} showCurrentTea = {this.showCurrentTea}/>

            </div>
            )
      } else if(isCurrentTea) {
        console.log("CURRENT TEA", currentTea);
          return (
            <div>
               <Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
                <CurrentTea selectItem = {this.selectItem} currentTea = {currentTea} addCart = {this.addCart}/>
                <Footer/>

            </div>
            )
      } else {

		    return (
		      <div>
		      	<Header 
                home = {this.home} cart ={cart} 
                showCart = {this.showCart} 
                submitHandler={this.submitHandler} 
                changeHandler={this.changeHandler}
                selectTea ={this.selectTea} />
		      	<Banner/>
		      	<Products 
                products = {this.state.products}  
                addCart = {this.addCart} 
                selectItem = {this.selectItem} />
            <About />
		      	<Mailer/>
		      	<Footer/>

		      </div>
		    );
	  	}
	}
}

export default App;