import React, { useState } from "react";
import './SideBar.css';
import Tasks from "./pages/Tasks";
import ECalendar from "./pages/Calendar";
import { BsFillCalendarFill, BsFillMenuButtonWideFill} from "react-icons/bs";
import {BsFillMoonStarsFill, BsBrightnessAltHighFill} from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
  
    let element = document.body;

    element.classList.toggle("dark");

    setIsClicked(isClicked => !isClicked);
        
    
    
  }
return (
  <div className="sidebar">
    <div className="sidebar_container">
     
  <Link to="/calendar" className="links"><BsFillCalendarFill></BsFillCalendarFill></Link>
  <Link to="/tasks" className="links"><BsFillMenuButtonWideFill></BsFillMenuButtonWideFill></Link> 
 
          <div className="buttons_container">
          <button className="dark-mode-btn sidebar_button" onClick={myFunction}>{isClicked ? <BsFillMoonStarsFill/>:<BsBrightnessAltHighFill/>}</button>
         
          </div>
          </div>
          </div>
)}