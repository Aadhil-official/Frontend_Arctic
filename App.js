import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Printjob from './Pages/Printjob';
import JobDetails1 from './Pages/Joblist';
import Joballocation from './Pages/Joballocation';
import NewJob from './Pages/NewJob';
import JobDetails from './Pages/Jobdetails';
import Email from './Pages/Email';
import JobListnew from './Pages/JobListnew';
import Editjob from './Pages/Editjob';




function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>

    
          <Route path='/' element={<JobListnew/>}></Route>
          <Route path='/jl' element={<JobDetails1/>}></Route>
          <Route path='/ja' element={<Joballocation/>}></Route>
          <Route path='/nj' element={<NewJob/>}></Route>
          <Route path='/jd' element={<JobDetails/>}></Route>
          <Route path='/pj' element={<Printjob/>}></Route>
          <Route path='/e' element={<Email/>}></Route>
          <Route path='/ej' element={<Editjob/>}></Route>
            
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
