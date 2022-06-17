import React from 'react';
import Cheese from  "../assets/Cheese.png";
import Base from "../assets/PizzaBase.png";
import Olive from "../assets/Olive.png";
import Pineapple from "../assets/Pineapple.png";
import Mushroom from "../assets/Mushroom.png";
import Basil from "../assets/Basil.png";
import Tomato from "../assets/Tomato.png";
import { motion } from "framer-motion";
import {useNavigate} from 'react-router-dom';
import './Customize.css';

function Customize({toppings, setToppings}) {

    let navigate = useNavigate();

    const onChange = (event, name) => {
    console.log(localStorage);
    let newToppings = JSON.parse(JSON.stringify(toppings));
    newToppings[name] = event;
    setToppings(newToppings);
    localStorage.setItem("toppings", JSON.stringify(newToppings));
  };

  return (
	 <div className='parent customize'>
   <div className='child'>
   <div className='grandchild'>
    <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["cheese"] ? 100 : -100,
  opacity: toppings["cheese"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Cheese} alt="cheese" />
  </motion.div>
   <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["olive"] ? 100 : -100,
  opacity: toppings["olive"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Olive} alt="olive" />
  </motion.div>
  <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["pineapple"] ? 100 : -100,
  opacity: toppings["pineapple"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Pineapple} alt="pineapple" />
  </motion.div>
   <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["mushroom"] ? 100 : -100,
  opacity: toppings["mushroom"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Mushroom} alt="mushroom" />
  </motion.div>
  <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["basil"] ? 100 : -100,
  opacity: toppings["basil"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Basil} alt="basil" />
  </motion.div>
  <motion.div
  initial={{ opacity: 0 }}
  animate={{
  y: toppings["tomato"] ? 100 : -100,
  opacity: toppings["tomato"] ? 1 : 0,
  }}
  transition={{ duration: 1 }}
  className="toppings2">
  <img className='toppings3' src={Tomato} alt="tomato" />
  </motion.div>
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
  <div>
  <button className='proceedToCheckout' 
  onClick={()=>navigate("../checkout",{ replace: true })}>
   Proceed to Checkout 
  </button>
  </div>
   </div>
   </div>
   
  )
}

export default Customize
