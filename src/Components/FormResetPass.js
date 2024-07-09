import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dismiss, error, loading, success } from '../util/Toastify';


function FormResetPass() {


  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [conformpass, setConformpass] = useState('');

  const navigate = useNavigate();

  const validateForm = z.object({
    email: z.string().email('Invalid email!..'),
    otp: z.string().min(6, "Invalid OTP"),
    newPassword: z.string().min(8, "Must be at least 8 characters").refine(data => data === conformpass, {
      message: "Passwords do not match",
      path: ['conformpass']
    }),
    conformpass: z.string().min(8, "Must be at least 8 characters").refine(data => data === newPassword, {
      message: "Passwords do not match",
      path: ['conformpass']
    })
  });


  const handleSubmit = () => {


    const loadingId = loading("Updating password");

    const data = {
      email: email,
      otp: otp,
      newPassword: newPassword,
      conformpass: conformpass
    };

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/update-password', data)
        .then(() => {
          dismiss(loadingId);
          navigate('/login');
          success('Changed the password successfully!')
        })
        .catch(() => {
          dismiss(loadingId);
          error("Enter your correct email and OTP!..")
        })
    } else {
      dismiss(loadingId);
      const formattedError = result.error.format();
      if (formattedError.newPassword?._errors) {
        error(String(formattedError.newPassword?._errors));
      } else if (formattedError.conformpass?._errors) {
        error(String(formattedError.conformpass?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors));
      } else if (formattedError.otp?._errors) {
        error(String(formattedError.otp?._errors));
      }
    }
  };



  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
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
        /><br />

        <TextField
          id="otp"
          label="OTP"
          type='text'
          fullWidth
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        /><br />

        <TextField
          id="newpass"
          label="New password"
          type='password'
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /><br />

        <TextField
          id="conformpass"
          label="Conform password"
          type='password'
          fullWidth
          value={conformpass}
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