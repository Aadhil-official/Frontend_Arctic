import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function FormSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // State to hold the selected role
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password || !email || !role) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate role against allowed roles
    const allowedRoles = ['admin', 'mod', 'user'];
    if (!allowedRoles.includes(role)) {
      alert('Invalid role. Please choose either admin, mod, or user.');
      return;
    }

    const userData = {
      username: username,
      password: password,
      email: email,
      roles: [role] // Send role as an array containing the selected role
    };

    axios.post('http://localhost:8080/api/auth/signup', userData)
      .then(() => {
        alert('Signup successful!');
        navigate('/');
      })
      .catch((error) => {
        alert(error.response.data.message || 'Signup failed. Please try again.');
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

      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        SelectProps={{ native: true }}
      >
        <option value=""></option>
        <option value="admin">Admin</option>
        <option value="mod">Moderator</option>
        <option value="user">User</option>
      </TextField>

    </Box>
    
    <Button variant="contained" onClick={handleSubmit}>
    Signup
  </Button>
  </>
  );
}
