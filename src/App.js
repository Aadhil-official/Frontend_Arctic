// import logo from './logo.svg';
// import { Login } from '@mui/icons-material';
// import NewJobWithJobID from './Pages/NewJobWithJobID';
// import NewJob from './Pages/NewJob';
import Contacts from './Pages/Contacts';
import Logins from './Pages/Logins';
import './App.css';
import Welcome from './Pages/Welcome';
import ForPassword from './Pages/Forpassword';
import Homes from './Pages/Homes';
import { Route, Routes } from 'react-router';
import Signup from './Pages/Signup';
import Welcomeadmin from './Pages/Welcomeadmin';
// import JobAllocation from './Pages/Joballocation';
// import JobDetails1 from './Pages/Jobdetails1';
// import JobDetails2 from './Pages/Jobdetails2';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

//      <Homes/>
//     <Contacts/>
//     <Logins/>
//     <ForPassword/>
//       <Welcome/>
//       <JobAllocation/>
//       <JobDetails1/>
//       <JobDetails2/>
//       <NewJob/>
//       <NewJobWithJobID/>


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homes/>} />   {/* this is our route path of our application for this we need a page as element */}
        <Route path='/contact'element={<Contacts/>} />
        <Route path='/login' element={<Logins/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login/forgetpassword' element={<ForPassword/>} />        
        <Route path='/login/welcome' element={<Welcome/>} />
        <Route path='/login/welcomeadmin' element={<Welcomeadmin/>} />
      </Routes> 
      {/* now to nevigate automaticaly to page we use link */}   
    </>
  );
}

export default App;
