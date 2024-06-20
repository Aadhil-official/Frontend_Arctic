import React, { useState, useEffect } from 'react';
import '../Style/Printjob.css';
import { Button, Grid } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import axios from 'axios';

const PrintComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [buttons, setButtons] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    // Get Job by ID
    axios.get('http://localhost:8080/api/auth/job/{id}')
      .then(response => {
        setJobs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });

    // Generate PDF for Job
    axios.get('http://localhost:8080/api/auth/job/pdf/{id}')
      .then(response => {
        setButtons(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the buttons!", error);
      });
  }, []);

  return (
    <div className="print-container">
      <br/>
      <Button variant="contained" onClick={handlePrint} endIcon={<PrintIcon />}>
        Print
      </Button>
      <br/><br/>
      <div id="printableArea" className="printable-area">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <div className="box">
              <h1>Job Allocation Card</h1>
              {jobs.length > 0 && (
                <>
                  <h4>Customer</h4>
                  <ul type="none">
                    <li>{jobs[0].customerDetails.name || 'Name'}</li>
                    <li>{jobs[0].customerDetails.phone || 'Phone'}</li>
                    <li>{jobs[0].customerDetails.address || 'Address'}</li>
                  </ul>
                  <h4>Employee Details</h4>
                  <ul type="none">
                    <li>{jobs[0].employeeDetails.name || 'Name'}</li>
                    <li>{jobs[0].employeeDetails.phone || 'Phone'}</li>
                    <li>{jobs[0].employeeDetails.designation || 'Designation'}</li>
                  </ul>
                  <h4>Job Details</h4>
                  <ul type="none">
                    <li>{jobs[0].itemIssue || 'Item Issue'}</li>
                    <li>{jobs[0].location || 'Location'}</li>
                    <li>{jobs[0].item || 'Item'}</li>
                  </ul>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PrintComponent;
