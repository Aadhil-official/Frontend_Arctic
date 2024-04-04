import { useState } from 'react';
import '../Style/Forpassword.css';
// import { BrowserRouter as Browser,Router,Route,Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NormalHeaderBar from '../Components/NormalHeaderBar';
import { Grid } from '@mui/material';

function ForPassword() {

  const [user, setUser] = useState(
    {
      email: ""
    }
  )

  return (
    <>
      <Grid container spacing={2}>
        <NormalHeaderBar/>
        
        <div class="box">

          <div class="box-content">
            <img src="https://cdn-icons-png.flaticon.com/128/3000/3000482.png" width="60px" height="60px" align="center" alt=''></img>
            <div class="forget-password">
              <br />
              Forgot Password
            </div>
            <div class="paragraph">
              <p>Enter your email and we'll send you a link to reset your password</p>
              <br />
            </div>


            <div>
              {/* form to enter email and submit it */}
              <form action="/submit_form_endpoint" method="post">
                <input type="email" id="email" name="email" required /><br /><br />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <br />

            {/* link the login page to this */}
            <p><h4><center>
              Back To Login?<Link to={"/login"} style={{ color: 'red' }} >
                Click here to login
              </Link>
            </center></h4></p>
          </div>
          <div>
          </div>
        </div>
        </Grid>
        <div class="footer">
          <div class="footer-text">
            <p>© 2023 • All Rights Reserved</p>
          </div>
        </div>
      </>
      );
}


      export default ForPassword;
