import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { success } from '../util/Toastify';

export default function FormView({ agreement }) {
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState(agreement.customerName || '');
    const [location, setLocation] = useState(agreement.location || '');
    const [item, setItem] = useState(agreement.item || '');
    const [agreementType, setAgreementType] = useState(agreement.agreementType || '');
    const [periodOfTheAgreement, setPeriodOfTheAgreement] = useState(agreement.periodOfTheAgreement || '');
    const [startDate, setStartDate] = useState(agreement.startDate || '');
    const [endDate, setEndDate] = useState(agreement.endDate || '');
    

    const data = {
        id: agreement.id,
        customerName,
        location,
        item,
        agreementType,
        periodOfTheAgreement,
        startDate,
        endDate,
        
    };

    const handleEdit = () => {
        axios.put("http://localhost:8080/api/v1/agreementService/updateAgreementService", data)
            .then((res) => {
                console.log(res.data);
                navigate('/ServiceAgreementSix');
                success("Successfully Updated..!");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleGoBack = () => {
        navigate(-1); // This will take the user to the previous page
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
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />

                <TextField
                    label="Location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <TextField
                    label="Item"
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                />

                <TextField
                    label="Agreement Type"
                    type='text'
                    value={agreementType}
                    onChange={(e) => setAgreementType(e.target.value)}
                />

                <TextField
                    label="Period of the Agreement"
                    type='text'
                    value={periodOfTheAgreement}
                    onChange={(e) => setPeriodOfTheAgreement(e.target.value)}
                />
                <TextField
                    label="Start Date"
                    type='text'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <TextField
                    label="End Date"
                    type='text'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                

                <br /><br />
                <Button variant="outlined" onClick={handleGoBack} >
                    Go Back
                </Button>
                <Button variant="contained" onClick={handleEdit} sx={{ ml: 2 }}>
                    Update
                </Button>
                
                <br /><br />
            </Box>
        </>
    );
}
