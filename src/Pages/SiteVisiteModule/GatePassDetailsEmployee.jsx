import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Footer from "../../Components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FooterIn, NormalHeaderBar } from '../../Components';

function GatePassDetailsEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("id", id);

  const [gatePassDetails, setGatePassDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGatePassDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/v1/gatePass/getGatePass?id=${id}`
        );
        setGatePassDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gate pass details:", error);
        setLoading(false);
      }
    };

    fetchGatePassDetails();
  }, [id]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h5 = {
    fontSize: "1.1rem",
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById("gate-pass");
    const logoImage = new Image();
    logoImage.src =
      "https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0";
    logoImage.onload = () => {
      html2canvas(element, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF("p", "mm", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = (canvas.height * width) / canvas.width;
        pdf.addImage(imgData, "JPEG", 0, 0, width, height);
        pdf.save("gate-pass.pdf");
      });
    };
  };

  const handleDownloadJPG = () => {
    const element = document.getElementById("gate-pass");

    html2canvas(element, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.download = "gate-pass.jpg";
      link.href = imgData;
      link.click();
    });
  };

  return (
    <>
    <NormalHeaderBar/>
      <Grid container className="back-icon">
        <Grid item xs={12} textAlign="left">
          <Link to={`/SiteVisitThree/${id}`}>
          <img src="https://cdn-icons-png.flaticon.com/128/3031/3031796.png" 
            style={{ width: '40px', 
            height: '40px', 
            opacity: '0.6', 
            margin: '15px', 
            
            left: '10px', 
            top: '10px' }} alt='Back' />
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: "1rem" }}
      >
         
        <Grid item xs={12} md={6} textAlign="center">
         

          <Button
            onClick={handleDownloadPDF}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#191970",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Download as PDF
          </Button>

          <Button
            onClick={handleDownloadJPG}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Download as JPG
          </Button>
        </Grid>
      </Grid>
      {/* <Button style={{alignContent:"center"}}
      variant="outlined" 
      onClick={() => navigate(-1)}>
            Go Back
          </Button> */}

<Button
  style={{ display: 'block', margin: 'auto', marginBottom: '10px',marginTop:'10px' }}
  variant="outlined" 
  onClick={() => navigate(`/SiteVisitThree/${id}`)}>
    Go Back
</Button>

      {loading ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <p>Loading...</p>
          </Grid>
        </Grid>
      ) : gatePassDetails ? (
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            textAlign="center"
            style={{ marginTop                : "2rem" }}
          >
            <Box
              id="gate-pass"
              sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "white",
                marginBottom: "2rem",
                boxShadow: 3,
                border: "1px solid #ccc", // Add border here
              }}
            >
              <img
                className="logo"
                src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
                height="45px"
                alt="logo"
              ></img>

              <Grid container className="text">
                <Grid item xs={12} textAlign="center">
                  <ThemeProvider theme={theme}>
                    <Typography
                      variant="h"
                      sx={{
                        marginTop: "-1rem",
                        color: "rgb(26, 99, 209)",
                        textTransform: "capitalize",
                        textAlign: "center",
                        fontSize: "60px",
                        fontWeight: "bold",
                        fontStyle: "normal",
                      }}
                    >
                      GATE PASS
                    </Typography>
                  </ThemeProvider>
                </Grid>
              </Grid>

              <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                This gate pass grants entry to perform essential operations at
                the site. It is issued under stringent security procedures to
                maintain the safety and integrity of the premises. Your
                cooperation is greatly appreciated.
              </Typography>

              {/* <TextField
                fullWidth
                id="customerName"
                label="Customer Name:"
                value={gatePassDetails."Customer Name:",customerName}
          

                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              /> */}

<TextField
  fullWidth
  id="customerName"
  value={`Customer Name: ${gatePassDetails && gatePassDetails.customerName}`}
  variant="outlined"
  margin="normal"
  InputProps={{
    readOnly: true,
  }}
/>


              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                We are mentioning about our team details that are assigned to
                your site visit.
              </Typography>

              <TextField
                fullWidth
                id="vehicleNumber"
               // label="Vehicle Number"
value={`Vehicle Number: ${gatePassDetails && gatePassDetails.vehicleNumber}`}
                variant="outlined"
                margin="normal"
                InputProps={{
                  readOnly: true,
                }}
              />

              {gatePassDetails.gpMembers &&
                gatePassDetails.gpMembers.length > 0 &&
                gatePassDetails.gpMembers.map((member, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    id={`gpMember-${index}`}
                    //label={`Employee ${index + 1} Name`}
                    //value={`Vehicle Number: ${gatePassDetails && gatePassDetails.vehicleNumber}`}
                    value={`Employee ${index + 1} Name: ${member}`}
                    variant="outlined"
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                ))}

              <Typography
                variant="body1"
                sx={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                Thank You!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <p>Gate pass details not found</p>
          </Grid>
        </Grid>
      )}

      <FooterIn />
    </>
  );
}

export default GatePassDetailsEmployee;
