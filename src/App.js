import React from "react"
import './App.css';
import SideBar from "./components/SideBar";
import Tasks from "./components/pages/Tasks";
import Calendar from "./components/pages/Calendar";
import Home from "./components/pages/Home";
import Journal from "./components/pages/Journal";
import Login from "./components/pages/Login";
import Bookmarks from "./components/pages/Bookmarks";
import {Route, Routes} from "react-router-dom";


function App() {
  
  return (
  <div>
    <SideBar></SideBar>
    <Routes>
        <Route path="to-do-list/" element={<Home />} />
        <Route path="to-do-list/calendar" element={<Calendar />} />
        <Route path="to-do-list/journal" element={<Journal />} />
        <Route path="to-do-list/tasks" element={<Tasks />} />
        <Route path="to-do-list/login" element={<Login />} />
        <Route path="to-do-list/bookmarks" element={<Bookmarks />} />
      </Routes>
     

  
      </div>
  )
}
export default App;

