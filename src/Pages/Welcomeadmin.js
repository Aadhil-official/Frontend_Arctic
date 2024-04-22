import React from 'react'
import '../Style/Welcome.css';
import Tabs from '../Components/Tabs';
import ProfilesAdmin from '../Components/ProfilesAdmin';

function Welcomeadmin() {

    const buttonData = [
        { label: 'Employee Details' },
        { label: 'Item Details' },
        { label: 'Unit Details' },
        { label: 'Vehicle Details' },
        { label: 'Job Details' },
        { label: 'Service Agreement' },
        { label: 'Calendar'}, 
        { label: 'Schedule a Site Visit' },
        { label: 'Job Allocation' },
      ];

  return (
    <>  
      <ProfilesAdmin />
      <div className="header-margin"></div>
      <Tabs buttonData={buttonData} />
      <div className="footer-margin"></div>

      <div className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Welcomeadmin