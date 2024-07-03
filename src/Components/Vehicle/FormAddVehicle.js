import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../../util/Toastify';

function FormAddVehicle() {


    const [vehicleType, setVehicleType] = useState('');
    // const [password, setPassword] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState();
    const [noOfPassengers, setNoOfPassengers] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {

        const loadingId = loading("Adding new vehicle...");

        const validateForm = z.object({
            vehicleType: z.string().min(1, { message: "Enter vehicle type" }),
            vehicleNumber: z.string().min(1, { message: "Enter vehicle number" }),
            noOfPassengers: z.string().min(1, { message: "Enter number of passengers" })
        });

        const userData = {
            vehicleType: vehicleType,
            vehicleNumber: vehicleNumber,
            noOfPassengers: noOfPassengers
        };

        const result = validateForm.safeParse(userData);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/addVehicle', userData)
                .then(() => {
                    dismiss(loadingId);
                    navigate('/login/welcomeadmin/vehicleListAd');
                    success('Vehicle added successfully!')
                })
                .catch(() => {
                    dismiss(loadingId);
                    error("Vehicle already exist!")
                })
        } else {
            const formattedError = result.error.format();
            if (formattedError.vehicleType?._errors) {
                error(String(formattedError.vehicleType?._errors));
            } else if (formattedError.vehicleNumber?._errors) {
                error(String(formattedError.vehicleNumber?._errors));
            } else if (formattedError.noOfPassengers?._errors) {
                error(String(formattedError.noOfPassengers?._errors));
            }
        }

    };

    const handleReset = () => {
        setVehicleType('');
        setVehicleNumber('');
        setNoOfPassengers();
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
                    label="Vehicle Type"
                    type='text'
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                />

                <TextField
                    label="Vehicle Number"
                    type="text"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                />

                <TextField
                    label="Number Of Passengers"
                    type="number"
                    value={noOfPassengers}
                    onChange={(e) => setNoOfPassengers(e.target.value)}
                />

                <br /><br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        marginRight: { xs: 4, sm: 4, md: 5 }
                    }}>
                    Add Vehicle
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
                <br /><br />
            </Box>


        </div>
    )
}

export default FormAddVehicle