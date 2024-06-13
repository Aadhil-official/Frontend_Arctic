import { EmployeeList, UserEdit, EmployeeListAd, Contacts, Logins, Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass, UserView } from './Pages/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Toaster
      // toastOptions={{
      //   style: {

      //   },}}
      />

      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/login' element={<Logins />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login/forgetpassword' element={<ForPassword />} />
        <Route path='/login/welcome' element={<Welcome />} />
        <Route path='/login/welcome/employeelist' element={<EmployeeList />} />
        <Route path='/login/welcome/employeelist/view/:id' element={<UserView />} />
        <Route path='/login/welcomeadmin/employeelistad' element={<EmployeeListAd />} />
        <Route path='/login/welcomeadmin/employeelistad/edit/:id' element={<UserEdit />} />
        <Route path='/login/welcomeadmin' element={<Welcomeadmin />} />
        <Route path='/login/complaint' element={<Usercomplaint />} />
        <Route path='/login/complaintread' element={<Admcomred />} />
        <Route path='/login/forgetpassword/resetpass' element={<ResetPass />} />
      </Routes>
    </>
  );
}

export default App;
