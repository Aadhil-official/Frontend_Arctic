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

  const { setTempdata, setTempdataGroup, setButtonData, tempdata } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Move useNavigate inside the component function
  const validateForm = z.object({
    username: z.string().min(1, { message: "Enter your name" }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  });

  const buttonDataAd = [
    { label: 'Create user', link: '/signup' },
    { label: 'Complaints', link: '/login/complaintread' },
    { label: 'Employee Details', link: '/login/welcomeadmin/employeelistad' },
    { label: 'Item Details', link: '/login/welcomeadmin/itemListAd' },
    { label: 'Unit Details', link: '/login/welcomeadmin/unitListAd' },
    { label: 'Vehicle Details', link: '/login/welcomeadmin/vehicleListAd' },
    { label: 'Customer Details', link: '/login/welcomeadmin/customerListAd' },
    { label: 'User Group Details', link: '/login/welcomeadmin/userGroupListAd' },
    { label: 'Job Details', link: '/jobListForAdmin' },
    { label: 'Calendar', link: '/base/calendar' },
    { label: 'Set Reminder', link: '/base/reminder' },
    { label: 'Service Agreement Details', link: '/ServiceAgreementSix' },
    { label: 'Site Visit Details', link: '/SiteVisitDashboard' }
  ];

  const buttonDataEmp = [
    { label: 'Employee Details', link: '/login/welcome/employeelist' },
    { label: 'Item Details', link: '/login/welcome/itemList' },
    { label: 'Unit Details', link: '/login/welcome/unitList' },
    { label: 'Vehicle Details', link: '/login/welcome/vehicleList' },
    { label: 'Customer Details', link: '/login/welcome/customerList' },
    { label: 'User Group Details', link: '/login/welcome/userGroupList' },
    { label: 'Job Details', link: '/jobListForUser' },
    { label: 'Calendar', link: '/base/calendarEmp' },
    { label: 'Service Agreement Details', link: '/ServiceAgreementFive' },
    { label: 'Site Visit Details', link: '/SiteVisitFourEmployee' },
  ];

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
          const tempdata1 = response.data;
          setTempdata(tempdata1.userInfo);
          setTempdataGroup(tempdata1.userGroup);
          // const token = tempdata.token;

          // if (token) {
          //   localStorage.removeItem('jwtToken');
          //   // localStorage.setItem('jwtToken', token); // Store token in localStorage
          // } else {
          //   console.error('No token found in response');
          // }

          const role = tempdata1.userInfo.roles[0]; // This will be 'ADMIN'
          if (role === 'ADMIN' && tempdata.usergroup === "AdminGroup") {
            setButtonData(buttonDataAd);
            setTimeout(() => {
              success('Login successful!');
            }, 1000); // 1 second delay
            navigate('/base/dashboard');
          } else if (role === 'ADMIN') {
            setButtonData(buttonDataAd);
            success('Login successful!');
            setTimeout(() => {
              navigate('/login/welcomeadmin');
            }, 1000); // 1 second delay
          } else {
            setButtonData(buttonDataEmp);
            success('Login successful!');
            setTimeout(() => {
              navigate('/login/welcome');
            }, 1000); // 1 second delay
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
          '& .MuiTextField-root': { m: 1 },
          textAlign: 'center',
          mt: 3
        }}
        noValidate
        autoComplete='off'
      >

        <TextField
          label="Name"
          type='text'
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <TextField
          label="Password"
          type="password"
          fullWidth
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
