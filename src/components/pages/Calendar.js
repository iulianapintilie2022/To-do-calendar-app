import React, {useState, UseState} from "react";
import {BsPlusCircle, BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import "./Calendar.css";
import {Calendar} from "react-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ECalendar() {

  const[dateSelection, setSelection]= useState({
    start: null,
    end: null,
  });

  const[newEvent, setNewEvent]= useState({title:"", start:"", end:""});
  const[allEvents, setAllEvents]= useState([]);


  const [viewEventsDate, setViewEventsDate] = useState(new Date());

console.log(allEvents);
console.log("Date selection: " + JSON.stringify(dateSelection));

 const onChange = (value, event) => {
  setSelection({
  start: value[0],
  end: value[1],
  })    
 }




  const saveEvent = (event) => {
    event.preventDefault();
    setAllEvents([...allEvents, newEvent]);
    localStorage.setItem("localEvents", JSON.stringify([...allEvents, newEvent]));
    setNewEvent({title:"", start:"", end:""});
    setViewEventsDate(new Date()); 
  }

  const onTitleChange = (event) => {
    setNewEvent({
      title: event.target.value,
      start: dateSelection.start ?? newEvent.start,
      end: dateSelection.end ?? newEvent.end,
    });
  }

  //const setTileClassName = ({ activeStartDate, date, view }) => {
    // if (!dateSelection.start || !dateSelection.end) return null;

    // console.log(JSON.stringify(dateSelection));
    // console.log(dateSelection.start.getDate() + " <= " + date.getDate() + " <= " + dateSelection.end.getDate());
    // return ('month' === view &&
    //   null !== dateSelection.start &&
    //   dateSelection.start.getDate() * 1 <= date.getDate() * 1 &&
    //   null !== dateSelection.end &&
    //   date.getDate() * 1 <= dateSelection.end.getDate() * 1
    // ) ? 'selectedCalendarTile' : null;
    //  return null;
    // }    in component->   tileClassName={setTileClassName} 

   

  return (
  
    <div className="calendar">
      <h3>Calendar page</h3>
      
      <div className="calendar_container1">
        <span>Events</span>
        <div className="events">
        <p>event1</p>
        </div>
      </div>

      <div className="calendar_container2">
        <div className="react_calendar">
            <Calendar events={allEvents} selectRange={true} onChange={onChange}/>
            <form>
            <input type="text" className="eventtitle-input" placeholder="Add a title" value={newEvent.title} onChange={onTitleChange}/>
            <button className="calendar_button" onClick={saveEvent}><BsPlusCircle></BsPlusCircle></button>
            </form>
        </div>
      </div>
    </div>
 
  );
}
export default ECalendar;
