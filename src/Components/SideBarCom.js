import React, { useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { useUser } from '../Context/UserContext';

function SidebarCom({ isOpen, toggleSidebar }) {

    const { tempdataGroup, buttonData, tempdata } = useUser();

    // console.log("Button Data:", buttonData);

    useEffect(() => {
        console.log("SidebarCom mounted or updated");
        console.log("Button Data:", buttonData);
    }, [buttonData]);

    const privilegeToButtonLabel = {
        createUser: ['/signup'],
        complain: ['/login/complaintread'],
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
    //     const iconKeys = Object.keys(Icons);
    //     // Use some logic to map label to an index or hash
    //     const index = label.length % iconKeys.length; // Just an example, you can use any logic to determine index
    //     const iconKey = iconKeys[index];
    //     const IconComponent = Icons[iconKey];
    //     return <IconComponent className='icon' />;
    // };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}><IoIosCloseCircle /></button>
            <div className="sidebar-content">
                <BsPersonCircle className='icon_header' /> {tempdata.username.toUpperCase()}
            </div>

            <ul className='sidebar-list'>
                {filteredButtonData.map((button, index) => (
                    <Link to={button.link || '/'} className='tonavigate'>
                        <li className='sidebar-list-item' key={index}>
                            {/* {getIconForItem(button.label)}  */}
                            {button.label}
                        </li>
                    </Link>
                ))}
            </ul>

        </div>
    );
}

export default SidebarCom;
