import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';

export default function FormAddItem() {
    const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    const [indoorMod, setIndoorMod] = useState('');
    const [outdoorMod, setOutdoorMod] = useState(''); // State to hold the selected role
    const [manufacturer, setManufacturer] = useState('');
    const [capacity, setCapacity] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            name: z.string().min(1, { message: "Enter item name" }),
            indoorMod: z.string().min(1, { message: "Enter indoor model" }),
            outdoorMod: z.string().min(1, { message: "Enter outdoor model" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            manufacturer: z.string().min(1, { message: "Enter manufacture" }),
            capacity: z.string().min(1, { message: "Enter capacity" })
        });

        const userData = {
            name: name,
            // password: password,
            indoorMod: indoorMod,
            outdoorMod: outdoorMod,
            manufacturer: manufacturer,
            capacity: capacity,
        };

        const result = validateForm.safeParse(userData);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/addItem', userData)
                .then(() => {
                    navigate('/login/welcomeadmin/itemListAd');
                    success('Item added successfully!')
                })
                .catch(() => error("Item already exist!"))
        } else {
            const formattedError = result.error.format();
            if (formattedError.name?._errors) {
                error(String(formattedError.name?._errors));
            } else if (formattedError.indoorMod?._errors) {
                error(String(formattedError.indoorMod?._errors));
            } else if (formattedError.outdoorMod?._errors) {
                error(String(formattedError.outdoorMod?._errors));
            } else if (formattedError.manufacturer?._errors) {
                error(String(formattedError.manufacturer?._errors));
            } else if (formattedError.capacity?._errors) {
                error(String(formattedError.capacity?._errors));
            }
        }

    };

    const handleReset = () => {
        setName('');
        setIndoorMod('');
        setOutdoorMod('');
        setManufacturer('');
        setCapacity('');
    }

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
                    label="Item name"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    label="Indoor modal"
                    type="text"
                    value={indoorMod}
                    onChange={(e) => setIndoorMod(e.target.value)}
                />

                <TextField
                    label="Outdoor modal"
                    type="text" 
                    value={outdoorMod}
                    onChange={(e) => setOutdoorMod(e.target.value)}
                />


                <TextField
                    label="Manufacturer"
                    type='email'
                    value={manufacturer} 
                    onChange={(e) => setManufacturer(e.target.value)}
                />

                <TextField
                    label="Capacity"
                    type='text'
                    value={capacity} 
                    onChange={(e) => setCapacity(e.target.value)}
                />

                <br /><br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        marginRight: { xs: 4, sm: 4, md: 5 }
                    }}>
                    Add Item
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
                <br /><br />
            </Box>


        </>

    );
}
