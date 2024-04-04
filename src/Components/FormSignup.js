import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ButtonSignup from './ButtonSignup';


function FormSignup() {
    
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


function HandleSubmit()
{


const navigate = useNavigate();

const data = {
  username: username,
  password: password
}

  if(username!=null && password!=null)
  {
    axios.post('http://localhost:8080/api/auth/signup', data)
    .then((response) => {
      console.log(response);
      navigate('/login');
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

  return (
    <div>
        <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      {/* <form onSubmit={(e)=>onSubmit(e)}> */}
      <TextField
        id="outlined-required"
        label="Name"
        // value={username}
        // onChange={(e)=>onInputChange(e)}
      />
     
     <TextField 
        label="Email"
        id="outlined-required"
        // value={email}
        // onChange={(e)=>onInputChange(e)}
      />

      <TextField
        label="Role"
        id="outlined-required"
        // value={roles}
        // onChange={(e)=>onInputChange(e)}
      />

      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        // value={password}
        // onChange={(e)=>onInputChange(e)}
      />
    {/* </form> */}
    </div>
  </Box>
  <ButtonSignup/>
    </div>
  )
}

export default FormSignup