import React from 'react';
import './CheckOut.css';

function CheckOut({toppings}) {

  return (
	 <div className='main'>
   <div>
   <div>
   <h1>mu toppings</h1>
   {Object.keys(toppings).map((topping)=>{
    return <p>{topping}</p>
   })}
   </div>
   </div>
   <div>success</div>
   </div>
  )
}

export default CheckOut