import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { error, success } from '../util/Toastify';


function FormForgotPass() {

    const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const validateForm = z.object({
        email: z.string().email('Invalid email address.')
    });

    const handleSubmit = () => {

        const data = {
            email: email
        };


            const result = validateForm.safeParse(data);
            if (result.success) {
                // loading('Sending OTP...')
                axios.post('http://localhost:8080/api/auth/send-otp', data)
                    .then(() => {
                        navigate('/login/forgetpassword/resetpass');
                        success('OTP sended successfully!')
                    })
                    .catch(() => {
                        error("Your internet connection is unstable!...")
                    })
            } else {
                const formattedError = result.error.format();
                if (formattedError.email?._errors) {
                    error(String(formattedError.email?._errors));
                }
            }
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    textAlign: 'center',
                    mt: 3
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="email"
                    label="Email"
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button><br /><br />
            </Box>
        </>
    )
}

export default FormForgotPass





