import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Button from './Button'


export default function FormPropsTextFields() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const navigate = useNavigate();

  const data = {
    username: username,
    password: password
  }

  function HandleSubmit() {

      axios.post('http://localhost:8080/api/auth/signin', data)
        .then((response) => {
          console.log(response);
          
          navigate('/login/welcome');
          
        console.log("hiiiii");
        })
        .catch((error) => {
          console.log(error);
        })

  }


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
          // value={data.username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <TextField
          label="Password"
          type="password"
          // autoComplete="current-password"
          // value={data.password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Box>
      <Button variant="contained" onClick={HandleSubmit} />
    </>
  );
}