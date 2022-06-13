import React from 'react';
import Cheese from  "../assets/Cheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";

function Customize({toppings, setToppings}) {
  const changeToppings=(name)=>{
    let newToppings = JSON.parse(JSON.stringify(toppings));
    newToppings[name] = !newToppings[name];
    setToppings(newToppings);
  }
  return (
	 <div className='parent'>
   {JSON.stringify(toppings)}
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
   <div className='child'>
   <input type='checkbox' id='pineapple' name='pineapple' 
   value='pineapple' onChange={()=>changeToppings('pineapple')}/>
   <label htmlFor='pineapple'>Pineapple</label>
   </div>
   </div>
  )
}

export default Customize