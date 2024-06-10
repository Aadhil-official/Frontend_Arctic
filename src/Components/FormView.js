import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../util/Toastify';

function FormView() {
    const [filter, setFilter] = useState('');
    const [startDate, setStartDate] = useState(' '); // State to hold the selected role
    const [endDate, setEndDate] = useState(' ');
    const navigate = useNavigate();

    const handleSubmit = () => {

        const allowedFilter = ['maintanace', 'service'];

        const datetimeRegex = /^\d{4}-\d{2}-\d{2}$/;

        const validateForm = z.object({
            startDate: z.string()
                .min(1, { message: "Enter Start date" })
                .regex(datetimeRegex, { message: "Correct the date" }),
            endDate: z.string()
                .min(1, { message: "Enter End date" })
                .regex(datetimeRegex, { message: "Correct the date" }),
            filter: z.array(z.string()).nonempty('Please select a role!')
                .refine((filter) => allowedFilter.includes(filter[0]), {
                    message: 'Filter is not defined.'
                })
        });

        const userData = {
            startDate: startDate,
            // password: password,
            endDate: endDate,
            filter: filter,
        };

        const result = validateForm.safeParse(userData);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/signup', userData)
                .then(() => {
                    navigate('/#');
                    success('This is the search resuls')
                })
                .catch(() => error("Username or email already exist!"))
        } else {
            const formattedError = result.error.format();
            if (formattedError.filter?._errors) {
                error(String(formattedError.filter?._errors));
            } else if (formattedError.startDate?._errors) {
                error(String(formattedError.startDate?._errors));
            } else if (formattedError.endDate?._errors) {
                error(String(formattedError.endDate?._errors));
            }
        }

    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    flexDirection: 'column',
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    textAlign: 'center',
                    mt: 3
                }}
                noValidate
                autoComplete="off"
            >
                <Box sx={{ flexDirection: 'column', gap: 5 }}>
                    <TextField
                        select
                        label="Filter Type"
                        onChange={(e) => setFilter(e.target.value)}
                        SelectProps={{ native: true }}
                    >
                        <option value=""></option>
                        <option value="service">Service</option>
                        <option value="maintanace">Maintanace</option>
                    </TextField>

                    <Box>
                        <TextField
                            label="Date From"
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                        <TextField
                            label="Date To"
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </Box>
                </Box>
                <br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Find
                </Button><br /><br />
            </Box>

        </>

    );
}

export default FormView;
