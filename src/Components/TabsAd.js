import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const TabsAd = ({ buttonData }) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      {buttonData.map((button, index) => (
        <Grid item key={index} xl={9} lg={8} md={7} sm={6} xs={5}
          variant="contained"
          component={Link}
          to={button.link}
        >
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
          >
            {button.label}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default TabsAd;

