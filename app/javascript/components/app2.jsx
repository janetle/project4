import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Products from './products';
import AllProducts from './showAll';
import Mailer from './mailer';
import About from './about';

import Footer from './footer';
import Banner from './banner';
import Header from './header';
import Tea from './tea';


const initialState = {
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: false,
      isAllProducts: false,
  
};

const reducer = (state, action) =>{
  switch(action.type){
    case "search":
      return{ ...state, searchOn:true}
    case "cart":
      return{ ...state, isCartClicked:true};
    case "item":
      return{ ...state, isCurrentItem:true};
    case "tea":
      return{ ...state, isTeaClicked:true};
    case "currentTea":
      return{ ...state, isCurrentTea:true};
    case "all":
      return{ ...state, isAllProducts:true};
    case "reset":
      return(initialState);

    default:
      return state;

  };
};

const App2 = ()=> {
  const [products, setProducts] = useState([]);
  const [tea, setTea] = useState([]);
  const [searchWord,setSearchWord] = useState('');
  useEffect(() => {
    const fetchProducts = async ()=> {
      const result = await axios('/products.json')
      setProducts(result.data);
    };
    fetchProducts();

    const fetchTea = async () => {
      const result = await axios ('/teas/index',)
      setTea(result.data);
    }
    fetchTea();

  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const allProducts = event =>{ 
    dispatch({type:'reset',event});
    dispatch({type:'all',event});

  }
  const changeHandler = (event) => {
    setSearchWord(event.target.value);
  };
  // const submitHandler = (event) => {
  //   const searchList = {products.filter(x => x.name.toLowerCase().includes(searchWord.toLowerCase()))};  
  //   setProducts(searchList);
  // }
  const header = () => {
    return (
      <Header home = {event => dispatch({type:'reset',event})}
      cart = {[1, 2, 3]}
      selectTea = { event => dispatch({type:'tea',event})}
      allProducts = {allProducts}
      />
      )
  }

  if(state.isTeaClicked) {
    return (
      <div>
      {header()};
      
      <Tea tea = {tea}/>
      <Footer />
    </div>
      )
  } else if(state.isAllProducts){
    return(
      <div>
        
      {header()}
        
        <AllProducts products = {products}  />
            
        <Footer />
      </div>
      )

  } else {
    return (
      <div>
        {header()}
        <Banner />
        <Products products = {products}/>
        <About />
        <Mailer/>
        <Footer />
      </div>
        
      );
  }
}

export default App2;

