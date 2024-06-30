import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../util/Toastify';
import { useUser } from '../Context/UserContext';


export default function FormPropsTextFields() {

  const { setTempdata,setTempdataGroup } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Move useNavigate inside the component function
  const validateForm = z.object({
    username: z.string().min(1, { message: "Enter your name" }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  });


  const handleSubmit = () => {

    const loadingId = loading("loading......");

    const data = {
      username: username,
      password: password
    };

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/signin', data)
        .then((response) => {
          dismiss(loadingId);
          const tempdata = response.data;
          setTempdata(tempdata.userInfo);
          setTempdataGroup(tempdata.userGroup);
          // const token = tempdata.token;

          // if (token) {
          //   localStorage.removeItem('jwtToken');
          //   // localStorage.setItem('jwtToken', token); // Store token in localStorage
          // } else {
          //   console.error('No token found in response');
          // }

          const role = tempdata.userInfo.roles[0]; // This will be 'ADMIN'

          if (role === 'ADMIN') {
            // checkForNewComplaints();
            navigate('/login/welcomeadmin');
            success('Login successful!')
          } else {
            navigate('/login/welcome');
            success('Login successful!')
          }
        })
        .catch(() => {
          dismiss(loadingId);
          error("Invalid username or password!")
        });

    } else {
      dismiss(loadingId);
      const formattedError = result.error.format();
      if (formattedError.username?._errors) {
        error(String(formattedError.username?._errors));
      } else if (formattedError.password?._errors) {
        error(String(formattedError.password?._errors));
      }
    }
  };

  // const checkForNewComplaints = async () => {
  //   const lastChecked = localStorage.getItem('lastChecked');
  //   const newTimestamp = new Date().toISOString();
  //   if (!lastChecked || new Date(lastChecked) < new Date(newTimestamp)) {
  //     localStorage.setItem('newComplaints', 'true');
  //   }
  // };


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
        autoComplete='off'
      >

        <TextField
          label="Name"
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <Button variant="contained" onClick={handleSubmit}>
          Sign in
        </Button><br /><br />
      </Box>
    </>
  );
}
