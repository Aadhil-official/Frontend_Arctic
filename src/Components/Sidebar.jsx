import React from 'react'
import 
{BsPersonCircle, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsPersonVcardFill}
 from 'react-icons/bs'
 import { FaCalendarAlt, FaCar} from "react-icons/fa";
 import { BiDetail } from "react-icons/bi";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsPersonCircle  className='icon_header'/> Admin
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillArchiveFill className='icon'/> Units
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsFillGrid3X3GapFill className='icon'/> Items
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BsPersonVcardFill className='icon'/> Employees
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="#">
                    <BiDetail className='icon'/> Job Details
                </a>
            </li>


            <li className='sidebar-list-item'>
                <a href="#">
                    <FaCar className='icon'/> Vehicle 
                </a>
            </li>
            
            <li className='sidebar-list-item'>
                <a href="#">
                    <FaCalendarAlt className='icon'/> Calender
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar