import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const Tabs = ({ buttonData }) => {
  const { tempdataGroup } = useUser();
  const relevantPrivileges = tempdataGroup?.relevantPrivileges || [];

  const privilegeToButtonLabel = {
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

  const privilegeSet = new Set(relevantPrivileges);

  const filteredButtonData = buttonData.filter(button =>
    Object.keys(privilegeToButtonLabel).some(privilege =>
      privilegeSet.has(privilege) &&
      privilegeToButtonLabel[privilege].includes(button.label)
    )
  );


  console.log("Filtered Button Data in Tabs:", filteredButtonData);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      {filteredButtonData.map((button, index) => (
        <Grid item key={index} xl={9} lg={8} md={7} sm={6} xs={5}>
          <Button
            sx={{
              height: '40px',
              width: '100%',
              color: 'white',
              textDecoration: 'none',
              backgroundColor: '#6C94F8',
              '&:hover': {
                backgroundColor: '#547DD1', // Slightly darker shade for hover effect
              }
            }}
            component={Link}
            to={button.link}
          >
            {button.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tabs;
