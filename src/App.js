import './App.css';
import Header from './components/Header';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut.js'
import Customize from './components/Customize';
import { useState } from 'react';

function App() {
  const[toppings,setToppings]= useState({
     basil: false,
    cheese: false,
    mushroom: false,
    olive: false,
    pineapple: false,
    tomato: false,
  });

  useEffect(()=>{
    const data = localStorage.getItem('toppings');
    if(data){
      setToppings(JSON.parse(data));
    }

  },[])
  return (
    <div className="App">
    <Header />
    <Router>
    <Routes>
         <Route path="/" element={<Customize toppings={toppings} setToppings={setToppings}/>}/> 
          <Route path="/checkout" 
          element={<CheckOut toppings={toppings} />}  
          /> 
          </Routes> 
      </Router>   
      </div>
  );
}

export default App;