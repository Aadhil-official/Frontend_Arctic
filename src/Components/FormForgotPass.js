import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dismiss, error, loading, success } from '../util/Toastify';


function FormForgotPass() {

    const [email, setEmail] = useState('');


    const navigate = useNavigate();

    const validateForm = z.object({
        email: z.string().email('Invalid email address.')
    });

    const handleSubmit = () => {

        const loadingId = loading("Sending OTP.....");

        const data = {
            email: email
        };


            const result = validateForm.safeParse(data);
            if (result.success) {
                axios.post('http://localhost:8080/api/auth/send-otp', data)
                    .then(() => {
                        dismiss(loadingId);
                        navigate('/login/forgetpassword/resetpass');
                        success('OTP sended successfully!')
                    })
                    .catch(() => {
                        dismiss(loadingId);
                        error("The email is not exist please enter valid email");
                    })
            } else {
                dismiss(loadingId);
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
                    // '& .MuiTextField-root': { m: 1 },
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
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button><br />
            </Box>
        </>
    )
}

export default FormForgotPass





