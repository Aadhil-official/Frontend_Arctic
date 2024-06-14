import { EmployeeList, UserEdit, EmployeeListAd, Contacts, Logins, Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass, UserView, ItemLis, ItemListAd, ItemView, ItemEdit } from './Pages/index';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import ItemLis from './Pages/Lists/User/ItemLis';


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
        <Route path='/login/welcome/itemList' element={<ItemLis />} />
        <Route path='/login/welcomeadmin/itemListAd' element={<ItemListAd />} />
        <Route path='/login/welcome/itemList/view/:id' element={<ItemView />} />
        <Route path='/login/welcomeadmin/itemListAd/edit/:id' element={<ItemEdit/>} />
      </Routes>
    </>
  );
}

export default App;
