import './App.css';
import ServiceAgreementOne from './Pages/ServiceAgreement/ServiceAgreementOne';
import ServiceAgreementTwo from './Pages/ServiceAgreement/ServiceAgreementTwo';
import ServiceAgreementThree from './Pages/ServiceAgreement/ServiceAgreementThree';
import ServiceAgreementFour from './Pages/ServiceAgreement/ServiceAgreementFour';
import ServiceAgreementFive from './Pages/ServiceAgreement/ServiceAgreementFive';
import ServiceAgreementSix from './Pages/ServiceAgreement/ServiceAgreementSix';
import SiteVisitOne from './Pages/SiteVisiteModule/SiteVisitOne';
import SiteVisitTwo from './Pages/SiteVisiteModule/SiteVisitTwo';
import SiteVisitThree from './Pages/SiteVisiteModule/SiteVisitThree';
import SiteVisitFour from './Pages/SiteVisiteModule/SiteVisitFour';
import SiteVisitFive from './Pages/SiteVisiteModule/SiteVisitFive';
import SiteVisitSix from './Pages/SiteVisiteModule/SiteVisitSix';
import SiteVisitSeven from './Pages/SiteVisiteModule/SiteVisitSeven';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ServiceAgreementOne/>}></Route>
        <Route path="/ServiceAgreementTwo" element={<ServiceAgreementTwo/>}></Route>
        <Route path="/ServiceAgreementThree" element={<ServiceAgreementThree/>}></Route>
        <Route path="/ServiceAgreementFour" element={<ServiceAgreementFour/>}></Route>
        <Route path="/ServiceAgreementFive" element={<ServiceAgreementFive/>}></Route>
        <Route path="/ServiceAgreementSix" element={<ServiceAgreementSix/>}></Route>
        <Route path="/SiteVisitOne"element={<SiteVisitOne/>}></Route>
        <Route path="/SiteVisitTwo"element={<SiteVisitTwo/>}></Route>
        <Route path="/SiteVisitThree"element={<SiteVisitThree/>}></Route>
        <Route path="/SiteVisitFour"element={<SiteVisitFour/>}></Route>
        <Route path="/SiteVisitFive"element={<SiteVisitFive/>}></Route>
        <Route path="/SiteVisitSix"element={<SiteVisitSix/>}></Route>
        <Route path="/SiteVisitSeven"element={<SiteVisitSeven/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
