import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row">
     
      <Button variant="contained">Add a New Job</Button>
      <Button variant="contained">Allocate Job</Button> 
      
     
    </Stack>
  );
}
