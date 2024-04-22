import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FormPropsTextFields() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Move useNavigate inside the component function

  const handleSubmit = () => {
    const data = {
      username: username,
      password: password
    };

    axios.post('http://localhost:8080/api/auth/signin', data)
      .then((response) => {
        const role = response.data.roles[0]; // This will be 'ADMIN'
        console.log(response);
        if(role === "ADMIN"){
        navigate('/login/welcomeadmin');
      }else
      {
        navigate('/login/welcome');
      }
      })
      .catch(() => {
        // Handle error (e.g., show an alert)
        alert('Invalid Username or Password');
      });
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Name"
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Box>

      <Button variant="contained" onClick={handleSubmit}>
        Signin
      </Button>
    </>
  );
}
