import { EmployeeList, UserEdit, EmployeeListAd, Contacts, Logins, Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass, UserView } from './Pages/index';
import { ItemLis, ItemListAd, ItemView, ItemEdit, AddItem } from './Pages/Item/index';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ReviewedComplain from './Pages/ReviewedComplain';
import { AddUnit, UnitEdit, UnitLis, UnitListAd, UnitView } from './Pages/Unit/Index';
import { AddVehicle, VehicleEdit, VehicleLis, VehicleListAd, VehicleView } from './Pages/Vehicle/Index';
import { AddCustomer, CustomerEdit, CustomerLis, CustomerListAd, CustomerView } from './Pages/Customer/index';
import { AddUserGroup, UserGroupEdit, UserGroupLis, UserGroupListAd, UserGroupView } from './Pages/User Group/index';


function App() {
  return (
    <>
      <Toaster />
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
        <Route path='/login/complaintread/reviewedcomplain' element={<ReviewedComplain />} />
        <Route path='/login/forgetpassword/resetpass' element={<ResetPass />} />
        <Route path='/login/welcome/itemList' element={<ItemLis />} />
        <Route path='/login/welcomeadmin/itemListAd' element={<ItemListAd />} />
        <Route path='/login/welcomeadmin/itemListAd/addItem' element={<AddItem />} />
        <Route path='/login/welcome/itemList/view/:id' element={<ItemView />} />
        <Route path='/login/welcomeadmin/itemListAd/edit/:id' element={<ItemEdit />} />
        <Route path='/login/welcome/unitList' element={<UnitLis />} />
        <Route path='/login/welcomeadmin/unitListAd' element={<UnitListAd />} />
        <Route path='/login/welcomeadmin/unitListAd/addUnit' element={<AddUnit />} />
        <Route path='/login/welcome/unitList/view/:id' element={<UnitView />} />
        <Route path='/login/welcomeadmin/unitListAd/edit/:id' element={<UnitEdit />} />
        <Route path='/login/welcome/vehicleList' element={<VehicleLis />} />
        <Route path='/login/welcomeadmin/vehicleListAd' element={<VehicleListAd />} />
        <Route path='/login/welcomeadmin/vehicleListAd/addvehicle' element={<AddVehicle />} />
        <Route path='/login/welcome/vehicleList/view/:id' element={<VehicleView />} />
        <Route path='/login/welcomeadmin/vehicleListAd/edit/:id' element={<VehicleEdit />} />
        <Route path='/login/welcome/customerList' element={<CustomerLis />} />
        <Route path='/login/welcomeadmin/customerListAd' element={<CustomerListAd />} />
        <Route path='/login/welcomeadmin/customerListAd/addcustomer' element={<AddCustomer />} />
        <Route path='/login/welcome/customerList/view/:id' element={<CustomerView />} />
        <Route path='/login/welcomeadmin/customerListAd/edit/:id' element={<CustomerEdit />} />
        <Route path='/login/welcome/userGroupList' element={<UserGroupLis />} />
        <Route path='/login/welcomeadmin/userGroupListAd' element={<UserGroupListAd />} />
        <Route path='/login/welcomeadmin/userGroupListAd/adduserGroup' element={<AddUserGroup />} />
        <Route path='/login/welcome/userGroupList/view/:id' element={<UserGroupView />} />
        <Route path='/login/welcomeadmin/userGroupListAd/edit/:id' element={<UserGroupEdit />} />
      </Routes>
    </>
  );
}

export default App;
