import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../util/Toastify';

export default function FormSignup() {

  const [loadingToastId, setLoadingToastId] = useState(null);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // State to hold the selected role
  const [address, setAddress] = useState('');
  const [usergroup, setUsergroup] = useState('');
  const [tel, setTel] = useState('');
  const [usergroups, setUsergroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (usergroup === 'AdminGroup') {
      setRole('admin');
    }
    axios.get("http://localhost:8080/api/auth/getAllUserGroups")
      .then((response) => {
        setUsergroups(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user groups:", error);
      });
  }, [usergroup]);

  const handleSubmit = () => {

    const loadingId = loading("Creating new user...");

    const allowedRoles = ['admin', 'user'];

    const validateForm = z.object({
      username: z.string().min(1, { message: "Enter your name" }),
      address: z.string().min(1, { message: "Enter your address" }),
      tel: z.string().min(10, { message: "Enter your valid contact number" }).max(12, { message: "Enter your valid contact number" }),
      usergroup: z.string().min(1, 'Enter the user group'),
      email: z.string().email('Invalid email address'),
      roles: z.array(z.string()).nonempty('Please select a role!').refine((role) => allowedRoles.includes(role[0]), {
        message: 'Role is not defined.'
      })
    });

    const userData = {
      username: username,
      email: email,
      address: address,
      usergroup: usergroup,
      tel: tel,
      roles: [role] // Send role as an array containing the selected role
    };

    const result = validateForm.safeParse(userData);
    if (result.success) {
      axios.post('http://localhost:8080/api/auth/signup', userData)
        .then(() => {
          dismiss(loadingId);
          navigate('/login/welcomeadmin');
          success('User created successfully!')
        })
        .catch(() => {
          dismiss(loadingId);
          error("Username or email already exist!")
        })
    } else {
      dismiss(loadingToastId);
      const formattedError = result.error.format();
      if (formattedError.username?._errors) {
        error(String(formattedError.username?._errors));
      } else if (formattedError.email?._errors) {
        error(String(formattedError.email?._errors));
      } else if (formattedError.roles?._errors) {
        error(String(formattedError.roles?._errors));
      } else if (formattedError.address?._errors) {
        error(String(formattedError.address?._errors));
      } else if (formattedError.tel?._errors) {
        error(String(formattedError.tel?._errors));
      }
    }

  };

  const handleReset = () => {
    setUsername('');
    setUsergroup('');
    setTel('');
    setRole('');
    setEmail('');
    setAddress('');
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '80%' },
          textAlign: 'center',
          mt: 3
        }}
        noValidate
        autoComplete="off"
      >

        {/* {console.log("asfcfcghas.....dat....."+usergroups)} */}
        <TextField
          label="Username"
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          label="Address"
          type="text"
          multiline
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />


        <TextField
          label="Email"
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Contact No"
          type='text'
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <TextField
          select
          label="Designation"
          value={role}
          InputProps={{
            readOnly: usergroup === 'AdminGroup'
          }}
          onChange={(e) => setRole(e.target.value)}
          SelectProps={{ native: true }}
        >
          <option value=""></option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </TextField>

        <TextField
          select
          label="User group"
          value={usergroup}
          onChange={(e) => setUsergroup(e.target.value)}
          SelectProps={{ native: true }}
        >
          <option value=""></option>
          {usergroups.map((group, index) => (
            <option key={index} value={group.groupName}>{group.groupName}</option>
          ))}
        </TextField>

        <br /><br />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            marginRight: { xs: 4, sm: 4, md: 5 }
          }}>
          Signup
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <br /><br />
      </Box>


    </>

  );
}
