import React, { useState } from 'react';
import axios from 'axios';
import '../../Style/Calendar/Reminder.css';


function Reminder() {
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();

    if (startTime >= endTime) {
      alert('End time must be a later time than start time.');
      return;
  }

  if (reminderTime >= startTime) {
    alert('Reminde time must be a earlier time than start time.');
    return;
}

if (reminderTime <= currentTime) {
  alert('Reminder time must be later than the current time.');
  return;
}

    const reminder = { email, title, startTime, endTime, reminderTime };
    await axios.post('http://localhost:8080/api/auth/createReminder', reminder);
    alert('Reminder set!');
    window.location.reload();

  };

  
  return (
    <div>
    <h1 className='remindertitle'>Set Reminder</h1>
    <form onSubmit={handleSubmit} className='reminder'>
      <div>
        <label className='labelform'>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className='formfeild'/>
      </div>
      <div>
        <label className='labelform'>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className='formfeild'/>
      </div>
      <div>
        <label className='labelform'>Start Time:</label>
        <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required className='formfeild'/>
      </div>
      <div>
        <label className='labelform'>End Time:</label>
        <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required className='formfeild'/>
      </div>
      <div>
        <label className='labelform'>Reminder Time:</label>
        <input type="datetime-local" value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} required className='formfeild'/>
      </div>
      <button type="submit" className='button12'>Set Reminder</button>

    </form>
  </div>
  )
}

export default Reminder