import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, TextField } from '@mui/material';

function FormCustomerEdit({ customer }) {

    const [id] = useState(customer ? customer.id : '');
    const [customerName, setCustomerName] = useState(customer ? customer.customerName : ''); // Initialize with user.username if user exists
    const [address, setAddress] = useState(customer ? customer.address : '');
    const [contactNumber, setContactNumber] = useState(customer ? customer.contactNumber : ''); // Check if user and user.roles exist
    const [email, setEmail] = useState(customer ? customer.email : '');
    const [location, setLocation] = useState(customer ? customer.location : '');

    const navigate = useNavigate();

    // console.log("Starting of my form......." + user);
    // console.log("username:", username);
    // console.log("email:", email);
    // console.log("role:", role);
    // console.log("address:", address);
    // console.log("usergroup:", usergroup);
    // console.log("tel:", tel);

    // if (user) {
    //     console.log("user is there");
    // }
    // navigate('/');
    const handleSubmit = () => {


        const validateForm = z.object({
            customerName: z.string().min(1, { message: "Enter customer name" }),
            address: z.string().min(1, { message: "Enter address" }),
            contactNumber: z.string().min(1, { message: "Enter contact number" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            email: z.string().email().min(1, { message: "Enter email" }),
            location: z.string().min(1, { message: "Enter location" }),
        });

        // console.log("id of role is..........." + role.toUpperCase());

        const updatedCustomer = {
            id: id,
            customerName:customerName,
            address: address,
            contactNumber: contactNumber,
            email: email,
            location: location,
        };

        const result = validateForm.safeParse(updatedCustomer);
        
        console.log("thisklkdklwejdlkwed", updatedCustomer);
        if (
            customer.customerName !== updatedCustomer.customerName ||
            customer.address !== updatedCustomer.address ||
            customer.contactNumber !== updatedCustomer.contactNumber ||
            customer.email !== updatedCustomer.email ||
            customer.location !== updatedCustomer.location
        ) {
            axios.put(`http://localhost:8080/api/auth/updateCustomer`, updatedCustomer)
                .then(() => {
                    success("Customer updated successfully");
                    navigate('/login/welcomeadmin/customerListAd');
                })
                .catch(() => {
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
                    } else {
                        error("Undefined Customer!")
                    }
                })
        }
    };


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
                    multiline
                    rows={4}
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
                    multiline
                    rows={4}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>


        </div>
    )
}

export default FormCustomerEdit