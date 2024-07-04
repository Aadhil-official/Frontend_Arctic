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
                    <Link to="/">
                        <BsFillArchiveFill className='icon' /> Units
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsFillGrid3X3GapFill className='icon' /> Items
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsPeopleFill className='icon' /> Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsPersonVcardFill className='icon' /> Employees
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BiDetail className='icon' /> Job Details
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <HiMiniUserGroup className='icon' /> User Groups
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <FaCar className='icon' /> Vehicle
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <RiContractFill className='icon' /> Service Agreements
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <FaBuilding className='icon' /> Site Visits
                    </Link>
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
