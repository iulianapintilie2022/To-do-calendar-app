import React, { useState } from "react";
import './SideBar.css';
import { BsFillBookmarkHeartFill, BsFillPaletteFill, BsHouseFill } from "react-icons/bs";
import { BsFillCalendarFill,BsType, BsFillMenuButtonWideFill} from "react-icons/bs";
import {BsFillMoonStarsFill, BsBrightnessAltHighFill, BsGear, BsHandThumbsUpFill, BsHandThumbsDown, BsTrashFill, BsPersonFill} from "react-icons/bs"


export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false)

  function myFunction() {
  
    let element = document.body;

    element.classList.toggle("dark");

    setIsClicked(isClicked => !isClicked);
  }
return (
  <nav className="sidebar">
        <div className="sidebar_container">
          <a href="#"><BsFillCalendarFill></BsFillCalendarFill></a>

         
          <div className="buttons_container">
          <button className="dark-mode-btn sidebar_button" onClick={myFunction}>{isClicked ? <BsFillMoonStarsFill/>:<BsBrightnessAltHighFill/>}</button>
          </div>
          </div>
  </nav>

)}