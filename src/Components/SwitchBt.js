import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react'


export default function SwitchBt() {
  return (
    <FormGroup style={{
      float:"right"
    }}>
     
      <FormControlLabel  control={<Switch />} label="Edit"/>
    
    </FormGroup>
  );
}