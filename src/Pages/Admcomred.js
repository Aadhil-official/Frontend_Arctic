import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

function Admcomred() {

  const location = useLocation();
  const complaindata = location.state.complaindata;

  console.log(complaindata);

  const handleButtonClick = (complaint) => {
    
  };

  return (
    <>
      <Typography variant='h1'>Complaints</Typography>
      
        
      <ul>
        {complaindata.map((complaint, index) => (
          <li key={index}>
            <div>
              Subject: {complaint.subject}, Date: {complaint.complaindate}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Admcomred;
