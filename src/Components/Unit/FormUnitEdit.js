import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../../util/Toastify';
import { Box, Button, TextField } from '@mui/material';

function FormUnitEdit({ unit }) {

    const [id] = useState(unit ? unit.id : '');
    const [indoorSerial, setIndoorSerial] = useState(unit ? unit.indoorSerial : '');
    // const [password, setPassword] = useState('');
    const [outdoorSerial, setOutdoorSerial] = useState(unit ? unit.outdoorSerial : '');
    const [modelName, setModelName] = useState(unit ? unit.modelName : ''); // State to hold the selected role
    const [commissionedDate, setCommissionedDate] = useState(unit ? unit.commissionedDate : '');
    const [owner, setOwner] = useState(unit ? unit.owner : '');
    const [warrantyPeriod, setWarrantyPeriod] = useState(unit ? unit.warrantyPeriod : '');
    const [unitPrice, setUnitPrice] = useState(unit ? unit.unitPrice : '');

    const navigate = useNavigate();

    const handleSubmit = () => {

        const loadingId = loading("Updating unit...");

        const validateForm = z.object({
            indoorSerial: z.string().min(1, { message: "Enter indoor serial" }),
            outdoorSerial: z.string().min(1, { message: "Enter outdoor serial" }),
            modelName: z.string().min(1, { message: "Enter model name" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            commissionedDate: z.string().min(1, { message: "Enter commissioned date" }),
            owner: z.string().min(1, { message: "Enter owner" }),
            warrantyPeriod: z.string().min(1, { message: "Enter warranty period" }),
            unitPrice: z.string().min(1, { message: "Enter unit price" })
        });

        // console.log("id of role is..........." + role.toUpperCase());

        const updatedUnit = {
            id: id,
            indoorSerial: indoorSerial,
            // password: password,
            outdoorSerial: outdoorSerial,
            modelName: modelName,
            commissionedDate: commissionedDate,
            owner: owner,
            warrantyPeriod: warrantyPeriod,
            unitPrice: unitPrice

        };


        const result = validateForm.safeParse(updatedUnit);

        if (
            unit.indoorSerial !== updatedUnit.indoorSerial ||
            unit.outdoorSerial !== updatedUnit.outdoorSerial ||
            unit.modelName !== updatedUnit.modelName ||
            unit.commissionedDate !== updatedUnit.commissionedDate ||
            unit.owner !== updatedUnit.owner ||
            unit.warrantyPeriod !== updatedUnit.warrantyPeriod ||
            unit.unitPrice !== updatedUnit.unitPrice
        ) {
            axios.put(`http://localhost:8080/api/auth/updateUnit`, updatedUnit)
                .then(() => {
                    dismiss(loadingId);
                    success("Unit updated successfully");
                    navigate('/login/welcomeadmin/unitListAd');
                })
                .catch(() => {
                    dismiss(loadingId);
                    const formattedError = result.error.format();
                    if (formattedError.indoorSerial?._errors) {
                        error(String(formattedError.indoorSerial?._errors));
                    } else if (formattedError.outdoorSerial?._errors) {
                        error(String(formattedError.outdoorSerial?._errors));
                    } else if (formattedError.modelName?._errors) {
                        error(String(formattedError.modelName?._errors));
                    } else if (formattedError.commissionedDate?._errors) {
                        error(String(formattedError.commissionedDate?._errors));
                    } else if (formattedError.owner?._errors) {
                        error(String(formattedError.owner?._errors));
                    } else if (formattedError.warrantyPeriod?._errors) {
                        error(String(formattedError.warrantyPeriod?._errors));
                    } else if (formattedError.unitPrice?._errors) {
                        error(String(formattedError.unitPrice?._errors));
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
                    label="Indoor Serial"
                    type='text'
                    value={indoorSerial}
                    onChange={(e) => setIndoorSerial(e.target.value)}
                />

                <TextField
                    label="Outdoor Serial"
                    type="text"
                    value={outdoorSerial}
                    onChange={(e) => setOutdoorSerial(e.target.value)}
                />

                <TextField
                    label="Model Name"
                    type="text"
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                />


                <TextField
                    label="Commissioned Date"
                    type='date'
                    value={commissionedDate}
                    onChange={(e) => setCommissionedDate(e.target.value)}
                />

                <TextField
                    label="Owner"
                    type='text'
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                />

                <TextField
                    label="Warranty Period"
                    type='text'
                    value={warrantyPeriod}
                    onChange={(e) => setWarrantyPeriod(e.target.value)}
                />

                <TextField
                    label="Unit Price"
                    type='text'
                    value={unitPrice}
                    onChange={(e) => setUnitPrice(e.target.value)}
                />

                <br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>



        </div>
    )
}

export default FormUnitEdit