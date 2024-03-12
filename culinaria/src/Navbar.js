import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import  './Navbar.css';


function Navbar() {   
    return (     
        <nav>       
            <ul>         
                <li>           <a><Link to="/">Home</Link></a>         </li>         
                       
                <li>           <a><Link to="/contact">Contato</Link></a>       </li>       
            </ul>     
        </nav>   
        ); 
} 

export default Navbar;