import React from 'react';
import './CheckOut.css';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import PizzaMan from "../assets/PizzaMan.png";

function CheckOut({toppings}) {
let navigate = useNavigate();
const [success, setSuccess] = useState(false);


  return (
	 <div className='main2'>
   <div>
   <div>
   <h1 className='all'>my toppings</h1>
   {Object.keys(toppings).map((topping)=>{
    return(
      toppings[topping] &&
      <p className='order' key={topping.toString()}>{topping[0].toUpperCase()}
      {topping.substring(1)}</p>
    )
   })}
   <div className='all'>
   <button className='Button' onClick={()=>setSuccess(true)}>Confirm</button>
   <button className='Button' onClick={()=>navigate("/",{ replace: true })}>Go Back</button>
   </div>

   </div>
   </div>
   <div style={{flex:1}}>
        {success && (
          <div className='Success'>
            <img  className='image2' src={PizzaMan} alt="pizzaman"/>
            <div className='Fonts'>
              We have received your order, Thank you
            </div>
            <div className='Fonts2'>
              Order #{Math.round(Math.random() * 100000)}
            </div>
            <div className='Fonts3'>
              Will be ready in 20-30 min.
            </div>
          </div>
        )}
   </div>
   </div>
  )
}

export default CheckOut