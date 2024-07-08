import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';




export default function Calender() {
    return (
      <div style={{
        // width:"50%",
        // float:"left"

      }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker orientation="landscape" />
      </LocalizationProvider>
      <br>
      </br>
      </div>
    );
}


