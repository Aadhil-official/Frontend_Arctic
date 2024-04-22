import React from 'react'
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import ComplaintForm from '../Components/ComplaintForm';
import { Typography } from '@mui/material';

function Usercomplaint() {
  return (
    <>
      <NormalHeaderBar />

      <div className="text">
        <Typography variant='h3' sx={{ fontWeight: 'bold' }}><center>Complaints</center></Typography>
      </div>
      <div>
        <h4><center>Enter your complaint here</center></h4>
      </div>

      <br />

      <div className="box">

        <div className="box-content">
          <ComplaintForm />

        </div>
      </div>

      <div>
        <h4><center>To ignore?
          <Link to={"/login/welcome"} style={{ color: 'red' }}>
            Click here
          </Link>
        </center></h4>

      </div>
      <ul className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>

    </>
  )
}

export default Usercomplaint