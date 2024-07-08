import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { success } from '../util/Toastify';

export default function FormViewOne({ agreement }) {
    const navigate = useNavigate();

    const [customerName, setCustomerName] = useState(agreement.customerName || '');
    const [location, setLocation] = useState(agreement.location || '');
    const [item, setItem] = useState(agreement.item || '');
    const [agreementType, setAgreementType] = useState(agreement.agreementType || '');
    const [periodOfTheAgreement, setPeriodOfTheAgreement] = useState(agreement.periodOfTheAgreement || '');
    const [startDate, setStartDate] = useState(agreement.startDate || '');
    const [endDate, setEndDate] = useState(agreement.endDate || '');
    const [isChanged, setIsChanged] = useState(false);

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
        if (isChanged) {
            axios.put("http://localhost:8080/api/auth/agreementService/updateAgreementService", data)
                .then((res) => {
                    console.log(res.data);
                    navigate('/ServiceAgreementSix');
                    success("Successfully Updated..!");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            alert("Please Edit details");
            console.log("No changes detected");
        }
    };

    const handleGoBack = () => {
        navigate(-1); // This will take the user to the previous page
    };

    useEffect(() => {
        setIsChanged(false);
    }, [agreement]);

    const handleChange = (setter) => (event) => {
        setter(event.target.value);
        setIsChanged(true);
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
                    onChange={handleChange(setCustomerName)}
                />

                <TextField
                    label="Location"
                    type="text"
                    value={location}
                    onChange={handleChange(setLocation)}
                />

                <TextField
                    label="Item"
                    type="text"
                    value={item}
                    onChange={handleChange(setItem)}
                />

                <TextField
                    label="Agreement Type"
                    type='text'
                    value={agreementType}
                    onChange={handleChange(setAgreementType)}
                />

                <TextField
                    label="Period of the Agreement"
                    type='text'
                    value={periodOfTheAgreement}
                    onChange={handleChange(setPeriodOfTheAgreement)}
                />
                <TextField
                    label="Start Date"
                    type='text'
                    value={startDate}
                    onChange={handleChange(setStartDate)}
                />
                <TextField
                    label="End Date"
                    type='text'
                    value={endDate}
                    onChange={handleChange(setEndDate)}
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
