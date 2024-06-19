import { Box, Button, TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormVehicleView({ vehicle }) {

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
                        label="Vehicle Type"
                        type='text'
                        value={vehicle.vehicleType}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Vehicle Number"
                        type="text"
                        value={vehicle.vehicleNumber}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Number Of Passengers"
                        type="number"
                        value={vehicle.noOfPassengers}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <br /><br />

                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/vehicleList')}>
                    Back to List
                </Button><br /><br />
            </Box>


        </div>
    )
}

export default FormVehicleView