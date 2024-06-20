import { Box, Button, TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormCustomerView({ customer }) {

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
                        label="Customer name"
                        type='text'
                        value={customer.customerName}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Address"
                        type="text"
                        value={customer.address}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Contact number"
                        type="text"
                        value={customer.contactNumber}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Email"
                        type="email"
                        value={customer.email}
                        InputProps={{
                            readOnly: true
                        }}
                    />


                    <TextField
                        label="Work from"
                        type='text'
                        value={customer.location}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br /><br />

                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/customerList')}>
                    Back to List
                </Button><br /><br />
            </Box>


        </div>
    )
}

export default FormCustomerView