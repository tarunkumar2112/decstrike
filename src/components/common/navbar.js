import React from 'react'
import {  NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import Logo from './logos.png'
import Buy from './Buy-stock.png'
import My from './my-stocks.png'
import Pendings from './pending.png'
import Orderss from './order.png'
import Settingss from './setting.png'
import History from './history.png'
import Insightss from './insights.png'

   const navbar = () => {
  return (
    <>
   <Navbar bg="light" expand="lg">
    <img src={Logo} 
    className="imgs"
    alt="logo"
    / 
    >
  <Container fluid>
 
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <NavLink className='menu-item' to='/' isactive ><img src={My} alt="menu"/ >My stocks</NavLink>
      <NavLink className='menu-item' to='/buystock'><img src={Buy} alt="menu"/ >Buy Stockes</NavLink>    
      <NavLink className='menu-item' to='/pending'><img src={Pendings} alt="menu"/ >Pending</NavLink>
      <NavLink className='menu-item' to='/orders'><img src={Orderss} alt="menu"/ >Orders</NavLink> 
      <NavLink className='menu-item' to='/insights'><img src={Insightss} alt="menu"/ >Insights</NavLink>  
      <NavLink className='menu-item' to='/history'><img src={History} alt="menu"/ >History</NavLink>       
      <NavLink className='menu-item' to='/settings'><img src={Settingss} alt="menu"/ >Settings</NavLink>  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{/* active clr chnage */}
{/* style={({isActive})=>{return{background: isActive ? 'red': ''}}} */}
    </>
  );
};
export default navbar;