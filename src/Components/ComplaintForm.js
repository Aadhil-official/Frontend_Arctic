import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { z } from 'zod';
import { error, success } from '../util/Toastify';

function ComplaintForm() {
  
  const navigate = useNavigate();

  const [subject, setSubject] = useState('');
  const [object, setObject] = useState('');
  const [email, setEmail] = useState('');
  const [complaindate, setDate] = useState('');

  useEffect(() => {
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


  function HandleSubmit() {


    const data = {
      subject: subject,
      object: object,
      email: email,
      complaindate: complaindate
    }

    const validateForm = z.object({
      subject: z.string().min(1, { message: 'Enter the subject' }),
      object: z.string().min(1, { message: 'Enter the object' }),
      email: z.string().email({ message: 'Invalid email address' })
    })

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/complaints', data)
        .then(() => {
          navigate('/login/welcome');
          success('Complain added successfully!')
        })
        .catch(() => error("Failed to add complain"));
    } else {
      const formattedError = result.error.format();
      if (formattedError.subject?._errors) {
        error(String(formattedError.subject?._errors));
      } else if (formattedError.object?._errors) {
        error(String(formattedError.object?._errors))
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors))
      }
    }
  }

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
          id="subject"
          label="Subject"
          // value={username}
          onChange={(e) => setSubject(e.target.value)}
          // required
        />

        <TextField
          label="Email"
          id="email"
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
          // required
        />

        <TextField
          id='object'
          label="Object"
          // id="outlined-required"
          // value={roles}
          onChange={(e) => setObject(e.target.value)}
          multiline
          rows={4}
          // required
        />

        <TextField
          id='date'
          type='date'
          // label=""
          value={complaindate}
          onChange={(e) => setDate(e.target.value)}
          // required
        /><br /><br />

        <Button variant="contained" onClick={HandleSubmit}>Submit</Button><br /><br />
      </Box>
    </>
  )
}

export default ComplaintForm