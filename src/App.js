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

function App() {
  return (
    <div className="App">
   <Toaster/>
     <BrowserRouter> 
     <Routes>
     <Route exact path="/" element={<ServiceAgreementOne/>}></Route>
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