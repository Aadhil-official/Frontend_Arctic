import React from 'react';
import '../Style/Calendar/Header.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { BsJustify } from 'react-icons/bs';


export default function Header({ selectedDate, handleDatePickerChange, OpenSidebar }) {
    const location = useLocation(); // Get the current location

    return (
        <div>
                <header className='header'>
                    <div className='menu-icon'>
                        <BsJustify className='icon' onClick={OpenSidebar} />
                    </div>
                </header>
                <br />

                {/* Conditionally render the search bar based on the current path */}
                {location.pathname === '/calendar' && (
                    <div className="pick">
                        <div className="date-picker-container">
                            <label htmlFor="date-picker">Search:</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    id="date-picker"
                                    value={dayjs(selectedDate)}
                                    onChange={(date) => handleDatePickerChange(date)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            size="small"
                                            style={{ height: '100%', color: 'white' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                )}
            </div>
    );
}
