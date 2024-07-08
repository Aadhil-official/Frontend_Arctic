// import {
//   EmployeeList,
//   UserEdit,
//   EmployeeListAd,
//   Contacts,
//   Logins,
//   Welcome,
//   ForPassword,
//   Homes,
//   Usercomplaint,
//   Welcomeadmin,
//   Signup,
//   Admcomred,
//   ResetPass,
//   UserView,
// } from "./Pages/index";
// import {
//   ItemLis,
//   ItemListAd,
//   ItemView,
//   ItemEdit,
//   AddItem,
// } from "./Pages/Item/index";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceAgreementOne from "./Pages/ServiceAgreement/ServiceAgreementOne";
import ServiceAgreementTwo from "./Pages/ServiceAgreement/ServiceAgreementTwo";
import ServiceAgreementFour from "./Pages/ServiceAgreement/ServiceAgreementFour";
import ServiceAgreementFive from "./Pages/ServiceAgreement/ServiceAgreementFive";
import ServiceAgreementSix from "./Pages/ServiceAgreement/ServiceAgreementSix";
import SiteVisitOne from "./Pages/SiteVisiteModule/SiteVisitOne";
import SiteVisitTwo from "./Pages/SiteVisiteModule/SiteVisitTwo";
import SiteVisitThree from "./Pages/SiteVisiteModule/SiteVisitThree";
import SiteVisitFourEmployee from "./Pages/SiteVisiteModule/SiteVisitFourEmployee";
import SiteVisitFive from "./Pages/SiteVisiteModule/SiteVisitFive";
import SiteVisitSix from "./Pages/SiteVisiteModule/SiteVisitSix";
import { Toaster } from "react-hot-toast";
import SiteVisitDashboard from "./Pages/SiteVisiteModule/SiteVisitDashboard";
import GatePass from "./Pages/SiteVisiteModule/GatePass";
import SiteVisitDetails from "./Pages/SiteVisiteModule/SiteVisitDetails";
import FeedbackForm from "./Pages/SiteVisiteModule/FeedBackForm";
// import ReviewedComplain from "./Pages/ReviewedComplain";
// import {
//   AddUnit,
//   UnitEdit,
//   UnitLis,
//   UnitListAd,
//   UnitView,
// } from "./Pages/Unit/Index";
// import {
//   AddVehicle,
//   VehicleEdit,
//   VehicleLis,
//   VehicleListAd,
//   VehicleView,
// } from "./Pages/Vehicle/Index";
// import {
//   AddCustomer,
//   CustomerEdit,
//   CustomerLis,
//   CustomerListAd,
//   CustomerView,
// } from "./Pages/Customer/index";
// import {
//   AddUserGroup,
//   UserGroupEdit,
//   UserGroupLis,
//   UserGroupListAd,
//   UserGroupView,
// } from "./Pages/User Group/index";
import GatePassDetails from "./Pages/SiteVisiteModule/GatePassDetails";
import GatePassDetailsEmployee from "./Pages/SiteVisiteModule/GatePassDetailsEmployee";
import GatePassList from "./Pages/SiteVisiteModule/GatePassList";
// import { EmployeeList, UserEdit, EmployeeListAd, Contacts, Logins, Welcome, ForPassword, Homes, Usercomplaint, Welcomeadmin, Signup, Admcomred, ResetPass, UserView } from './Pages/index';
// import { ItemLis, ItemListAd, ItemView, ItemEdit, AddItem } from './Pages/Item/index';
// import './App.css';
// import {BrowserRouter, Routes,Route} from 'react-router-dom';
// import ServiceAgreementOne from './Pages/ServiceAgreement/ServiceAgreementOne';
// import ServiceAgreementTwo from './Pages/ServiceAgreement/ServiceAgreementTwo';
// import ServiceAgreementFour from './Pages/ServiceAgreement/ServiceAgreementFour';
// import ServiceAgreementFive from './Pages/ServiceAgreement/ServiceAgreementFive';
// import ServiceAgreementSix from './Pages/ServiceAgreement/ServiceAgreementSix';
// import SiteVisitOne from './Pages/SiteVisiteModule/SiteVisitOne';
// import SiteVisitTwo from './Pages/SiteVisiteModule/SiteVisitTwo';
// import SiteVisitThree from './Pages/SiteVisiteModule/SiteVisitThree';
// import SiteVisitFour from './Pages/SiteVisiteModule/SiteVisitFour';
// import SiteVisitFive from './Pages/SiteVisiteModule/SiteVisitFive';
// import SiteVisitSix from './Pages/SiteVisiteModule/SiteVisitSix';
// import { Toaster } from 'react-hot-toast';
// import SiteVisitDashboard from './Pages/SiteVisiteModule/SiteVisitDashboard';
// import GatePass from './Pages/SiteVisiteModule/GatePass';
// import SiteVisitDetails from './Pages/SiteVisiteModule/SiteVisitDetails';
// import CompletedSiteVisits from './Pages/SiteVisiteModule/CompletedSiteVisits';
// import FeedbackForm from './Pages/SiteVisiteModule/FeedBackForm';
// import SiteVisitDashboardEmployee from './Pages/SiteVisiteModule/SiteVisitDashboardEmployee';
// import ReviewedComplain from './Pages/ReviewedComplain';
// import { AddUnit, UnitEdit, UnitLis, UnitListAd, UnitView } from './Pages/Unit/Index';
// import { AddVehicle, VehicleEdit, VehicleLis, VehicleListAd, VehicleView } from './Pages/Vehicle/Index';
// import { AddCustomer, CustomerEdit, CustomerLis, CustomerListAd, CustomerView } from './Pages/Customer/index';
// import { AddUserGroup, UserGroupEdit, UserGroupLis, UserGroupListAd, UserGroupView } from './Pages/User Group/index';


function App() {
  return (

      <Toaster />
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* <Hasaras' Part> */}
          {/* SERVICE AGREEMENT */}
          {/* for ADMIN */}
          <Route path="/ServiceAgreementSix" element={<ServiceAgreementSix />}></Route>
          <Route path="/ServiceAgreementTwo/:id" element={<ServiceAgreementTwo />}></Route>
          {/* Add new ServiceAgreement */}
          <Route path="/ServiceAgreementOne" element={<ServiceAgreementOne />}></Route>
          {/* for EMPLOYEE */}
          <Route
            path="/ServiceAgreementFive"
            element={<ServiceAgreementFive />}
          ></Route>
          <Route
            path="/ServiceAgreementFour/:id"
            element={<ServiceAgreementFour />}
          ></Route>

          {/* SITE VISIT */}
          {/* ADMIN */}
          <Route path="/SiteVisitDashboard" element={<SiteVisitDashboard />}></Route>
          {/* SCHEDULE SITE VISIT */}
          <Route path="/SiteVisitOne" element={<SiteVisitOne />}></Route>
          {/* ADD GATE PASS EMPLOYEES */}
          <Route path="/GatePass/:id" element={<GatePass />}></Route>
          {/* PRINT MSG */}
          <Route path="/SiteVisitFive" element={<SiteVisitFive />}></Route>
          {/* UPDATE SITE VISIT */}
          <Route path="/SiteVisitSix" element={<SiteVisitSix />}></Route>
          <Route path="/SiteVisitDetails/:id" element={<SiteVisitDetails />}></Route>
          {/* PRINT GATE PASS */}
          <Route path="/GatePassDetails/:id" element={<GatePassDetails />}></Route>
          {/* EMPLOYEE */}
          {/* SCHEDULED SITE VISITS START/END/FEEDBACK FORM */}
          <Route path="/SiteVisitFourEmployee" element={<SiteVisitFourEmployee />}></Route>
          {/* DETAILS */}
          <Route path="/SiteVisitThree/:id" element={<SiteVisitThree />}></Route>
          <Route path="/GatePassDetailsEmployee/:id" element={<GatePassDetailsEmployee />}></Route>
          <Route path="/FeedBackForm/:id" element={<FeedbackForm />}></Route>

          <Route path="/SiteVisitTwo" element={<SiteVisitTwo />}></Route>
          <Route path="/GatePassList" element={<GatePassList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
