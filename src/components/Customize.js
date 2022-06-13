import React from 'react';
import Cheese from  "../assets/Cheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

function Customize() {
  return (
	 <div className='parent'>
   <div className='child'>
   <div className='grandchild'>
   <img className='image toppings'src={Cheese} alt='cheese'/>
   <img className='image toppings'src={Olive} alt='olive'/>
   <img className='image toppings'src={Pineapple} alt='pineapple'/>
   <img className='image toppings'src={Mushroom} alt='mushroom'/>
   <img className='image toppings'src={Basil} alt='basil'/>
   <img className='image toppings'src={Tomato} alt='tomato'/>
   <img className='image'src={Base} alt='pizza base'/>


   </div>
   </div>
   <div className='child'>CheckOut</div>
   </div>
  )
}

export default Customize