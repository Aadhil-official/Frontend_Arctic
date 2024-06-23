import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { z } from 'zod';
import { error, success } from '../util/Toastify';
import { useUser } from '../Context/UserContext';

function ComplaintForm() {

  const navigate = useNavigate();

  const { tempdata } = useUser();
  const [subject, setSubject] = useState('');
  const [object, setObject] = useState('');
  const [email] = useState(tempdata.email);
  const [complaindate, setDate] = useState('');

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

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
      object: z.string().min(1, { message: 'Enter the object' })
    });

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/complaints', data)
        .then(() => {
          navigate('/login/welcome');
          success('Complain added successfully!')
        })
        .catch(() => error("Please add object within 150 words"));
    } else {
      const formattedError = result.error.format();
      if (formattedError.subject?._errors) {
        error(String(formattedError.subject?._errors));
      } else if (formattedError.object?._errors) {
        error(String(formattedError.object?._errors))
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
          type='text'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {/* {console.log("tested..........",tempdata)} */}
        {/* <TextField
          label="Email"
          id="email"
          type='email'
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
        // required
        /> */}

        <TextField
          id='object'
          label="Complaints"
          type='text'
          value={object}
          // id="outlined-required"
          // value={roles}
          onChange={(e) => setObject(e.target.value)}
          multiline
          rows={4}
        // required
        />


        {/* <TextField
          select
          label="Admin Type"
          onChange={(e) => setAdmintype(e.target.value)}
          SelectProps={{ native: true }}
        >
          <option value=""></option>
          <option value="employee">Employee</option>
          <option value="vehicle">Vehicle</option>
          <option value="unit">Usnit</option>
          <option value="item">Item</option>
          <option value="sitevisit">Sitevisit</option>
          <option value="service">Service</option>
          <option value="job">Job</option>
          <option value="unit">Unit</option>
          <option value="calander">Calander</option>
          <option value="custemer">Custemer</option>
          <option value="usergroup">Usergroup</option>
        </TextField><br /> */}

        {/* <TextField
          id='date'
          type='date'
          // label=""
          value={complaindate}
          onChange={(e) => setDate(e.target.value)}
        // required
        /><br /><br /> */}
        <br /><br />
        <Button variant="contained" onClick={HandleSubmit}>Submit</Button>
      </Box>
    </>
  )
}

export default ComplaintForm