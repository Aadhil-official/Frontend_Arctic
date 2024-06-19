import '../Style/NewJob.css'; // Importing styles for the component
import { Link, useNavigate } from 'react-router-dom'; // Importing necessary components from react-router-dom
import axios from 'axios';
import React, { useState } from 'react';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Collapse, Radio,
  RadioGroup,FormControlLabel,Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CancelIcon from '@mui/icons-material/Cancel';

const AnewjobWireframe24 = () => {
  const [filterOption, setFilterOption] = useState('item');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [job, setJob] = useState({
    jobId: '',
    itemIssue: '',
    customerDetails: '',
    employeeDetails: '',
    location: '',
    item: '',
    email: '',
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    employeeName: '',
    employeePhone: '',
    employeeDesignation: ''
  });
  const [counter, setCounter] = useState(1); // Initialize the counter at 1

  // Function to handle radio button change
  const handleRadioChange = (e) => {
    setJob({ ...job, invoiced: e.target.value }); 
  };
  
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showDate, setshowDate] = useState(false);
  const [showTeamMember, setShowTeamMember] = useState(false);
  const [showvehicle, setShowvehicle] = useState(false);
  const [showstatus, setShowstatus] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredJobs = Object.keys(job).filter(key => {
    if (!searchQuery) return true;
    const value = job[key];
    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleEditJob = (jobId) => {
    navigate(`/login/welcomeadmin/joblist_Ad/editJob/${jobId}`);
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/new-job", job)
      .then(response => {
        alert("Job created successfully!");
      })
      .catch(error => {
        console.error('Error creating job: ', error);
      });
  };

  return (
    <div>
      <div className="title">A New Job</div>
      <div className="dropdown">
        <FormControl variant="outlined" sx={{ minWidth: 225, marginLeft: '20%' }}>
          <InputLabel>Filter By</InputLabel>
          <Select
            value={filterOption}
            onChange={handleFilterChange}
            input={
              <OutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <FilterAltIcon />
                  </InputAdornment>
                }
                label="Filter By"
                sx={{ borderRadius: '50px', margin: '0' }}
              />
            }
          >
            {/* Generate MenuItems with sequential numbers */}
            {[...Array(counter)].map((_, index) => (
              <MenuItem key={index + 1} value={index + 1}>
                {`Item ${index + 1}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-section">
          <Button variant="outlined" onClick={() => setShowCustomerDetails(!showCustomerDetails)} fullWidth sx={{ width: '60%' }}>
            Customer Details
          </Button><br/><br/>
          <Collapse in={showCustomerDetails}>
            <div className="form-fields">
              <TextField
                name="customerName"
                label="Name"
                value={job.customerName}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              <TextField
                name="customerPhone"
                label="Phone"
                value={job.customerPhone}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              <TextField
                name="customerAddress"
                label="Address"
                value={job.customerAddress}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
            </div>
          </Collapse>
        </div>

        <div className="form-section">
          <Button variant="outlined" onClick={() => setshowDate(!showDate)} fullWidth sx={{ width: '60%' }}>
            Date
          </Button><br/><br/>
          <Collapse in={showDate}>
            <div className="form-fields">
              <TextField
                name="date"
                label="Date"
                value={job.employeeName}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              </div>
          </Collapse>
        </div>

        <div className="form-section">
          <Button variant="outlined" onClick={() => setShowTeamMember(!showTeamMember)} fullWidth sx={{ width: '60%' }}>
           Team Members
          </Button><br/><br/>
          <Collapse in={showTeamMember}>
            <div className="form-fields">
              <TextField
                name="name"
                label="Name"
                value={job.itemIssue}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              <TextField
                name="name"
                label="Name"
                value={job.itemIssue}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
             <TextField
                name="name"
                label="Name"
                value={job.itemIssue}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              <TextField
                name="name"
                label="Name"
                value={job.itemIssue}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              <TextField
                name="name"
                label="Name"
                value={job.itemIssue}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
            </div>
          </Collapse>
        </div>
        <div className="form-section">
          <Button variant="outlined" onClick={() => setShowvehicle(!showvehicle)} fullWidth sx={{ width: '60%' }}>
          Vehicle Number
          </Button><br/><br/>
          <Collapse in={showvehicle}>
            <div className="form-fields">
              <TextField
                name="Vehiclenumber"
                label="Vehicle Number"
                value={job.employeeName}
                onChange={handleChange}
                Width="50px"
                margin="normal"
              /><br/><br/>
              </div>
          </Collapse>
        </div>
        <div className="form-fields">
        <Button variant="outlined" onClick={() => setShowstatus(!showstatus)} fullWidth sx={{ width: '60%' }}>
          Status
          </Button><br/><br/>
          <Collapse in={showstatus}>
            <div className="form-fields">
             
         <RadioGroup>
         <form>
              <FormControlLabel value="invoiced" control={<Radio />} label="Invoiced" />
              <br/><br/>
                <FormControlLabel value="notInvoiced" control={<Radio />} label="To Be Invoiced" />
                </form>
                </RadioGroup>
                
                <br/><br/>
              </div>
          </Collapse>
        </div>
       
      </form>
      <div id="button" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom:'20%' ,float:'left'}}>
        <Link to="/e">
          <Button variant="contained" type="submit" sx={{ width: '100%' }} endIcon={<EditNoteIcon />}>Create</Button>
          </Link>
        </div>

        <div id="cancel-button" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' ,marginBottom:'20%',float:'right',marginRight:'160px'}}>
          <Link to="/jl">
            <Button variant="contained" sx={{ width: '100%' }} endIcon={<CancelIcon />}>Cancel</Button>
          </Link>
        </div>
      <div className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </div>
    </div>
  );
};

export default AnewjobWireframe24;
