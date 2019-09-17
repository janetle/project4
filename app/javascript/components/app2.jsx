import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Products from './products';
import Footer from './footer';
import Banner from './banner';
import Header from './header';


const initialState = {
      searchOn: false,
      isCartClicked: false,
      isCurrentItem: false,
      isTeaClicked: false,
      isCurrentTea: false,
      isAllProduct: false,


}
const reducer = (state, action) =>{
  switch(action.type){
    case "search":
      return{ ...state, searchOn:true};
    case "cart":
      return{ ...state, isCartClicked:true};
    case "item":
      return{ ...state, isCurrentItem:true};
    case "tea":
      return{ ...state, isTeaClicked:true};
    case "currentTea":
      return{ ...state, isCurrentTea:true};
    case "all":
      return{ ...state, isAllProduct:true};
    default:
      return state;

  }
}

function App2 () {
  const [products, setProducts] = useState([]);
  const [tea, setTea] = useState([]);
  const [isTeaClicked,setIsTeaClicked] = useState(false);
  useEffect(() => {
    const fetchProducts = async ()=> {
    const result = await axios('/products.json')
    // console.log(result.data)
    setProducts(result.data);
    };
    fetchProducts();
    const fetchTea = async () => {
      const result = await axios ('/teas/index',)
      console.log(result.data);
      setTea(result.data);
    
    }
    fetchTea();

  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <Header 
      cart = {[1, 2, 3]}
      selectTea = {() => setIsTeaClicked(true) }
      />
      <Banner />
      <Products products = {products}/>
      <Footer />
    </div>
      
    );
}

export default App2;

