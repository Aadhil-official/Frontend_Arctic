import { Grid } from '@mui/material';
import { ResponsiveAppBar, Footer } from '../Components/index';
import '../Style/Contact.css';
import { Link } from 'react-router-dom';


function Contact() {

  return (
    <>
      <ResponsiveAppBar />
      <br />
      <Grid container className="text">
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid>Contact Us</Grid>
      </Grid>
      <br /><br />
      <Link to='tel:(+94) (011) 2869835' style={{ textDecoration: 'none' }}>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
          <Grid item lg={1} md={1} sm={1} xs={0} sx={{ marginRight: '10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/4121/4121811.png" heigh="60px" width="60px" alt='phone' />
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9} className="column2" sx={{ marginBottom: '5px' }}>(+94) (011) 2869835</Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        </Grid>
      </Link>
      <Link to='tel:(+94) (011) 2869836' style={{ textDecoration: 'none' }}>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
          <Grid item lg={1} md={1} sm={0} xs={0} sx={{ marginRight: '10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/900/900310.png" heigh="60px" width="60px" alt='telephone' />
          </Grid>
          <Grid item lg={0} md={9} sm={9} xs={9} className="column2" sx={{ marginBottom: '5px' }}>(+94) (011) 2869836</Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        </Grid>
      </Link>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid item lg={1} md={1} sm={0} xs={0} sx={{ marginRight: '10px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" heigh="60px" width="60px" alt='email' />
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={9} className="column2" sx={{ marginBottom: '5px' }}>
          <a href="mailto:chamila@arctic.lk" style={{ textDecoration: 'none' }}>
            chamila@arctic.lk
          </a>
          /
          <a href="mailto:Arctic@sltnet.lk" style={{ textDecoration: 'none' }}>
            Arctic@sltnet.lk
          </a>
        </Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      </Grid>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid item lg={1} md={1} sm={0} xs={0} sx={{ marginRight: '10px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" heigh="60px" width="60px" alt='location' />
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={9} className="column2" sx={{ marginBottom: '5px' }}>27 Perakumba Mawatha, Sri Jayawardenepura Kotte,sri lanka.</Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
      </Grid>
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>

        <Grid item lg={1} md={1} sm={0} xs={0} sx={{ marginRight: '10px' }}>
          <img src="https://cdn-icons-png.flaticon.com/128/1927/1927656.png" heigh="60px" width="60px" alt='website' />
        </Grid>
        <Grid item lg={9} md={9} sm={9} xs={9} className="column2"><Link to="https://www.arctic.lk" style={{ textDecoration: 'none' }}>www.arctic.lk</Link></Grid>
        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>

      </Grid><br />
      <Grid container>
        <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}></Grid>
        <Grid item lg={7} md={7} sm={7} xs={7}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8911652809784!2d79.90347757367157!3d6.903616793095686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f73cc32a29%3A0x32d928d23b9faca3!2sArctic(Pvt)Ltd!5e0!3m2!1sen!2slk!4v1704474648219!5m2!1sen!2slk" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='company loaction' />
        </Grid>
        <Grid item lg={2.5} md={2.5} sm={2.5} xs={2.5}></Grid>
      </Grid><br />
      <Footer />
    </>
  );
}

export default Contact;