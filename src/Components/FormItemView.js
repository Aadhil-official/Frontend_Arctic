import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

function FormItemView({ item }) {

  const navigate = useNavigate();


  const theme = responsiveFontSizes(createTheme());
  return (
    <>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '80%' },
          textAlign: 'center',
          mt: 3
        }}
      >

        <ThemeProvider theme={theme}>
          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            Item: {item.name}
          </Typography>

          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            Indoor Modal: {item.indoorMod}
          </Typography>

          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            Outdoor Modal: {item.outdoorMod}
          </Typography>

          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            Manufacturer: {item.manufacturer}
          </Typography>

          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            Capacity: {item.capacity}
          </Typography>

          <br /><br />
        </ThemeProvider>
        <Button variant="contained" onClick={() => navigate('/login/welcome/itemList')}>
          Back to List
        </Button><br /><br />
      </Box>
    </>
  );
}

export default FormItemView;
