import React from 'react';
import Employee_Reg1 from './Pages/User master module/Employee_Reg1.js';
import Employee1 from './Pages/User master module/Employee1.js';
import User_Profile1 from './Pages/User master module/User_Profile1.js';
import User_profile2 from './Pages/User master module/User_profile2.js';
import Emplyee_List from './Pages/User master module/Emplyee_List.js';
import User_Profileview from './Pages/User master module/User_Profileview.js';
import Userg1 from './Pages/User groups module/Userg1.js';
import Userg2 from './Pages/User groups module/Userg2.js';
import Job1 from './Pages/User groups module/Job1.js';
import Unit_list1  from './Pages/Unit registration module/unit_list1.js'; 
import Unit_reg1 from './Pages/Unit registration module/Unit_reg1.js';
import Unitprofile from './Pages/Unit registration module/Unitprofile.js';
import Unitprofile2 from './Pages/Unit registration module/Unitprofile2.js';
import Unit_list_1 from './Pages/Unit registration module/Unit_list_1.js';
import Unitprofile_final from './Pages/Unit registration module/Unitprofile_final.js';
import Itemlist1 from './Pages/Item master module/Itemlist1.js';
import Item_Reg from './Pages/Item master module/Item_Reg.js';
import Item_Details_View from './Pages/Item master module/Item_Details_View.js';
import Item_Details_VE from './Pages/Item master module/Item_Details_VE.js';
import Item_Details_VE_A from './Pages/Item master module/Item_Details_VE_A.js';
import Item_List from './Pages/Item master module/Item_List.js';
import Vehicle_List_One from './Pages/vechicle master module/Vehicle_List_One.js';
import Vehicle_Registration from './Pages/vechicle master module/Vehicle_Registration.js';
import Vehicle_Profile from './Pages/vechicle master module/Vehicle_Profile.js';
import Vehicle_Profile_Save from './Pages/vechicle master module/Vehicle_Profile_Save.js';
import Vehicle_List_Em from './Pages/vechicle master module/Vehicle_List_Em.js';
import Vehicle_Profile_E from './Pages/vechicle master module/Vehicle_Profile_E.js';
import Customer_List_one from './Pages/Customer master module/Customer_List_one.js';
import Customer_reg from './Pages/Customer master module/Customer_reg.js';
import Customer_Profile_Ad from './Pages/Customer master module/Customer_Profile_Ad.js';
import Customer_Profile_Sv from './Pages/Customer master module/Customer_Profile_Sv.js';
import Customer_List_Em from './Pages/Customer master module/Customer_List_Em.js';
import Customer_Profile_Em from './Pages/Customer master module/Customer_Profile_Em.js';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Toaster />
     <Routes>

     
      <Route exact path="/" element ={<Employee1/>}></Route>
      <Route path="/Employee_Reg1" element={ <Employee_Reg1/>}></Route>
      <Route path='/User_Profile1' element={<User_Profile1/>}></Route>
      <Route path='/User_profile2' element={<User_profile2/>}></Route>
      <Route path='/Emplyee_List' element={<Emplyee_List/>}></Route>
      <Route path='/User_Profileview' element={<User_Profileview/>}></Route>
      <Route path='/Userg1' element={<Userg1/>}></Route>
      <Route path='/Userg2' element={<Userg2/>}></Route>
      <Route path='/Job1' element={<Job1/> }></Route>
      <Route path='/Unit_list1' element={ <Unit_list1/>}></Route>
      <Route path='/Unit_reg1' element={<Unit_reg1/>}></Route>
      <Route path='/Unitprofile' element={ <Unitprofile/>}></Route>
      <Route path='/Unitprofile2' element={<Unitprofile2/>}></Route>
      <Route path='/Unit_list_1' element={<Unit_list_1/>}></Route>
      <Route path='/Unitprofile_final' element={<Unitprofile_final/>}></Route>
      <Route path='/Itemlist1' element={<Itemlist1/>}></Route>
      <Route path='/Item_Reg' element={ <Item_Reg/>}></Route>
      <Route path='/Item_Details_View' element={ <Item_Details_View/>}></Route>
      <Route path='/Item_Details_VE' element={ <Item_Details_VE/>}></Route>
      <Route path='/Item_Details_VE_A' element={ <Item_Details_VE_A/>}></Route>
      <Route path='/Item_List' element={<Item_List/>}></Route>
      <Route path='/Vehicle_List_One' element={ <Vehicle_List_One/>}></Route>
      <Route path='/Vehicle_Registration' element={<Vehicle_Registration/>}></Route>
      <Route path='/Vehicle_Profile' element={<Vehicle_Profile/>}></Route>
      <Route path='/Vehicle_Profile_Save' element={<Vehicle_Profile_Save/>}></Route>
      <Route path='/Vehicle_List_Em' element={<Vehicle_List_Em/>}></Route>
      <Route path='/Vehicle_Profile_E' element={ <Vehicle_Profile_E/>}></Route>
      <Route path='/Customer_List_one' element={ <Customer_List_one/>}></Route>
      <Route path='/Customer_reg' element={<Customer_reg/>}></Route>
      <Route path='/Customer_Profile_Ad' element={ <Customer_Profile_Ad/>}></Route>
      <Route path='/Customer_Profile_Sv' element={<Customer_Profile_Sv/>}></Route>
      <Route path='/Customer_List_Em' element={<Customer_List_Em/>}></Route>
      <Route path='/Customer_Profile_Em' element={ <Customer_Profile_Em/>}></Route>
     

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
