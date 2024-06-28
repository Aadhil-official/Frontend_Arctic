// import {React ,useState,useEffect} from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import {Link ,useNavigate} from 'react-router-dom';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
// import SearchIcon from '@mui/icons-material/Search';
// import { ThemeProvider } from 'styled-components';
// import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography, createTheme, responsiveFontSizes } from '@mui/material';

// export default function SerAgFilter() {
//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterOption, setFilterOption] = useState('username');
//   const navigate = useNavigate();


//   const handleChange = (event) => {
//     setAge(event.target.value);
    
//   };

//   return (
   
//     <div>
//        <FormControl variant="outlined" sx={{
//                 minWidth: 225,
//                 '& .MuiSelect-select': {
//                   display: 'flex',
//                   marginLeft: '10px'
//                 },
//               }}>
//     <InputLabel>Filter By</InputLabel>
//                 <Select
//                   value={filterOption}
//                   onChange={handleFilterChange}
//                   input={
//                     <OutlinedInput
//                       startAdornment={
//                         <InputAdornment position="start">
//                           <FilterAltIcon />
//                         </InputAdornment>
//                       }
//                       label="Filter By"
//                       sx={{ borderRadius: '50px' }}
//                     />
//                   }
//                 >
//           <MenuItem value="customername">Customer</MenuItem>
//           <MenuItem value="agreementType">Agreement Type</MenuItem>
//           <MenuItem value="item">Item</MenuItem>
//           {/* <FilterAltIcon sx={{position: 'absolute',top: '50%',right: '16px',transform: 'translateY(-50%)',fontSize: '16px',cursor: 'pointer'}}/> */}
//         </Select>
//       </FormControl>
//     </div>
   
//   );
// }
