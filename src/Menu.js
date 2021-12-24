import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css";



function Menu(){
    return(
        <>
            <nav>
              <ul>
         {/* <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li> */}

           <li>
              <NavLink to="/" activeStyle={{ fontWeight: "bold", color: "red" }} exact >About
     </NavLink></li>
    <li>
     <NavLink to="/contact" activeStyle={{ fontWeight: "bold", color: "red" }} exact> contact</NavLink>
    </li>
    <li>
      <NavLink to="/feedback" activeStyle={{ fontWeight: "bold", color: "red" }} exact>  Feedback  </NavLink>
    </li>
    <li>
     <NavLink to="/search" activeStyle={{ fontWeight: "bold", color: "red" }} exact>Search</NavLink>
    </li>
    <li>
     <NavLink to="/user/:aman" activeStyle={{ fontWeight: "bold", color: "red" }} exact> User</NavLink>
    </li>
    <NavLink to="/services" activeStyle={{ fontWeight: "bold", color: "red" }} exact>Services</NavLink>

   </ul>
  </nav>
        
        
        </>



    )
}
export default Menu;