import './App.css';
import Header from './components/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import CheckOut from './components/CheckOut.js'
import Customize from './components/Customize';

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
    <Routes>
         <Route path="/" element={<Customize/>}/> 
          <Route path="/checkout" element={<CheckOut/>} /> 
          </Routes> 
      </Router>   
      </div>


  );
}

export default App;
