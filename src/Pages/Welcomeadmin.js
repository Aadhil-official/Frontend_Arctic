import React from 'react'
import '../Style/Welcome.css';
import Profiles from '../Components/Profiles';
import Tabs from '../Components/Tabs';

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
      <Profiles />
      <div className="header-margin"></div>
      <Tabs buttonData={buttonData} />
      <div className="footer-margin"></div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Welcomeadmin