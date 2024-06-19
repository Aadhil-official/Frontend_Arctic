import React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { TextField, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

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

          <TextField
            label="Item name"
            type='text'
            value={item.name}
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            label="Indoor Modal"
            type="text"
            value={item.indoorMod}
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            label="Outdoor Modal"
            type="text"
            value={item.outdoorMod}
            InputProps={{
              readOnly: true
            }}
          />

          <TextField
            label="Manufacturer"
            type="email"
            value={item.manufacturer}
            InputProps={{
              readOnly: true
            }}
          />


          <TextField
            label="Capacity"
            type='text'
            value={item.capacity}
            InputProps={{
              readOnly: true
            }}
          />
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
