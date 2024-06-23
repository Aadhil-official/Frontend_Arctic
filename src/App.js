import { EmployeeList, UserEdit, EmployeeListAd, Contacts, Logins, Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass, UserView } from './Pages/index';
import { ItemLis, ItemListAd, ItemView, ItemEdit, AddItem } from './Pages/Item/index';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import ServiceAgreementOne from './Pages/ServiceAgreement/ServiceAgreementOne';
import ServiceAgreementTwo from './Pages/ServiceAgreement/ServiceAgreementTwo';
import ServiceAgreementFour from './Pages/ServiceAgreement/ServiceAgreementFour';
import ServiceAgreementFive from './Pages/ServiceAgreement/ServiceAgreementFive';
import ServiceAgreementSix from './Pages/ServiceAgreement/ServiceAgreementSix';
import SiteVisitOne from './Pages/SiteVisiteModule/SiteVisitOne';
import SiteVisitTwo from './Pages/SiteVisiteModule/SiteVisitTwo';
import SiteVisitThree from './Pages/SiteVisiteModule/SiteVisitThree';
import SiteVisitFour from './Pages/SiteVisiteModule/SiteVisitFour';
import SiteVisitFive from './Pages/SiteVisiteModule/SiteVisitFive';
import SiteVisitSix from './Pages/SiteVisiteModule/SiteVisitSix';
import { Toaster } from 'react-hot-toast';
import AddCustomer from './Pages/CustomerMaster/AddCustomer';
import SiteVisitDashboard from './Pages/SiteVisiteModule/SiteVisitDashboard';
import GatePass from './Pages/SiteVisiteModule/GatePass';
import SiteVisitDetails from './Pages/SiteVisiteModule/SiteVisitDetails';
import CompletedSiteVisits from './Pages/SiteVisiteModule/CompletedSiteVisits';
import FeedbackForm from './Pages/SiteVisiteModule/FeedBackForm';
import SiteVisitDashboardEmployee from './Pages/SiteVisiteModule/SiteVisitDashboardEmployee';
import ReviewedComplain from './Pages/ReviewedComplain';
import { AddUnit, UnitEdit, UnitLis, UnitListAd, UnitView } from './Pages/Unit/Index';
import { AddVehicle, VehicleEdit, VehicleLis, VehicleListAd, VehicleView } from './Pages/Vehicle/Index';
import { AddCustomer, CustomerEdit, CustomerLis, CustomerListAd, CustomerView } from './Pages/Customer/index';
import { AddUserGroup, UserGroupEdit, UserGroupLis, UserGroupListAd, UserGroupView } from './Pages/User Group/index';

function App() {
  return (
    <div className="App">
   <Toaster/>
     <BrowserRouter> 
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


     <Route path="/ServiceAgreementOne" element={<ServiceAgreementOne/>}></Route>
     <Route path="/ServiceAgreementTwo/:id" element={<ServiceAgreementTwo/>}></Route>
     <Route path ="/ServiceAgreementFour/:id" element={<ServiceAgreementFour/>}></Route>
     <Route path ="/ServiceAgreementFive" element={<ServiceAgreementFive/>}></Route>
     <Route path ="/ServiceAgreementSix" element={<ServiceAgreementSix/>}></Route>
     <Route path ="/SiteVisitOne" element={<SiteVisitOne/>}></Route>
     <Route path ="/SiteVisitTwo" element={<SiteVisitTwo/>}></Route>
     <Route path ="/SiteVisitThree/:id"element={ <SiteVisitThree/>}></Route>
     <Route path ="/SiteVisitFour"element={<SiteVisitFour/>}></Route>
     <Route path ="/SiteVisitFive"element={<SiteVisitFive/>}></Route>
     <Route path ="/SiteVisitSix"element={<SiteVisitSix/>}></Route>
     <Route path="/AddCustomer" element={<AddCustomer/>}></Route>
     <Route path ="/SiteVisitDashboard" element ={<SiteVisitDashboard/>}></Route>
     <Route path ="/GatePass" element={<GatePass/>}></Route>
     <Route path="/SiteVisitDetails/:id" element={<SiteVisitDetails/>}></Route>
     <Route path="/CompletedSiteVisits" elemant={<CompletedSiteVisits/>}></Route>
     <Route path="/FeedBackForm/:id" element={<FeedbackForm/>}></Route>
     <Route path="/SIteVisitDashboardEmployee" element={<SiteVisitDashboardEmployee/>}></Route>
    
     
     </Routes>
     </BrowserRouter> 

    </div>

  );

}

export default App;