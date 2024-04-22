import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import '../Style/Contact.css';
import { Link } from 'react-router-dom';


function Contact() {

  return (
      <div>
      <ResponsiveAppBar/>

  <div class="text">
  <p>Contact Us</p>
  </div>

  <div>
  <div class="column1">
<img src="https://cdn-icons-png.flaticon.com/128/13/13936.png" heigh="60px" width="60px" alt='phone'></img>
<br/>

<img src="https://cdn-icons-png.flaticon.com/128/900/900310.png" heigh="60px" width="60px" alt='telephone'></img>
<br/>
<img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png"heigh="60px" width="60px" alt='email'></img>
<br/><br/>
   <img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" heigh="60px" width="60px" alt='location'></img>
   <br/>
<img src="https://cdn-icons-png.flaticon.com/128/1927/1927656.png" heigh="60px" width="60px" alt='website'></img>
  </div>
<div class="column2">
 <p>
 (+94) (011) 2869835
 </p>
 </div>
 <div class="column2">
 <p>
 (+94) (011) 2869836
 </p>
 </div>
 <div class="column2">
 <p>
 chamila@arctic.lk/Arctic@sltnet.lk
 </p>
 </div>
 <div class="column2">
 <p>
 27 Perakumba Mawatha,
Sri Jayawardenepura Kotte,sri lanka.
 </p>
 </div>
 <div class="column2">
 {/* <p onClick={toWebsite}> */}
 <Link to="https://www.arctic.lk">
 <p>
 www.arctic.lk
 </p>
 </Link>
 </div>
 
</div>
<div class="iframe">
<center>
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8911652809784!2d79.90347757367157!3d6.903616793095686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f73cc32a29%3A0x32d928d23b9faca3!2sArctic(Pvt)Ltd!5e0!3m2!1sen!2slk!4v1704474648219!5m2!1sen!2slk" width="60%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='company loaction' /> 
{/* </iframe> */}
</center>
</div>



<div class="footer">

<div class="footer-text">
<p>© 2023 • All Rights Reserved</p>
</div>
</div>
</div>
    );
  }


export default Contact;