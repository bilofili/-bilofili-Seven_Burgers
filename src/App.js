import React from 'react';
import { useState } from 'react';
import { data } from './Dada';
import DisplayData from './DisplayDatat';
import ButtonF from './Button';
import './App.css';
import Contact from './Contact';

import {

  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';


function App() {

const [food, setFood] = useState(data);

const ButtonSwitch = (type) => {
  let chooseTypeDisplay = data.filter(element => element.type === type)
  setFood(chooseTypeDisplay)
}

const ButtonSwitchByID = (Select) => {
  let  chooseTypeDisplayByID = data.filter(element => element.Select === Select)
  setFood(chooseTypeDisplayByID)
}

return <Router>
<div>
  
  <div className='positionNav'>
    <nav>
      <div><Link to="/" className='link'>Home</Link></div>
      <div><Link to="/contact" className='link'>Contact</Link></div>
      <div><Link to="/about" className='link' >About</Link></div>
    </nav>
  </div> 

  <header>
      <h1>Seven Burgers</h1>
    </header> 

  <div className="butto">
    <ButtonF propsButtenF={ButtonSwitch} propsButtonById={ButtonSwitchByID}/>
    </div>
  <div><DisplayData iteamfood={food}/></div>

  <div className='aboutUs'>
    <Routes>  
      <Route path="/contact" element={<About />}></Route>
      <Route path="/about" element={<Contact />}></Route>
    </Routes>
  </div>
</div>
</Router>
}

export default App;
