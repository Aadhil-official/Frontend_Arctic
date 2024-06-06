import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Grid, Typography } from '@mui/material';
import { NormalHeaderBar } from '../Components/index';
import { Link } from 'react-router-dom';

const EmployeeListAd = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:8080/api/auth/findappusers')
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <>
    <NormalHeaderBar/>
    <Grid container spacing={2}>
        <Grid item>
          <Link to={"/login/welcomeadmin"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6',position:'absolute',margin:'5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>
      <Grid container textAlign='center' justifyContent='center'>
        <Grid item xs={12}>
          <Typography variant='h2'>
            User Details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {users.map((user,index)=> (
            <Grid item xs={12} key={index}>
              <Button>
                {user.username}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default EmployeeListAd;
