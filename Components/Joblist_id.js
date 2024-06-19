import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
    
      <Button 
        variant="contained" 
        sx={{ width: 550, backgroundColor: 'rgb(149, 150, 238)', '&:hover': { backgroundColor: 'rgb(39, 42, 246)' } }}
      >
        Contained
      </Button>
     
    </Stack>
  );
}
