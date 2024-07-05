import React from 'react';
import { BsPersonCircle, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
import { FaCalendarAlt, FaCar, FaUserEdit } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { FaBuilding,FaClock } from 'react-icons/fa6';
import { RiContractFill } from 'react-icons/ri';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";


function Sidebar({isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}><IoIosCloseCircle /></button>
        <div className="sidebar-content">
        <BsPersonCircle  className='icon_header'/> Admin
              </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/signup" className='tonavigate'>
                        <FaUserEdit className='icon' /> Create user
                    </Link>
                </li>

                <li className='sidebar-list-item'>
                    <Link to="/base/dashboard" className='tonavigate'>
                        <BsGrid1X2Fill className='icon' /> Summary
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                <Link to="/login/welcomeadmin/unitListAd" className='tonavigate'>
                    <BsFillArchiveFill className='icon' /> Units
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/login/welcomeadmin/itemListAd" className='tonavigate'>
                        <BsFillGrid3X3GapFill className='icon' /> Items
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                <   Link to="/login/welcomeadmin/customerListAd" className='tonavigate'>
                        <BsPeopleFill className='icon' /> Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                <Link to="/login/welcomeadmin/employeelistad" className='tonavigate'>
                        <BsPersonVcardFill className='icon' /> Employees
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/" className='tonavigate'>
                        <BiDetail className='icon' /> Job Details
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/login/welcomeadmin/userGroupListAd" className='tonavigate'>
                        <HiMiniUserGroup className='icon' /> User Groups
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/login/welcomeadmin/vehicleListAd" className='tonavigate'>
                        <FaCar className='icon' /> Vehicle
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/ServiceAgreementSix" className='tonavigate'>
                       <RiContractFill className='icon' /> Service Agreements
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/SiteVisitDashboard" className='tonavigate'>
                        <FaBuilding className='icon' /> Site Visits
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/base/calendar" className='tonavigate'>
                        <FaCalendarAlt className='icon' /> Calendar
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/base/reminder" className='tonavigate'>
                        <FaClock className='icon' /> Set Reminder
                    </Link>
                </li>
            </ul>

    </div>
    );
}

export default Sidebar;
