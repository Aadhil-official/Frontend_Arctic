import { Box, Button, List, ListItem, TextField, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormJobView({ job }) {

    const navigate = useNavigate();

    const theme = responsiveFontSizes(createTheme());

    return (
        <div>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                    textAlign: 'center',
                    mt: 3
                }}
            >

                <ThemeProvider theme={theme}>

                    <TextField
                        label="Customer Name"
                        type='text'
                        value={job.customerName}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Job Data"
                        type="date"
                        value={job.date}
                        InputProps={{
                            readOnly: true
                        }}
                    />



                    <TextField
                        label="Vehicle Number"
                        type='text'
                        value={job.vehicleNumber}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        select
                        label="Job Status"
                        value={job.status}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Team Members
                    </Typography>

                    <List>
                        {job.teamMembers.map((member, index) => (
                            <ListItem key={index}>
                                <TextField
                                    label={`Team Member ${index + 1}`}
                                    type='text'
                                    value={member}
                                    InputProps={{
                                        readOnly: true
                                    }}
                                    fullWidth
                                />
                            </ListItem>
                        ))}
                    </List>


                    <br /><br />

                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/jobList')}>
                    Back to List
                </Button><br /><br />
            </Box>

        </div>
    )
}

export default FormJobView