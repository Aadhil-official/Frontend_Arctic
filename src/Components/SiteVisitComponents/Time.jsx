
import React from 'react';
import { TextField } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker'; // Changed to TimePicker instead of StaticTimePicker
import './Time.css';

export default function Time({ selectedTime, onTimeChange }) {
  return (
    <div className='selectedTime'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="Select Time"
          value={selectedTime}
          onChange={onTimeChange}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </LocalizationProvider>
    </div>
  );
}
