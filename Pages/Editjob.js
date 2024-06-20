//Jobdetails එකේ තියෙන jobs මෙතනින් edit කරන්න පුළුවන්. මේක admin only.
import '../Style/Editjob.css'; // Importing styles for the component
import { Link, useNavigate } from 'react-router-dom'; // Importing necessary components from react-router-dom
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Typography, IconButton, Collapse, TextField } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

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
  // State to manage editing status
  const [editingField, setEditingField] = useState('');
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

  // Handle edit field
  const handleEdit = (field) => {
    setEditingField(field);
  };

  // Handle save field
  const handleSave = () => {
    setEditingField('');
    // Save the updated data
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditingField('');
  };

  // Handle delete field
  const handleDelete = (field) => {
    setJob({ ...job, [field]: '' });
  };

  return (
    <div>
      <div className="title">Job Details</div>
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
            {editingField === 'issue1' ? (
              <TextField
                name="issue1"
                value={job.issue1}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Issue1: {job.issue1}</Typography>
                <IconButton onClick={() => handleEdit('issue1')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('issue1')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'issue2' ? (
              <TextField
                name="issue2"
                value={job.issue2}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Issue2: {job.issue2}</Typography>
                <IconButton onClick={() => handleEdit('issue2')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('issue2')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'issue3' ? (
              <TextField
                name="issue3"
                value={job.issue3}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Issue3: {job.issue3}</Typography>
                <IconButton onClick={() => handleEdit('issue3')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('issue3')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
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
            {editingField === 'customerName' ? (
              <TextField
                name="customerName"
                value={job.customerName}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Name: {job.customerName}</Typography>
                <IconButton onClick={() => handleEdit('customerName')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('customerName')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'customerPhone' ? (
              <TextField
                name="customerPhone"
                value={job.customerPhone}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Phone: {job.customerPhone}</Typography>
                <IconButton onClick={() => handleEdit('customerPhone')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('customerPhone')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'customerAddress' ? (
              <TextField
                name="customerAddress"
                value={job.customerAddress}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Address: {job.customerAddress}</Typography>
                <IconButton onClick={() => handleEdit('customerAddress')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('customerAddress')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
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
            {editingField === 'employeeName' ? (
              <TextField
                name="employeeName"
                value={job.employeeName}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Name: {job.employeeName}</Typography>
                <IconButton onClick={() => handleEdit('employeeName')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('employeeName')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'employeePhone' ? (
              <TextField
                name="employeePhone"
                value={job.employeePhone}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Phone: {job.employeePhone}</Typography>
                <IconButton onClick={() => handleEdit('employeePhone')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('employeePhone')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'designation' ? (
              <TextField
                name="designation"
                value={job.designation}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Designation: {job.designation}</Typography>
                <IconButton onClick={() => handleEdit('designation')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('designation')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
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
            {editingField === 'avissawella' ? (
              <TextField
                name="avissawella"
                value={job.avissawella}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Avissawella: {job.avissawella}</Typography>
                <IconButton onClick={() => handleEdit('avissawella')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('avissawella')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'colombo' ? (
              <TextField
                name="colombo"
                value={job.colombo}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Colombo: {job.colombo}</Typography>
                <IconButton onClick={() => handleEdit('colombo')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('colombo')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'ratnapura' ? (
              <TextField
                name="ratnapura"
                value={job.ratnapura}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Ratnapura: {job.ratnapura}</Typography>
                <IconButton onClick={() => handleEdit('ratnapura')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('ratnapura')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
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
            {editingField === 'machine' ? (
              <TextField
                name="machine"
                value={job.machine}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Machine: {job.machine}</Typography>
                <IconButton onClick={() => handleEdit('machine')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('machine')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'remote' ? (
              <TextField
                name="remote"
                value={job.remote}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Remote: {job.remote}</Typography>
                <IconButton onClick={() => handleEdit('remote')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('remote')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
            {editingField === 'engine' ? (
              <TextField
                name="engine"
                value={job.engine}
                onChange={handleChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSave}><SaveIcon /></IconButton>
                      <IconButton onClick={handleCancel}><CancelIcon /></IconButton>
                    </InputAdornment>
                  )
                }}
              />
            ) : (
              <>
                <Typography variant="body2">Engine: {job.engine}</Typography>
                <IconButton onClick={() => handleEdit('engine')}><EditIcon /></IconButton>
                <IconButton onClick={() => handleDelete('engine')}><DeleteIcon /></IconButton>
              </>
            )}
            <br />
          </div>
        </Collapse>
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
