import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';

function FormVehicleEdit({ vehicle }) {

    const [id] = useState(vehicle ? vehicle.id : '');
    const [vehicleType, setVehicleType] = useState(vehicle ? vehicle.vehicleType : '');
    // const [password, setPassword] = useState('');
    const [vehicleNumber, setVehicleNumber] = useState(vehicle ? vehicle.vehicleNumber : '');
    const [noOfPassengers, setNoOfPassengers] = useState(vehicle ? vehicle.noOfPassengers : '');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            vehicleType: z.string().min(1, { message: "Enter vehicle type" }),
            vehicleNumber: z.string().min(1, { message: "Enter vehicle number" }),
            noOfPassengers: z.number().min(1, { message: "Enter number of passengers" })
        });

        // console.log("id of role is..........." + role.toUpperCase());

        const updatedVehicle = {
            id: id,
            vehicleType: vehicleType,
            vehicleNumber: vehicleNumber,
            noOfPassengers: noOfPassengers
        };


        const result = validateForm.safeParse(updatedVehicle);

        if (
            vehicle.vehicleType !== updatedVehicle.vehicleType ||
            vehicle.vehicleNumber !== updatedVehicle.vehicleNumber ||
            vehicle.noOfPassengers !== updatedVehicle.noOfPassengers
        ) {
            axios.put(`http://localhost:8080/api/auth/updateVehicle`, updatedVehicle)
                .then(() => {
                    success("Vehicle updated successfully");
                    navigate('/login/welcomeadmin/vehicleListAd');
                })
                .catch(() => {
                    const formattedError = result.error.format();
                    if (formattedError.vehicleType?._errors) {
                        error(String(formattedError.vehicleType?._errors));
                    } else if (formattedError.vehicleNumber?._errors) {
                        error(String(formattedError.vehicleNumber?._errors));
                    } else if (formattedError.noOfPassengers?._errors) {
                        error(String(formattedError.noOfPassengers?._errors));
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
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>

        </div>
    )
}

export default FormVehicleEdit