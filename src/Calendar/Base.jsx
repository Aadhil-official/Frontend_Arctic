import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Calendar from './Calendar';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';

function Create() {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await axios.get('/events');
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

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div>
    <Header
          selectedDate={selectedDate}
          handleDatePickerChange={handleDatePickerChange}
          OpenSidebar={openSidebar}
        />
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={openSidebar} />

    <Calendar
      selectedDate={selectedDate.toDate()}
      events={events}
      updateEvents={updateEvents}
    />

</div>
  );
}

export default Create;
