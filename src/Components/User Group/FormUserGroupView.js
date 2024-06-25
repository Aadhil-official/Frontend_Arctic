import { Box, Button, TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormUserGroupView({ userGroup }) {

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
                        label="Group Name"
                        type='text'
                        value={userGroup.groupName}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <TextField
                        label="Group Description"
                        type="text"
                        multiline
                        rows={4}
                        value={userGroup.groupDescription}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                    


                    <TextField
                        label="Allocated Jobs"
                        type='text'
                        value={userGroup.allocatedJobs}
                        InputProps={{
                            readOnly: true
                        }}
                    />

                    <br /><br />

                </ThemeProvider>
                <Button variant="contained" onClick={() => navigate('/login/welcome/userGroupList')}>
                    Back to List
                </Button><br /><br />
            </Box>

        </div>
    )
}

export default FormUserGroupView