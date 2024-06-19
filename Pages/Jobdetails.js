//Joblist එකේ තියෙන id s click කළාම මේකට navigate වෙනවා. මෙතනින් එක එක id එකට අදාළව job එකේ විස්තර බලාගන්න පුළුවන්.

import '../Style/Jobdetails.css'; // Importing styles for the component
import { Link, useNavigate } from 'react-router-dom'; // Importing necessary components from react-router-dom
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button,Radio,FormControlLabel, FormControl, InputAdornment, InputLabel,RadioGroup, MenuItem, OutlinedInput, Select, Typography, IconButton, Collapse } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';

const JobDetails = () => {
  // State to store the job data
  const [jobs, setJobs] = useState([]);
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to store the selected filter option
  const [filterOption, setFilterOption] = useState('item');
  // State to manage visibility of collapsible sections
  const [showItemIssue, setShowItemIssue] = useState(false);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [showLocationDetails, setShowLocationDetails] = useState(false);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [showstatus, setShowstatus] = useState(false);
  // Hook for navigation
  const navigate = useNavigate();
  
  // Fetch job data on component mount
  useEffect(() => {
    axios.get("http://localhost:8080/api/jobs")
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error('Error fetching job data: ', error);
      });
  }, []);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle filter option change
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };
  
  // Filter the job data based on the search query and selected filter option
  const filteredJobs = jobs.filter(job => {
    if (!searchQuery) return true;
    const value = job[filterOption];
    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  // Handle edit job button click
  const handleEditJob = (jobId) => {
    navigate(`/login/welcomeadmin/joblist_Ad/editJob/${jobId}`);
  };

  // Form state for job details
  const [job, setJob] = useState({
    itemIssue: '',
    issue1: '',
    issue2: '',
    issue3: '',
    customerDetails: '',
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    employeeName: '',
    employeePhone: '',
    designation: '',
    location: '',
    avissawella: '',
    colombo: '',
    ratnapura: '',
    item: '',
    machine: '',
    remote: '',
    engine: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', job);
  };

  return (
    <div>
      <div className="title">Job Details</div>

      <div id="Button" style={{ textAlign: 'center', marginRight: '60px', float:'right', }}>
        <Link to="/ej">
          <Button variant="contained" endIcon={<EditIcon />}>Edit Details</Button>
        </Link>
      </div>
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
            {/* Filter options */}
            <MenuItem value="item">Sell</MenuItem>
            <MenuItem value="location">Store</MenuItem>
            <MenuItem value="email">Pay</MenuItem>
            <MenuItem value="itemIssue">Repair</MenuItem>
            <MenuItem value="customerDetails">Buy</MenuItem>
            <MenuItem value="customerDetails"></MenuItem>
            <MenuItem value="customerDetails"></MenuItem>
            <MenuItem value="customerDetails"></MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Render filtered jobs */}
      <div className="job-list">
        {filteredJobs.map(job => (
          <div className="job-item" key={job.jobId}>
            <Typography variant="h6">{job.itemIssue}</Typography>
            <Typography variant="body2">Location: {job.location}</Typography>
            <Typography variant="body2">Email: {job.email}</Typography>
            <Typography variant="body2">Customer: {job.customerDetails}</Typography>
            <Typography variant="body2">Employee: {job.employeeDetails}</Typography>
            <Button variant="contained" onClick={() => handleEditJob(job.jobId)}>Edit Job</Button>
          </div>
        ))}
      </div>

      {/* Form for displaying and editing job details */}
      <form onSubmit={handleSubmit} className="job-form">
        {/* Item Issue Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          <Button
            variant="outlined"
            style={{ width: '80%', margin: '10px 0' }}
            onClick={() => setShowItemIssue(!showItemIssue)}
          >
            Item Issue
          </Button>
          <IconButton
            onClick={() => setShowItemIssue(!showItemIssue)}
            color="primary"
          >
            {showItemIssue ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={showItemIssue}>
          <div style={{ marginLeft: '20px' }}>
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Issue1
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Issue2
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Issue3
            </Button><br />
          </div>
        </Collapse>

        {/* Customer Details Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          <Button
            variant="outlined"
            style={{ width: '80%', margin: '10px 0' }}
            onClick={() => setShowCustomerDetails(!showCustomerDetails)}
          >
            Customer Details
          </Button>
          <IconButton
            onClick={() => setShowCustomerDetails(!showCustomerDetails)}
            color="primary"
          >
            {showCustomerDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={showCustomerDetails}>
          <div style={{ marginLeft: '20px' }}>
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Name
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Phone
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Address
            </Button><br />
          </div>
        </Collapse>

        {/* Employee Details Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          <Button
            variant="outlined"
            style={{ width: '80%', margin: '10px 0' }}
            onClick={() => setShowEmployeeDetails(!showEmployeeDetails)}
          >
            Employee Details
          </Button>
          <IconButton
            onClick={() => setShowEmployeeDetails(!showEmployeeDetails)}
            color="primary"
          >
            {showEmployeeDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={showEmployeeDetails}>
          <div style={{ marginLeft: '20px' }}>
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
             
            >
              Name
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Phone
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
             
            >
              Designation
            </Button><br />
          </div>
        </Collapse>

        {/* Location Details Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          <Button
            variant="outlined"
            style={{ width: '80%', margin: '10px 0' }}
            onClick={() => setShowLocationDetails(!showLocationDetails)}
          >
            Location
          </Button>
          <IconButton
            onClick={() => setShowLocationDetails(!showLocationDetails)}
            color="primary"
          >
            {showLocationDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={showLocationDetails}>
          <div style={{ marginLeft: '20px' }}>
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Avissawella
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Colombo
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Ratnapura
            </Button><br />
          </div>
        </Collapse>

        {/* Item Details Section */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20%' }}>
          <Button
            variant="outlined"
            style={{ width: '80%', margin: '10px 0' }}
            onClick={() => setShowItemDetails(!showItemDetails)}
          >
            Item
          </Button>
          <IconButton
            onClick={() => setShowItemDetails(!showItemDetails)}
            color="primary"
          >
            {showItemDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <Collapse in={showItemDetails}>
          <div style={{ marginLeft: '20px' }}>
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Machine
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
             
            >
              Remote
            </Button><br />
            <Button
              variant="outlined"
              style={{ width: '50%', margin: '10px 0' }}
              
            >
              Engine
            </Button><br />
          </div>
        </Collapse>
        <br />
        <div className="form-fields">
        <Button variant="outlined" onClick={() => setShowstatus(!showstatus)} fullWidth sx={{ width: '10%' }}>
          Status
          </Button><br/><br/>
          <Collapse in={showstatus}>
            <div className="form-fields">
             
         <RadioGroup>
         <form >
              <FormControlLabel value="invoiced" control={<Radio />} label="Completed" />
              <br/><br/>
                <FormControlLabel value="notInvoiced" control={<Radio />} label="On Going" />
                <br/><br/>
                <FormControlLabel value="todo" control={<Radio />} label="To Do" />
                </form>
                </RadioGroup>
                
                <br/><br/>
              </div>
          </Collapse>
        </div>
      </form>

  

      {/* Footer */}
      <footer className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </footer>
    </div>
  );
};

export default JobDetails;
