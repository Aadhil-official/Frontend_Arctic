import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useNavigate } from 'react-router-dom';



export default function WithoutButton({ agreement }) {
    // const navigate = useNavigate();



    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                    textAlign: 'center',
                    mt: 3
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    label="Customer Name"
                    type='text'
                    value={agreement.customerName || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="Location"
                    type="text"
                    value={agreement.location || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="Item"
                    type="text"
                    value={agreement.item || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="Agreement Type"
                    type='text'
                    value={agreement.agreementType || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="Period of the Agreement"
                    type='text'
                    value={agreement.periodOfTheAgreement || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    label="Start Date"
                    type='text'
                    value={agreement.startDate || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    label="End Date"
                    type='text'
                    value={agreement.endDate || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 

                <br/><br/>
            </Box>
        </>
    );
}
