import React, { useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { useUser } from '../Context/UserContext';
import { Box, createTheme } from '@mui/system';
import { responsiveFontSizes, Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { success } from '../util/Toastify';
import '../Style/Component/Sidebar.css'


// import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsPersonVcardFill } from 'react-icons/bs';
// import { FaCalendarAlt, FaCar, FaUserEdit } from 'react-icons/fa';
// import { BiDetail } from 'react-icons/bi';
// import { FaBuilding } from 'react-icons/fa6';
// import { RiContractFill } from 'react-icons/ri';
// import { HiMiniUserGroup } from 'react-icons/hi2';

function SidebarCom({ isOpen, toggleSidebar }) {

    const { tempdataGroup, buttonData, tempdata } = useUser();

    const navigate = useNavigate();
    // console.log("Button Data:", buttonData);

    useEffect(() => {
        console.log("SidebarCom mounted or updated");
        console.log("Button Data:", buttonData);
    }, [buttonData]);

    const handleChange = async () => {
        // console.log("Switch toggled");
        // setChecked(event.target.checked);
        // if (!event.target.checked) {
        // setTimeout(async () => {
        try {
            await axios.post('http://localhost:8080/api/auth/signout', { checked: false });
            success("Signed out!");
            navigate('/');
        } catch (error) {
            console.error('Sign out error:', error);
        }
        // }, 500); // 500ms delay
        // }
    };

    const privilegeToButtonLabel = {
        complain: ['Complaints'],
        createUser: ['Create user'],
        accessEmployee: ['Employee Details'],
        accessItem: ['Item Details'],
        accessUnit: ['Unit Details'],
        accessVehicle: ['Vehicle Details'],
        accessCustomer: ['Customer Details'],
        accessUserGroup: ['User Group Details'],
        accessJob: ['Job Details'],
        accessServiceAgreement: ['Service Agreement Details'],
        accessCalendar: ['Calendar', 'Set Reminder'],
        accessSiteVisit: ['Site Visit Details'],
        // accessJobAllocation: 'Job Allocation',
    };

    const relevantPrivileges = tempdataGroup?.relevantPrivileges || [];
    const privilegeSet = new Set(relevantPrivileges);

    const filteredButtonData = buttonData ? buttonData.filter(button =>
        Object.keys(privilegeToButtonLabel).some(privilege =>
            privilegeSet.has(privilege) &&
            privilegeToButtonLabel[privilege].includes(button.label)
        )
    ) : [];

    // const getIconForItem = (label) => {
    //     const iconMap = {
    //         'createUser': FaUserEdit,
    //         'complain': FaCalendarAlt,
    //         'accessEmployee': BsPersonVcardFill,
    //         'accessItem': BsFillGrid3X3GapFill,
    //         'accessUnit': BsFillArchiveFill,
    //         'accessVehicle': FaCar,
    //         'accessCustomer': BsPeopleFill,
    //         'accessUserGroup': HiMiniUserGroup,
    //         'accessJob': BiDetail,
    //         'accessServiceAgreement': RiContractFill,
    //         'accessCalendar': FaCalendarAlt,
    //         'accessSiteVisit': FaBuilding,
    //     };

    //     for (let [key] of Object.entries(privilegeToButtonLabel)) {
    //         if (privilegeToButtonLabel[key].includes(label)) {
    //             const IconComponent = iconMap[key];
    //             return <IconComponent className='icon' />;
    //         }
    //     }
    //     return null;
    // };

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}><IoIosCloseCircle /></button>
            <div className="sidebar-content">
                <BsPersonCircle className='icon_header' /> {tempdata.username.toUpperCase()}
            </div>

            <ThemeProvider theme={theme}>
                <Typography variant='body2'>
                    <ul className='sidebar-list'>
                        {filteredButtonData.map((button, index) => (
                            <Box className="sidebartext">
                                <Link to={button.link || '/'} className='tonavigate'>
                                    <li className='sidebar-list-item' key={index}>
                                        {/* {getIconForItem(button.label)}  */}
                                        {button.label}
                                    </li>
                                </Link>
                            </Box>
                        ))}
                        <Box className="sidebartext">
                            <li className='sidebar-list-item' style={{ color: '#800000', fontWeight: 'bolder' }} onClick={handleChange}>
                                Sign out
                            </li>
                        </Box>
                    </ul>
                </Typography>
            </ThemeProvider>
        </div>
    );
}

export default SidebarCom;
