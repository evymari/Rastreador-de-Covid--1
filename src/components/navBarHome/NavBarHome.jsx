import React, { useState } from "react";
import './navBarHome.css'
import { NavLink } from "react-router-dom";

function NavBarHome(){
    //change nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 80){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);

    return (
        <>
        <nav className={color ? "nav nav-bg" : "nav"}>
        <div className="leftNavbar">
            <img src={window.scrollY > 80 ? "./src/assets/generalHome/logoConTextoAzul.png" : "./src/assets/generalHome/logoConTextoBlanco.png"}/>
        </div>
        
        <div className="rightNavbar">
            <ul className="navbarUl">
                <li className="navbarLi">Home</li>
                <li className="navbarLi">Prevention</li>
                <li className="navbarLi">Quarantine</li>
                <li className="navbarLi">Pages</li>
                <li className="navbarLi">About</li>
                <li className="navbarLi">Help</li>
                <NavLink to ='/Tracker1'><button  className="trackerNavbar">Tracker</button></NavLink>
            </ul>
        </div>
        <label className="burgerNav"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </label>
        </nav>
        </>
    )
}
export default NavBarHome