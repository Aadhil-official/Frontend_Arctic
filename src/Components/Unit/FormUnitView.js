import { Box, Button, TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormUnitView({ unit }) {

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
                        label="Indoor Serial"
                        type='text'
                        value={unit.indoorSerial}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Outdoor Serial"
                        type="text"
                        value={unit.outdoorSerial}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Model Name"
                        type="text"
                        value={unit.modelName}
                        InputProps={{
                            readOnly: true
                        }}
                    />


                    <TextField
                        label="Commissioned Date"
                        type='date'
                        value={unit.commissionedDate}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Owner"
                        type='text'
                        value={unit.owner}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Warranty Period"
                        type='text'
                        value={unit.warrantyPeriod}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Unit Price"
                        type='text'
                        value={unit.unitPrice}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <br /><br />

                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/unitList')}>
                    Back to List
                </Button><br /><br />
            </Box>

        </div>
    )
}

export default FormUnitView