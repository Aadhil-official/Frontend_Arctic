import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success} from '../util/Toastify';


export default function FormPropsTextFields() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Move useNavigate inside the component function
  const validateForm = z.object({
    username: z.string().min(1, { message: "Enter your name" }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  });


  const handleSubmit =  () => {

    const data = {
      username: username,
      password: password
    };

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/signin', data)
        .then((response) => {
          const tempdata =   response.data;
          
          // const token = tempdata.token;
          
          // if (token) {
          //   localStorage.removeItem('jwtToken');
          //   // localStorage.setItem('jwtToken', token); // Store token in localStorage
          // } else {
          //   console.error('No token found in response');
          // }
          
          const role = tempdata.roles[0]; // This will be 'ADMIN'
          
          if(role ===  'ADMIN'){
            navigate('/login/welcomeadmin');
            success('Login successful!')

          } else {
            navigate('/login/welcome');
            success('Login successful!')
          }
        })
        .catch(() => error("Invalid username or password!please try again"));
        
    } else {
      const formattedError = result.error.format();
      if (formattedError.username?._errors) {
        error(String(formattedError.username?._errors));
      } else if (formattedError.password?._errors) {
        error(String(formattedError.password?._errors));
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
        autoComplete='off'
      >
      
        <TextField
          label="Name"
          type='text'
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <Button variant="contained" onClick={handleSubmit}>
          Signin
        </Button><br /><br />
      </Box>
    </>
  );
}
