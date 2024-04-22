import Contacts from './Pages/Contacts';
import Logins from './Pages/Logins';
import './App.css';
import Welcome from './Pages/Welcome';
import ForPassword from './Pages/Forpassword';
import Homes from './Pages/Homes';
// import {BrowserRouter as Router ,Route, Routes } from 'react-router';
import Signup from './Pages/Signup';
import Welcomeadmin from './Pages/Welcomeadmin';
import Usercomplaint from './Pages/Usercomplaint';
// import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import Profiles from './Components/Profiles';
// import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { Route, Routes } from 'react-router-dom';//BrowserRouter as Router,
// import HomeLogout from './Pages/HomeLogout';

function App() {
  return (
    <>
    {/* <Router> */}
      
        <Routes>
          {/* <Route exact path="/login/welcome" component={Profiles} /> */}
          {/* <Route path="/" component={ResponsiveAppBar} /> */}
        
        <Route path="/" element={<Homes/>} />   {/* this is our route path of our application for this we need a page as element */}
        {/* <Route path='/homes' element={<HomeLogout/>} */}
        <Route path='/contact'element={<Contacts/>} />
        <Route path='/login' element={<Logins/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login/forgetpassword' element={<ForPassword/>} />        
        <Route path='/login/welcome' element={<Welcome/>} />
        <Route path='/login/welcomeadmin' element={<Welcomeadmin/>} />
        <Route path='/login/complaint' element={<Usercomplaint/>} />
      </Routes> 
      
    {/* </Router> */}
      {/* now to nevigate automaticaly to page we use link */}   
    </>
  );
}

export default App;
