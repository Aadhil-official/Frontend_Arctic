import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ButtonComplain from './ButtonComplain';



function ComplaintForm() {

    const [subject, setSubject] = useState('');
const [object, setObject] = useState('');
const [email, setEmail] = useState('');
const [complaindate, setDate] = useState('');

useEffect(() => {
  // Function to get the current date in "YYYY-MM-DD" format
  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
    const day = currentDate.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set complaindate to the current date on component mount
  setDate(getCurrentDate());
}, []); // Empty dependency array to run this effect only once on mount


function HandleSubmit()
{

const navigate = useNavigate();

const data = {
    subject: subject,
    object: object,
    email: email,
    complaindate: complaindate
}

  if(subject!== "" && object!== "" && email!== "" && complaindate!== "")
  {
    axios.post('http://localhost:8080/api/auth/complain', data)
    .then(() => {
      alert("Complained successfully!");
      navigate('/');
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
      <TextField
        id="subject"
        label="Subject"
        // value={username}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
     
     <TextField 
        label="Email"
        id="email"
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextField
      id='object'
        label="Object"
        // id="outlined-required"
        // value={roles}
        onChange={(e) => setObject(e.target.value)}
        multiline
        rows={4}
        required
      />

      <TextField
        id='date'
        type='date'
        // label=""
        value={complaindate}
        onChange={(e) => setDate(e.target.value)}
        required
      />
    </div>
  </Box>
  <ButtonComplain variant="contained" onClick={HandleSubmit()}/>
    </div>
  )
}

export default ComplaintForm