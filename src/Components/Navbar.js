import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  return (
    <nav className='NavbarItems' >
     <h1 className='navbar-logo'>Shoe Store</h1>

     <div className='menu-icons'>
      
     </div>

     <ul className='nav-menu'>
        { MenuItems.map((item, index) => {
          return(
            <li key={index}>
            <Link className={item.cName} to={item.url} >
            {item.titile}
            </Link>
            
        </li>
        
          )
        })}
     
     </ul>
    </nav>
  )
}

export default Navbar