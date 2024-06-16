import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import ServiceAgreementThree from '../Pages/ServiceAgreement/ServiceAgreementThree';

export default function FormView({ agreement }) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`http://localhost:3000/ServiceAgreementThree/${agreement.id}`);
    };

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
                 <TextField
                    label="Telephone Number"
                    type='text'
                    value={agreement.telephone || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <br /><br />
                <Link to={"/ServiceAgreementThree/:{id}"}>
                <Button variant="contained" onClick={handleEdit}>
                    Edit Details
                </Button>
                </Link>
                <br/><br/>
            </Box>
        </>
    );
}
