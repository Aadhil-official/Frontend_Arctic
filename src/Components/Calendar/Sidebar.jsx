import React from 'react';
import { BsPersonCircle, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
import { FaCalendarAlt, FaCar } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { FaBuilding,FaClock } from 'react-icons/fa6';
import { RiContractFill } from 'react-icons/ri';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { Link } from 'react-router-dom';


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
                    <Link to="/base/dashboard">
                        <BsGrid1X2Fill className='icon' /> Summary
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsFillArchiveFill className='icon' /> Units
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsFillGrid3X3GapFill className='icon' /> Items
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsPeopleFill className='icon' /> Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BsPersonVcardFill className='icon' /> Employees
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <BiDetail className='icon' /> Job Details
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <HiMiniUserGroup className='icon' /> User Groups
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <FaCar className='icon' /> Vehicle
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <RiContractFill className='icon' /> Service Agreements
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="#">
                        <FaBuilding className='icon' /> Site Visits
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/base/calendar">
                        <FaCalendarAlt className='icon' /> Calendar
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/base/reminder">
                        <FaClock className='icon' /> Set Reminder
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
