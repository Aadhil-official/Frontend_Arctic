import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../util/Toastify';

export default function FormSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // State to hold the selected role
  const navigate = useNavigate();

  const handleSubmit = () => {

    const allowedRoles = ['admin', 'mod', 'user'];

    const validateForm = z.object({
      username: z.string().min(1, { message: "Enter your name" }),
      password: z.string().min(8, 'Password must be at least 8 characters long'),
      email: z.string().email('Invalid email address'),
      roles: z.array(z.string().refine((role) => allowedRoles.includes(role), {
        message: 'Invalid role. Please choose either admin, moderator, or user.'
      }))
    });

    const userData = {
      username: username,
      password: password,
      email: email,
      roles: [role] // Send role as an array containing the selected role
    };

    const result = validateForm.safeParse(userData);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/signup', userData)
        .then(() => {
          navigate('/');
          success('User created successfully!')
        })
        .catch(() => error("Server Error"))
    } else {
      const formattedError = result.error.format();
      if (formattedError.username?._errors) {
        error(String(formattedError.username?._errors));
      } else if (formattedError.password?._errors) {
        error(String(formattedError.password?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors));
      } else if (formattedError.roles?._errors) {
        error(String(formattedError.roles?._errors));
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
          label="Name"
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          select
          label="Role"
          onChange={(e) => setRole(e.target.value)}
          SelectProps={{ native: true }}
        >
          <option value=""></option>
          <option value="admin">Admin</option>
          <option value="mod">Moderator</option>
          <option value="user">User</option>
        </TextField><br /><br />
        <Button variant="contained" onClick={handleSubmit}>
          Signup
        </Button><br /><br />
      </Box>


    </>

  );
}
