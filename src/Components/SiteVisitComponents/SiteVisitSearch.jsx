import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SiteVisitSearch(props) {
  const CustName = props.name || []; // Default to an empty array if props.name is undefined
  return (
    <Stack spacing={2} sx={{  width: 300 ,float:'right',borderRadius:'100px',backgroundColor:'rgba(60, 108, 230, 0.647)' }}>
      <Autocomplete
        freeSolo
        id="Search"
        disableClearable
        options={CustName.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder='Search'
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { borderRadius: '100px' },
            }}
          />
        )}
      />
    </Stack>
  );
}
