import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calendar from './Components/Calendar';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header';
import api from './API/axiosConfig.js';
import dayjs from 'dayjs';
import Reminder from './Components/Reminder.jsx';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import './App.css';  // Import the CSS file 


function App() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await api.get('/events');
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getEvents();
  }, []);

  const updateEvents = (newEvents) => {
    setEvents(newEvents);
  };

  return (
    <Router>
      <div className="app-container">
        <Header
          selectedDate={selectedDate}
          handleDatePickerChange={handleDatePickerChange}
          OpenSidebar={OpenSidebar}
        />
        <div className="main-content">
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/calendar"
                element={
                  <Calendar
                    selectedDate={selectedDate.toDate()}
                    events={events}
                    updateEvents={updateEvents}
                  />
                }
              />
              <Route path="/reminder" element={<Reminder />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
