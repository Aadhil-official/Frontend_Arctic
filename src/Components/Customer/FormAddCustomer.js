import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, TextField } from '@mui/material';

function FormAddCustomer() {

    const [customerName, setCustomerName] = useState('');
    // const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState(''); // State to hold the selected role
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            customerName: z.string().min(1, { message: "Enter item name" }),
            address: z.string().min(1, { message: "Enter indoor model" }),
            contactNumber: z.string().min(1, { message: "Enter outdoor model" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            email: z.string().min(1, { message: "Enter manufacture" }),
            location: z.string().min(1, { message: "Enter capacity" })
        });

        const customerData = {
            customerName: customerName,
            // password: password,
            address: address,
            contactNumber: contactNumber,
            email: email,
            location: location,
        };

        const result = validateForm.safeParse(customerData);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/addCustomer', customerData)
                .then(() => {
                    navigate('/login/welcomeadmin/customerListAd');
                    success('Customer added successfully!')
                })
                .catch(() => error("Customer already exist!"))
        } else {
            const formattedError = result.error.format();
            if (formattedError.customerName?._errors) {
                error(String(formattedError.customerName?._errors));
            } else if (formattedError.address?._errors) {
                error(String(formattedError.address?._errors));
            } else if (formattedError.contactNumber?._errors) {
                error(String(formattedError.contactNumber?._errors));
            } else if (formattedError.email?._errors) {
                error(String(formattedError.email?._errors));
            } else if (formattedError.location?._errors) {
                error(String(formattedError.location?._errors));
            }
        }

    };

    const handleReset = () => {
        setCustomerName('');
        setAddress('');
        setContactNumber('');
        setEmail('');
        setLocation('');
    }


    return (
        <div>

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
                    label="Customer name"
                    type='text'
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />

                <TextField
                    label="Address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <TextField
                    label="Contact number"
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />


                <TextField
                    label="Email"
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    label="Work from"
                    type='text'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <br /><br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        marginRight: { xs: 4, sm: 4, md: 5 }
                    }}>
                    Add Customer
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
                <br /><br />
            </Box>


        </div>
    )
}

export default FormAddCustomer