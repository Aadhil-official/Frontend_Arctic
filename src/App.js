import { EmployeeList, EmployeeListAd, Contacts, Logins , Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass} from './Pages/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserEdit from './Pages/UserEdit';
// import ResetPass from './Pages/ResetPass';


function App() {
  return (
    <>
    <Toaster 
    // toastOptions={{
    //   style: {
        
    //   },}}
    />
  
        <Routes>
        <Route path="/" element={<Homes/>} /> 
        <Route path='/contact'element={<Contacts/>} />
        <Route path='/login' element={<Logins/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login/forgetpassword' element={<ForPassword/>} />        
        <Route path='/login/welcome' element={<Welcome/>} />
        <Route path='/login/welcome/employeelist' element={<EmployeeList/>} />
        <Route path='/login/welcome/employeelistad' element={<EmployeeListAd/>} />
        <Route path='/login/welcome/employeelistad/edit/:id' element={<UserEdit/>} />
        <Route path='/login/welcomeadmin' element={<Welcomeadmin/>} />
        <Route path='/login/complaint' element={<Usercomplaint/>} />
        <Route path='/login/complaintread' element={<Admcomred/>} />
        <Route path='/login/forgetpassword/resetpass' element={<ResetPass/>} />
      </Routes>   
    </>
  );
}

export default App;
