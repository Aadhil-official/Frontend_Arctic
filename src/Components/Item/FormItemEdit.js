import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../../util/Toastify';

export default function FormItemEdit({ item }) {

    const [id] = useState(item ? item.id : '');
    const [name, setName] = useState(item ? item.name : ''); // Initialize with user.username if user exists
    const [indoorMod, setIndoorMod] = useState(item ? item.indoorMod : '');
    const [outdoorMod, setOutdoorMod] = useState(item ? item.outdoorMod : ''); // Check if user and user.roles exist
    const [manufacturer, setManufacturer] = useState(item ? item.manufacturer : '');
    const [capacity, setCapacity] = useState(item ? item.capacity : '');

    const navigate = useNavigate();

    // console.log("Starting of my form......." + user);
    // console.log("username:", username);
    // console.log("email:", email);
    // console.log("role:", role);
    // console.log("address:", address);
    // console.log("usergroup:", usergroup);
    // console.log("tel:", tel);

    const handleSubmit = () => {

        const loadingId = loading("Updating item...");

        const validateForm = z.object({
            name: z.string().min(1, { message: "Enter your item" }),
            indoorMod: z.string().min(1, { message: "Enter your indoor modal" }),
            outdoorMod: z.string().min(1, { message: "Enter your outdoor modal" }),
            manufacturer: z.string().min(1, { message: "Enter manufacturer" }),
            capacity: z.string().min(1, { message: "Enter capacity" }),
        });


        const updatedItem = {
            id: id,
            name: name,
            indoorMod: indoorMod,
            outdoorMod: outdoorMod,
            manufacturer: manufacturer,
            capacity: capacity,
        };


        const result = validateForm.safeParse(updatedItem);
        // if (!result.success) {
        console.log("thisklkdklwejdlkwed", updatedItem);
        if (result.success) {
            if (
                item.name !== updatedItem.name ||
                item.indoorMod !== updatedItem.indoorMod ||
                item.outdoorMod !== updatedItem.outdoorMod ||
                item.manufacturer !== updatedItem.manufacturer ||
                item.capacity !== updatedItem.capacity
            ) {
                axios.put(`http://localhost:8080/api/auth/updateItem`, updatedItem)
                    .then(() => {
                        dismiss(loadingId);
                        success("Item updated successfully");
                        navigate('/login/welcomeadmin/itemListAd');
                    })
                    .catch(() => {
                        dismiss(loadingId);
                        error("Undefined Item!");
                    })
            } else {
                dismiss(loadingId);
                error("No changes ditected!..");
                navigate('/login/welcomeadmin/itemListAd');
            }
        } else {
            dismiss(loadingId);
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
                        label="Item Name"
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        label="Indoor Modal"
                        type="text"
                        value={indoorMod}
                        onChange={(e) => setIndoorMod(e.target.value)}
                    />

                    <TextField
                        label="Outdoor Modal"
                        type="text"
                        value={outdoorMod}
                        onChange={(e) => setOutdoorMod(e.target.value)}
                    />


                    <TextField
                        label="Manufacturer"
                        type='text'
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
                    <Button variant="contained" onClick={handleSubmit}>
                        Update
                    </Button><br /><br />
                </Box>


            </>

        );
    }
