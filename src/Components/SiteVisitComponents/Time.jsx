import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import './Time.css'

export default function Time() {
  return (
    <div className='time'>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <StaticTimePicker orientation="landscape" />
    </LocalizationProvider>
    </div>
  );
}