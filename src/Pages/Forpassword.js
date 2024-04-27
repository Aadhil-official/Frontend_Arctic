import '../Style/Forpassword.css';
import { Link } from 'react-router-dom';
import {NormalHeaderBar,Footer} from '../Components/index';
import { Grid } from '@mui/material';

function ForPassword() {

  // const [user, setUser] = useState(
  //   {
  //     email: ""
  //   }
  // )

  return (
    <>
            <NormalHeaderBar/><br/>
      <Grid container spacing={2}>

        
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
              <form action="/submit_form_endpoint" method="post">
                <input type="email" id="email" name="email" required /><br /><br />
                <input type="submit" value="Submit" />
              </form>
            </div>
            <br />

           
          </div>
          <div>
          </div>
        </div>
        </Grid>
        <h4><center>
              Back To Login?<Link to={"/login"} style={{ color: 'red' }} >
                Click here to login
              </Link>
            </center></h4>

        <Footer/>
      </>
      );
}


      export default ForPassword;
