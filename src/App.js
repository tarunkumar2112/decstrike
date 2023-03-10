import React, { useState } from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css';
import Homepage from './components/pages/Homepage'
import Buystock from './components/pages/Buystock'
import Navbar from './components/common/navbar'
import Pending from './components/pages/pending';
import Orders from './components/pages/orders';
import Insights from './components/pages/insights';
import History from './components/pages/history';
import Settings from './components/pages/settings';
import Footer from './components/common/footer';
import Portfolio from './components/pages/portfolio';

function App() {
  const [btnstate, setbtnStates] = useState(false);
  //function for toggle in react using usestate 
function handleclick(){
  //setbtnStates in usestate
  setbtnStates(btnstate => !btnstate);
}
//condition for class if else
let toggleClasscheck = btnstate ? 'active' : null;
  return (
   <>
   <div  onClick={handleclick} className={`toggle-btn${toggleClasscheck}`}><i class="fa-solid fa-bars"></i></div>
<div  onClick={handleclick} className={`closed${toggleClasscheck}`}><i class="fa fa-window-close" aria-hidden="true"></i>
</div>
   <div className='main-wrapper'>
<BrowserRouter>
<div className={`sticky-nav ${toggleClasscheck}`}>

<Navbar />

</div>


<div className='contactsection'>
<Routes>
<Route path='/' element={<Homepage/>} />
<Route path='/buystock' element={<Buystock/>} />
<Route path='/pending' element={<Pending/>} />
<Route path='/orders' element={<Orders/>} />
<Route path='/insights' element={<Insights/>} />
<Route path='/history' element={<History/>} />
<Route path='/settings' element={<Settings/>} />
<Route path='/portfolio' element={<Portfolio />} />


</Routes>
</div>
<Footer />
</BrowserRouter>

</div>
   </>
  );
  }

export default App;