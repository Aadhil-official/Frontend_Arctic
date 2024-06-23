// import React from 'react';
// import { Button, Grid, Typography, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// const CompletedSiteVisits = ({ completedVisits }) => {
//   return (
//     <Grid container textAlign='center' justifyContent='center'>
//       <Grid item xs={12} style={{ textAlign: "left", margin: "1rem" }}>
//         <Link to={"/SiteVisitDashboard"}>
//           <ArrowBackIcon style={{ fontSize: "40px", opacity: "0.6" }} />
//         </Link>
//       </Grid>
//       <Grid item xl={12} lg={12} md={12} xs={12} sm={12} textAlign={'center'} className='text'>
//         <Typography variant='h3' sx={{ fontWeight: 'bold', marginTop: '5rem', color: 'rgb(26, 99, 209)', fontFamily: "Franklin Gothic Medium", textAlign: "center", fontSize: "70px"}}>
//           Completed Site Visits
//         </Typography>
//       </Grid>

//       <Grid item xs={12}>
//         <Box sx={{ boxShadow: 3, p: 3, borderRadius: 2, backgroundColor: '#f5f5f', marginBottom: '2rem' }}>
//           {completedVisits.map((visit, index) => (
//             <Grid container spacing={2} key={index} alignItems="center" justifyContent="center" sx={{ marginBottom: '1rem' }}>
//               <Grid item xs={12} sm={6}>
//                 <Button 
//                   variant="contained"
//                   sx={{ 
//                     backgroundColor: '#6C94F8', 
//                     color: 'white', 
//                     '&:hover': { backgroundColor: '#5A85E0' }, 
//                     width: '100%' 
//                   }}
//                 >
//                   Visit ID: {visit.visitId}, Location: {visit.location}, Schedule Date: {visit.scheduleDate}
//                 </Button>
//               </Grid>
//             </Grid>
//           ))}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default CompletedSiteVisits;
