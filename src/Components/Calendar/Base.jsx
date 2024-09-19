import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Calendar from './Calendar';
import axios from 'axios';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Reminder from './Reminder';
import CalendarEmp from './CalendarEmp';
import { useUser } from '../../Context/UserContext';
import SidebarCom from '../SideBarCom';

function Create() {
  const { tempdata } = useUser();
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/auth/events');
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

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {tempdata.usergroup === "AdminGroup" && <Sidebar
        isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
      />}

      {tempdata.usergroup !== "AdminGroup" && <SidebarCom
        isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}
      />}

      <Header
        selectedDate={selectedDate}
        handleDatePickerChange={handleDatePickerChange}
        toggleSidebar={toggleSidebar}
      />

      <main className={`content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar
            selectedDate={selectedDate.toDate()}
            events={events}
            updateEvents={updateEvents} />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/calendarEmp" element={<CalendarEmp
            selectedDate={selectedDate.toDate()}
            events={events} />} />

        </Routes>
      </main>
    </div>

  );

}

export default Create;