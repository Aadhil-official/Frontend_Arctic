import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function FormItemEdit() {
    const { id } = useParams();
    const [agreement, setAgreement] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAgreementService = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/agreementService/getAgreementServiceTwo?id=${id}`);
                console.log("Fetched Agreement:",response.data);
                setAgreement(response.data);
                setLoading(false);
            } catch (e) {
                console.error('Error fetching item:', e);
                setLoading(false);
            }
        };
        fetchAgreementService();
    }, [id]);

    const handleSubmit = () => {
        axios.put(`http://localhost:8080/api/v1/agreementService/updateAgreementService`, agreement)
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

    if (!agreement) {
        return <p>Agreement not found</p>;
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
                value={agreement.customerName}
                onChange={(e) => setAgreement({ ...agreement, customerName: e.target.value })}
            />

            <TextField
                label="Location"
                type="text"
                value={agreement.location}
                onChange={(e) => setAgreement({ ...agreement, location: e.target.value })}
            />

            <TextField
                label="Item"
                type="text"
                value={agreement.item}
                onChange={(e) => setAgreement({ ...agreement, item: e.target.value })}
            />

            <TextField
                label="Agreement Type"
                type='text'
                value={agreement.agreementType}
                onChange={(e) => setAgreement({ ...agreement, agreementType: e.target.value })}
            />

            <TextField
                label="Period of the Agreement"
                type='text'
                value={agreement.periodOfTheAgreement}
                onChange={(e) => setAgreement({ ...agreement, periodOfTheAgreement: e.target.value })}
            />
            <TextField
                    label="Start Date"
                    type='text'
                    value={agreement.startDate || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    label="End Date"
                    type='text'
                    value={agreement.endDate || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    label="Telephone Number"
                    type='text'
                    value={agreement.telephone || ''}
                    InputProps={{
                        readOnly: true,
                    }}
                />
            
            <br /><br />
            <Button variant="contained" onClick={handleSubmit}>
                Save
            </Button><br /><br />
        </Box>
    );
}
