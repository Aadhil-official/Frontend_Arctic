import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function JobSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 1180 }}>
        <InputLabel id="demo-simple-select-helper-label">Allocated Jobs</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Allocated Jobs"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Allocated Jobs</em>
          </MenuItem>
          <MenuItem value={10}>Job_ID</MenuItem>
          <MenuItem value={20}>Job_ID</MenuItem>
          <MenuItem value={30}>Job_ID</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}