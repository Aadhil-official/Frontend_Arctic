import React from 'react';
import '../Style/Printjob.css';
import { Button, Grid } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

class PrintComponent extends React.Component {
  handlePrint = () => {
    window.print();
  };

  render() {
    return (
      <div className="print-container">
        <br/>
        <Button variant="contained" onClick={this.handlePrint} endIcon={<PrintIcon />}>
          Print
        </Button>
        <br/><br/>
        <div id="printableArea" className="printable-area">
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <div className="box">
                <h1>Job Allocation Card</h1>
                <h4>Customer</h4>
                <ul type="none">
                  <li>Name</li>
                  <li>Phone</li>
                  <li>Address</li>
                </ul>
                <h4>Employee Details</h4>
                <ul type="none">
                  <li>Name</li>
                  <li>Phone</li>
                  <li>Designation</li>
                </ul>
                <h4>Job Details</h4>
                <ul type="none">
                  <li>Item Issue</li>
                  <li>Location</li>
                  <li>Item</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default PrintComponent;
