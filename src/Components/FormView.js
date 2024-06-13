import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

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
                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        Username: {user.username}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        Address: {user.address}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        User Group: {user.usergroup}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        Email: {user.email}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        Contact No: {user.tel}
                    </Typography>

                    <Typography variant="h6" component="div" sx={{ m: 1 }}>
                        Designation: {user.roles[0].name.toLowerCase()}
                    </Typography><br /><br />
                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/employeelist')}>
                    Back to List
                </Button><br /><br />
            </Box>
        </>
    );
}

export default FormView;
