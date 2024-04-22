import React from 'react';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Link } from 'react-router-dom';
import '../Style/Login.css';
import Form from '../Components/Form';
import { Typography } from '@mui/material';

export default function Logins() {

  return (
    <>
  <NormalHeaderBar />
 
    <div className="text">
    <Typography variant='h3' sx={{fontWeight:'bold'}}><center>Sign in</center></Typography>
      </div>
  <div>
   <h4><center>Sign in to your account</center></h4>
      </div>
     
      <br />

      <div className="box">

        <div className="box-content">
        <Form/>

        </div> 
      </div>

      <div>
        <h4><center>Forget Password?  
          <Link to={"/login/forgetpassword"} style={{color:'red'}}>
             Click here to Reset
             </Link>
             </center></h4>
    
       </div>
      <ul className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>
    </>
  );
}
