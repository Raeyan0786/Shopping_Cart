//import logo from './logo.svg';
import './App.css';
//import {useState} from 'react';
import Cart from '../src/Component/cart/cart';
import Checkout from './Component/checkout/checkout';
import Filter from '../src/Component/nav/filter';
import { useState } from 'react';
import image1 from './Component/cart/view.jpg'
import {BrowserRouter as Routers,Routes,Route,Switch} from 'react-router-dom'
//import { useDispatch,useSelector } from 'react-redux';

const items = [
  {
    id: 1,
    img:image1,
    name: "Woo Ninja",
    color:"Pink",
    stock:"In Stock",
    price: 35,
    quantity:1,
    size:"XL",
    type:"Hoodies",
    selected:false
  },
  {
    id: 2,
    img:image1,
    name: "Woo Ninja",
    color:"blue",
    stock:"In Stock",
    price: 45,
    quantity:3,
    size:"L",
    type:"Shirt",
    selected:false
  },
  {
    id: 3,
    img:image1,
    name: "Woo Ninja",
    color:"red",
    stock:"In Stock",
    price: 55,
    quantity:5,
    size:"S",
    type:"Jeans",
    selected:false
  },
  ];

function App() {
  // const data=useSelector((state)=> state.post);
  //   console.log(data);
  const [expenses,setExpenses] = useState(items);
  return (
    
      <Routes>
        <Route exact path="/" element={<Cart list={expenses}/>}/>
        <Route exact path="/checkout" element={<Checkout />}/>
      </Routes>
    
    
  );
}

export default App;
