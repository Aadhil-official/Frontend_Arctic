import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function FormItemEdit() {
    // Handle the case when agreement is undefined
    

//    const initialAgreement = agreement || {};

    const [agreement,setAgreement]=useState([]);
    
    const [customerName, setCustomerName] = useState(agreement.customerName || '');
    const [location, setLocation] = useState(agreement.location || '');
    const [item, setItem] = useState(agreement.item || '');
    const [agreementType, setAgreementType] = useState(agreement.agreementType || '');
    const [periodOfTheAgreement, setPeriodOfTheAgreement] = useState(agreement.periodOfTheAgreement || '');
    const [startDate, setStartDate] = useState(agreement.startDate || '');
    const [endDate, setEndDate] = useState(agreement.endDate || '');
    const [telephone, setTelephone] = useState(agreement.telephone || '');
    const locationone  = useLocation();

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

   
    useEffect ( () =>{
        // if (locationone.state && locationone.state.agreement) {

            setAgreement(locationone.state.agreement);
            console.log("Hasara" + agreement);
        // }
    },[locationone.state]);
    
    const data ={
        id:agreement.id,
        customerName,
        location,
        item,
        agreementType,
        periodOfTheAgreement,
        startDate,
        endDate,
        telephone
    }

    const handleSubmit = () => {
        axios.put(`http://localhost:8080/api/v1/agreementService/updateAgreementService`, data)
            .then(() => {
                console.log("Service agreement updated successfully");
                navigate('/');
            }).catch((error) => {
                console.log("Error updating agreement:", error);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
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
            <TextField
                label="Telephone Number"
                type='text'
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
            />
            
            <br /><br />
            <Button variant="contained" onClick={handleSubmit}>
                Save
            </Button><br /><br />
        </Box>
    )
}
