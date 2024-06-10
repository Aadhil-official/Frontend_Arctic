import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { z } from 'zod';
import { error, success } from '../util/Toastify';

function ComplaintForm() {

  const navigate = useNavigate();

  const [subject, setSubject] = useState('');
  const [object, setObject] = useState('');
  const [email, setEmail] = useState('');
  const [complaindate, setDate] = useState('');
  const [tempdata, setTempdata] = useState([]);
  // const [admintype, setAdmintype] = useState('');

  const location = useLocation();

  useEffect(() => {
    const getCurrentDate = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
      const day = currentDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    if (location.state && location.state.tempdata.email) {
      setEmail(location.state.tempdata.email);
      setTempdata(location.state.tempdata);
    }
    // Set complaindate to the current date on component mount
    setDate(getCurrentDate());
  }, [location.state]); // Empty dependency array to run this effect only once on mount


  function HandleSubmit() {

    // const allowedTypes = ['employee', 'vehicle', 'unit', 'item', 'sitevisit', 'service', 'job', 'calander', 'custemer', 'usergroup'];

    const data = {
      subject: subject,
      object: object,
      email: email,
      // admintype: [admintype],
      complaindate: complaindate
    }

    const validateForm = z.object({
      subject: z.string().min(1, { message: 'Enter the subject' }),
      object: z.string().min(1, { message: 'Enter the object' }),
      // email: z.string().email({ message: 'Invalid email address' }),
      // admintype: z.array(z.string()).refine((value) => allowedTypes.includes(value[0]), {
      //   message: "Admin type is not define"
      // })
    });

    const result = validateForm.safeParse(data);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/complaints', data)
        .then(() => {
          navigate('/login/welcome', { state: { tempdata } });
          success('Complain added successfully!')
        })
        .catch(() => error("Failed to add complain"));
    } else {
      const formattedError = result.error.format();
      if (formattedError.subject?._errors) {
        error(String(formattedError.subject?._errors));
      } else if (formattedError.object?._errors) {
        error(String(formattedError.object?._errors))
      } 
      // else if (formattedError.email?._errors) {
      //   error(String(formattedError.email?._errors))
      // }
      // else if (formattedError.admintype?._errors) {
      //   error(String(formattedError.admintype?._errors));
      // }
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
          onChange={(e) => setSubject(e.target.value)}
        />

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