import React from 'react';
import { BsPersonCircle, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
import { FaCalendarAlt, FaCar } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';
import { FaBuilding, FaClock } from 'react-icons/fa6';
import { RiContractFill } from 'react-icons/ri';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import '../../Style/Component/Sidebar.css'


function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsPersonCircle className='icon_header' /> Admin
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>

                <Link to="/signup" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsPersonVcardFill className='icon' /> Create user
                    </li>
                </Link>

                <Link to="/base/dashboard" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsGrid1X2Fill className='icon' /> Summary
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/unitListAd" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsFillArchiveFill className='icon' /> Units
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/itemListAd" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsFillGrid3X3GapFill className='icon' /> Items
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/customerListAd" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsPeopleFill className='icon' /> Customers
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/employeelistad" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BsPersonVcardFill className='icon' /> Employees
                    </li>
                </Link>

                <Link to="/" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <BiDetail className='icon' /> Job Details
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/userGroupListAd" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <HiMiniUserGroup className='icon' /> User Groups
                    </li>
                </Link>

                <Link to="/login/welcomeadmin/vehicleListAd" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <FaCar className='icon' /> Vehicle
                    </li>
                </Link>

                <Link to="/ServiceAgreementSix" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <RiContractFill className='icon' /> Service Agreements
                    </li>
                </Link>

                <Link to="/SiteVisitDashboard" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <FaBuilding className='icon' /> Site Visits
                    </li>
                </Link>

                <Link to="/base/calendar" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <FaCalendarAlt className='icon' /> Calendar
                    </li>
                </Link>

                <Link to="/base/reminder" className='tonavigate'>
                    <li className='sidebar-list-item'>
                        <FaClock className='icon' /> Set Reminder
                    </li>
                </Link>
            </ul>
        </aside>
    );
}

export default Sidebar;
