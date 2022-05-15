import "../css/Navigation.css"
import React from "react";
import { NavLink } from "react-router-dom";
import Study from "../images/Study-Hub.svg";
import Blog from "../images/Blog-Hub.svg";
import Game from "../images/Gaming-Hub.svg";
import Tech from "../images/Techie-Hub.svg";
import Settings from "../images/Settings.svg";

import "../css/Navigation.css"

const Navigation = () => {
    return (
        <>
           <div className="contnav">
               <ul className="contnavul">
                   <li><NavLink className="navicon" to="/"><img className="imgs" src={Study} alt='' /></NavLink></li>
                   <li><NavLink className="navicon" to="/blog"><img className="imgs" src={Blog} alt='' /></NavLink></li>
                   <li><NavLink className="navicon" to="/game"><img className="imgs" src={Game} alt='' /></NavLink></li>
                   <li><NavLink className="navicon" to="/tech"><img className="imgs" src={Tech} alt='' /></NavLink></li>
                   <li><NavLink className="navicon" to="/settings"><img className="imgs" src={Settings} alt='' /></NavLink></li>
               </ul>
           </div>
        </>
    );
}

export default Navigation;