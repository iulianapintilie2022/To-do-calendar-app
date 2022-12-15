import React from "react"
import './App.css';
import SideBar from "./components/SideBar";
import Tasks from "./components/pages/Tasks";
import ECalendar from "./components/pages/Calendar";
import {Switch, Route, Routes}from "react-router-dom" ;





function App() {

  
  return (
  <div>
    <SideBar></SideBar>
    <Routes>
        <Route path="/calendar" element={<ECalendar/>}></Route> 
         <Route path="/tasks" element={<Tasks/>}></Route>
         </Routes>
    
      </div>
  )
}
export default App;

