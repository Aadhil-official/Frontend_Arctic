import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { error, success} from '../util/Toastify';

function FormResetPass() {

    const [newpass, setNewpass] = useState('');
    const [conformpass, setConformpass] = useState('');


    const navigate = useNavigate();

    const validateForm = z.object({
        newpass: z.string().min(8, "Must be at least 8 characters"),

        conformpass: z.string().min(8, "Must be at least 8 characters").refine(data => data === newpass, {
            message: "Passwords do not match",
            path: ['conformpass']
        })
    });


    const handleSubmit = () => {

        const data = {
          newpass:newpass,
          conformpass:conformpass
        };

    const result = validateForm.safeParse(data);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/update-password', data)
        .then(() => {
          navigate('/login');
          success('Changed the password successfully!')
        })
        .catch(() => error("Server Error"))
    } else {
      const formattedError = result.error.format();
      if (formattedError.newpass?._errors) {
        error(String(formattedError.newpass?._errors));
      } else if (formattedError.conformpass?._errors) {
        error(String(formattedError.conformpass?._errors));
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
                    id="newpass"
                    label="New password"
                    type='password'
                    onChange={(e) => setNewpass(e.target.value)}
                /><br />

                <TextField
                    id="conformpass"
                    label="Conform password"
                    type='password'
                    onChange={(e) => setConformpass(e.target.value)}
                /><br /><br />

                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button><br /><br />
            </Box>
    </>
  )
}

export default FormResetPass