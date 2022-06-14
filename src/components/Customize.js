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
  
  const onChange=(event,name)=>{
    let newToppings = JSON.parse(JSON.stringify(toppings));
    newToppings[name] = event;
    setToppings(newToppings);
    localStorage.setItem("toppings", JSON.stringify(newToppings))

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
   <label className='container-checkbox'>
   Pineapple
   <input type="checkbox"
   checked= {toppings["pineapple"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")}/>
   <span className='checkmark'></span>
   </label>
      <label className='container-checkbox'>
   Basil
   <input type="checkbox"
   checked= {toppings["basil"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "basil")}/>
   <span className='checkmark'></span>
  </label>
        <label className='container-checkbox'>
   Olive
   <input type="checkbox"
   checked= {toppings["olive"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "olive")}/>
   <span className='checkmark'></span>
  </label>
    <label className='container-checkbox'>
   Tomato
   <input type="checkbox"
   checked= {toppings["tomato"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")}/>
   <span className='checkmark'></span>
  </label>
      <label className='container-checkbox'>
   Mushroom
   <input type="checkbox"
   checked= {toppings["mushroom"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")}/>
   <span className='checkmark'></span>
  </label>
      <label className='container-checkbox'>
   Cheese
   <input type="checkbox"
   checked= {toppings["cheese"]}
   onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")}/>
   <span className='checkmark'></span>
  </label>
   </div>
   </div>
  )
}

export default Customize

//  <input type='checkbox'
//    id='pineapple' name='pineapple' 
//    value='pineapple' onChange={()=>changeToppings('pineapple')}/>
//    <label htmlFor='pineapple'>Pineapple</label>