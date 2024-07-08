import { AppBar, Grid, Toolbar } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { FaBars } from "react-icons/fa";

function HeaderCom({ selectedDate, handleDatePickerChange, toggleSidebar }) {

    const location = useLocation();

    return (
        <div>
            <Toolbar sx={{ background: 'rgb(25,118,210)', position: "sticky" }} >
                <Grid container>
                    <Grid item xs={6} textAlign='left'>
                        <button className="toggle-btn" onClick={toggleSidebar}>
                            <FaBars />
                        </button>
                    </Grid>
                    <Grid item xs={6} textAlign='right'>
                        
                    {location.pathname === '/base/calendar' && (
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
                                                    // fullWidth
                                                    style={{ height: '100%', color: 'white' }}
                                                />
                                            )}
                                        />

                                    </LocalizationProvider>
                                </div>
                            </div>
                        )}

                        {location.pathname === '/base/calendarem' && (
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
                                                    // fullWidth
                                                    style={{ height: '100%', color: 'white' }}
                                                />
                                            )}
                                        />

                                    </LocalizationProvider>
                                </div>
                            </div>
                        )}
                        
                    </Grid>
                </Grid>
            </Toolbar>
        </div >
    )
}

export default HeaderCom