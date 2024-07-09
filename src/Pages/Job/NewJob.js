import '../../Style/Job/NewJob.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Alert,
  Grid
} from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import CancelIcon from '@mui/icons-material/Cancel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';
import { FooterIn, NormalHeaderBar } from '../../Components';


const AnewjobWireframe24 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [filterOption, setFilterOption] = useState('item');
  const [searchQuery, setSearchQuery] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  // State for job details
  const [job, setJob] = useState({

    customerName: '',
    customerPhone: '',
    customerAddress: '',
    vehicleNumber: '',
    invoiced: '',
    dateAndTime: '',
    toBeInvoiced: ''
  });

  // State for team members
  const [teamMembers, setTeamMembers] = useState([
    { employeeName: '', employeePhone: '', employeeDesignation: '', employeeEmail: '' },
    { employeeName: '', employeePhone: '', employeeDesignation: '', employeeEmail: '' },
    { employeeName: '', employeePhone: '', employeeDesignation: '', employeeEmail: '' },
    { employeeName: '', employeePhone: '', employeeDesignation: '', employeeEmail: '' },
    { employeeName: '', employeePhone: '', employeeDesignation: '', employeeEmail: '' }
  ]);
  const [employeeEmails, setEmployeeEmails] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const emails = teamMembers.map(member => member.employeeEmail);
    setEmployeeEmails(emails);
    console.log('Counter:', counter);
    console.log('Team Members:', teamMembers);
    console.log('Employee Emails:', emails);
  }, [counter, teamMembers]);
  // Function to add a new team member
  const handleRadioChange = (e) => {
    setJob({ ...job, invoiced: e.target.value });
  };

  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showTeamMember, setShowTeamMember] = useState(false);
  const [showVehicle, setShowVehicle] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //Function to filter the jobs based on the selected filter option
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  //Function to filter the jobs based on the search query
  const filteredJobs = Object.keys(job).filter(key => {
    if (!searchQuery) return true;
    const value = job[key];
    return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleEditJob = (jobId) => {
    navigate(`/login/welcomeadmin/joblist_Ad/editJob/${jobId}`);
  };

  //Function to handle changes in the form fields
  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  //Function to handle changes in the team member fields
  const handleTeamMemberChange = (index, e) => {
    const newTeamMembers = [...teamMembers];
    newTeamMembers[index][e.target.name] = e.target.value;
    setTeamMembers(newTeamMembers);
  };

  //Function to validate the form fields
  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const vehicleNumberRegex = /^[A-Za-z0-9]{1,}$/;

    if (!job.customerName || !job.customerPhone || !job.customerAddress || !selectedDate || !teamMembers[0].employeeName || !teamMembers[0].employeePhone || !teamMembers[0].employeeDesignation || !teamMembers[0].employeeEmail || !job.vehicleNumber || !job.invoiced) {
      setWarning('Please fill all required fields.');
      return false;
    }
    if (!phoneRegex.test(job.customerPhone)) {
      setWarning('Please enter a valid phone number.');
      return false;
    }
    if (!emailRegex.test(teamMembers[0].employeeEmail)) {
      setWarning('Please enter a valid email address.');
      return false;
    }
    if (!vehicleNumberRegex.test(job.vehicleNumber)) {
      setWarning('Please enter a valid vehicle number.');
      return false;
    }
    setWarning('');
    return true;
  };

  const handledatetime = () => {
    setJob(prevJob => ({
      ...prevJob,
      dateAndTime: selectedDate
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      job.dateAndTime = selectedDate;

      // Debugging: Check if teamMembers is defined and contains data
      if (teamMembers && teamMembers.length > 0) {
        console.log("Team members to store:", teamMembers);
        localStorage.setItem('teamMembers', JSON.stringify(teamMembers)); // Store teamMembers in local storage
      } else {
        console.error("No team members to store.");
      }

      try {
        const response = await axios.post("http://localhost:8080/api/auth/addNewJob", { ...job, teamMembers });
        alert("Job created successfully!");
        navigate(`/sep?teamMembers=${employeeEmails}&Members=${teamMembers}`);
      } catch (error) {
        console.error('Error creating job: ', error);
      }
    }
  };

  return (
    <div>

      <NormalHeaderBar />

      <Grid container spacing={2}>
        <Grid item position='fixed'>
          <Link to={"/jobListForAdmin"}>
            <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" style={{ width: '40px', height: '40px', opacity: '0.6', margin: '5px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <div className="title">A New Job</div>


      {/* form */}
      <br />
      <form onSubmit={handleSubmit} className="job-form">
        {warning && <Alert severity="warning">{warning}</Alert>}
        <div className="abc">
          <div className="form-section">
            <Button variant="outlined" onClick={() => setShowCustomerDetails(!showCustomerDetails)} fullWidth sx={{ width: '60%' }}>
              Customer Details
            </Button><br /><br />
            <Collapse in={showCustomerDetails}>
              <div className="form-fields">
                <TextField
                  className="textField"
                  name="customerName"
                  label="Name"
                  value={job.customerName}
                  onChange={handleChange}
                  width="50px"
                  margin="normal"
                  required
                /><br /><br />
                <TextField
                  className="textField"
                  name="customerPhone"
                  label="Phone"
                  value={job.customerPhone}
                  onChange={handleChange}
                  width="50px"
                  margin="normal"
                  required
                /><br /><br />
                <TextField
                  className="textField"
                  name="customerAddress"
                  label="Address"
                  value={job.customerAddress}
                  onChange={handleChange}
                  width="50px"
                  margin="normal"
                  required
                /><br /><br />
              </div>
            </Collapse>
          </div>

          <div className="form-section">
            <Button variant="outlined" onClick={() => setShowDate(!showDate)} fullWidth sx={{ width: '60%' }}>

              Date & Time Created
            </Button><br /><br />
            <Collapse in={showDate}>
              <div className="form-fields">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                      <DateTimePicker

                        label="Select Date and Time"
                        value={selectedDate}
                        onChange={(newValue) => setSelectedDate(newValue)}
                        fullWidth sx={{ width: '40%' }}
                        align="center"
                        viewRenderers={{
                          hours: renderTimeViewClock,
                          minutes: renderTimeViewClock,
                          seconds: renderTimeViewClock,
                        }}
                        required
                      />
                    </Box>
                  </DemoContainer>
                </LocalizationProvider>
                <br /><br />
              </div>
            </Collapse>
          </div>

          <div className="form-section">
            <Button variant="outlined" onClick={() => setShowTeamMember(!showTeamMember)} fullWidth sx={{ width: '60%' }}>
              Team Members
            </Button><br /><br />
            <Collapse in={showTeamMember}>
              <div className="form-fields">
                {teamMembers.map((teamMember, index) => (
                  <div key={index}>
                    <Typography variant="h6" align='center'>Team Member {index + 1}</Typography>
                    <TextField
                      className="textField"
                      name="employeeName"
                      label="Name"
                      value={teamMember.employeeName}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      width="50px"
                      margin="normal"
                      required={index === 0}
                    /><br /><br />
                    <TextField
                      className="textField"
                      name="employeePhone"
                      label="Phone"
                      value={teamMember.employeePhone}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      width="50px"
                      margin="normal"
                      required={index === 0}
                    /><br /><br />
                    <TextField
                      className="textField"
                      name="employeeDesignation"
                      label="Designation"
                      value={teamMember.employeeDesignation}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      width="50px"
                      margin="normal"
                      required={index === 0}
                    /><br /><br />
                    <TextField
                      className="textField"
                      name="employeeEmail"
                      label="Email"
                      value={teamMember.employeeEmail}
                      onChange={(e) => handleTeamMemberChange(index, e)}
                      width="50px"
                      margin="normal"
                      required={index === 0}
                    />
                  </div>
                ))}
              </div>
            </Collapse>
          </div>

          <div className="form-section">
            <Button variant="outlined" onClick={() => setShowVehicle(!showVehicle)} fullWidth sx={{ width: '60%' }}>
              Vehicle Number
            </Button><br /><br />
            <Collapse in={showVehicle}>
              <div className="form-fields">
                <TextField
                  className="textField"
                  name="vehicleNumber"
                  label="Vehicle Number"
                  value={job.vehicleNumber}
                  onChange={handleChange}
                  width="50px"
                  margin="normal"
                  required
                /><br /><br />
              </div>
            </Collapse>
          </div>

          <div className="form-section">
            <Button variant="outlined" onClick={() => setShowStatus(!showStatus)} fullWidth sx={{ width: '60%' }}>
              Status
            </Button><br /><br />
            <Collapse in={showStatus}>
              <div className="form-fields">
                <RadioGroup name="invoiced" value={job.invoiced} onChange={handleRadioChange} required>
                  <center>
                    <FormControlLabel value="invoiced" control={<Radio />} label="Invoiced" /><br />
                    <FormControlLabel value="notInvoiced" control={<Radio />} label="To Be Invoiced" /><br /><br />
                  </center>
                </RadioGroup>
              </div>
            </Collapse>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20%' }}>
          <div id="button" style={{ flex: '1', display: 'flex', justifyContent: 'flex-start', marginLeft: '160px' }}>
            <Button variant="contained" type="submit" onChange={handledatetime} sx={{ width: '200px' }} endIcon={<EditNoteIcon />}>Create</Button>
          </div>



          <div id="cancel-button" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', marginRight: '160px' }}>
            <Link to="/jobListForAdmin">
              <Button variant="contained" sx={{ width: '200px' }} endIcon={<CancelIcon />}>Cancel</Button>
            </Link>
          </div>
        </div>

      </form>

      {/* <div className="footer">
        <div className="footer-text">
          <center>© 2023 - All Rights Reserved</center>
        </div>
      </div> */}
      <FooterIn />
    </div>
  );
};

export default AnewjobWireframe24;
