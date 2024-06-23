import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

function FormView({ user }) {

    const navigate = useNavigate();


    const theme = responsiveFontSizes(createTheme());
    return (
        <>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                    textAlign: 'center',
                    mt: 3
                }}
            >

                <ThemeProvider theme={theme}>

                    <TextField
                        label="Username"
                        type='text'
                        value={user.username}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Address"
                        type="text"
                        multiline
                        rows={4}
                        value={user.address}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="User group"
                        type="text"
                        value={user.usergroup}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="User email"
                        type="email"
                        value={user.email}
                        InputProps={{
                            readOnly: true
                        }}
                    />


                    <TextField
                        label="Contact number"
                        type='text'
                        value={user.tel}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Contact No"
                        type='text'
                        value={user.roles[0].name.toLowerCase()}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    <br /><br />
                </ThemeProvider>

                <Button variant="contained" onClick={() => navigate('/login/welcome/employeelist')}>
                    Back to List
                </Button><br /><br />
            </Box>
        </>
    );
}

export default FormView;
