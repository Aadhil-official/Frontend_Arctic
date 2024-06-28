import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import InputAdornment from '@mui/material/InputAdornment';

export default function SiteVisitFilter() {
  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
    
  };

  return (
    <>
    <div >
      <FormControl sx={{ margin: 1, minWidth: 320 , float:'left',borderRadius:'100px',backgroundColor: 'rgba(60, 108, 230, 0.647)' }}>
        <InputLabel id="demo-simple-select-filled-label" sx={{borderRadius:'100px'}}>Show only</InputLabel>
        <Select
          labelId = "demo-simple-select-filled-label"
          id = "demo-simple-select-filled"
          value={age}
          onChange={handleChange}
          sx={{borderRadius:'100px'}}
           
          
        >
          <MenuItem value="" >
            {/* <em >None</em> */}
          </MenuItem>
          <MenuItem value={10}>Vehicle Number</MenuItem>
          <MenuItem value={20}>Location</MenuItem>
          
          {/* <FilterAltIcon sx={{position: 'absolute',top: '50%',right: '16px',transform: 'translateY(-50%)',fontSize: '16px',cursor: 'pointer'}}/> */}
        </Select>
      </FormControl>
    </div>
    </>
  );
}
