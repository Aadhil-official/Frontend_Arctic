import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../../util/Toastify';
import { Box, Button, FormGroup, Grid, TextField } from '@mui/material';

function FormJobEdit({ job }) {


    const [id] = useState(job ? job.id : '');
    const [vehicleNumber, setVehicleNumber] = useState(job ? job.vehicleNumber : '');
    const [status, setStatus] = useState(job ? job.status : '');
    const [customerName, setCustomerName] = useState(job ? job.customerName : '');
    const [date, setDate] = useState(job ? job.date : '');
    const [teamMembers, setTeamMembers] = useState(job ? job.teamMembers : []);
    const [newTeamMember, setNewTeamMember] = useState('');
    const [customerNumber, setCustomerNumber] = useState(job ? job.customerNumber : '');

    const navigate = useNavigate();


    const handleAddTeamMember = () => {
        if (newTeamMember.trim() !== '') {
            setTeamMembers([...teamMembers, newTeamMember]);
            setNewTeamMember('');
        } else {
            error("Team member name can't be empty");
        }
    };


    const handleSubmit = () => {
        const loadingId = loading("Updating details.....");

        const validateForm = z.object({
            vehicleNumber: z.string().min(1, { message: "Enter vehicle number" }),
            status: z.string().min(1, { message: "Enter job status" }),
            teamMembers: z.array(z.string()).min(1, { message: "Team members can't be empty" }),
            customerName: z.string().min(1, { message: "Enter customer name" }),
            customerNumber: z.string().regex(/^\+?\d{10,12}$/, { message: "Invalid phone number" }),
            date: z.string().min(1, { message: "Enter allocated jobs date" })
        });
        // console.log("id of role is..........." + role.toUpperCase());


        const updatedJobData = {
            id: id,
            vehicleNumber: vehicleNumber,
            status: status,
            customerName: customerName,
            customerNumber: customerNumber,
            date: date,
            teamMembers: teamMembers
        };

        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        const phoneNumberPattern = /^(\+?\d{10,12}|\d{10}|\-\d{12}|^0\d{9})$/;


        const result = validateForm.safeParse(updatedJobData);

        if (result.success) {
            if (
                job.vehicleNumber !== updatedJobData.vehicleNumber ||
                job.status !== updatedJobData.status ||
                !arraysEqual(job.teamMembers, updatedJobData.teamMembers) ||
                job.date !== updatedJobData.date ||
                job.customerName !== updatedJobData.customerName ||
                job.customerNumber !== updatedJobData.customerNumber
            ) {
                if (!phoneNumberPattern.test(customerNumber)) {
                    dismiss(loadingId);
                    error("Invalid telephone number");
                } else {
                    axios.put(`http://localhost:8080/api/auth/updateJob`, updatedJobData)
                        .then(() => {
                            dismiss(loadingId);
                            success("Job updated successfully");
                            navigate('/login/welcomeadmin/jobListAd');
                        })
                        .catch((err) => {
                            dismiss(loadingId);
                            if (err.response?.data.includes("User not found")) {
                                error("Team members not exist!..");
                            } else {
                                error("Customer number already exists!..");
                            }
                        })
                }
            } else {
                dismiss(loadingId);
                error("No changes ditected!..");
                navigate("/login/welcomeadmin/jobListAd");
            }
        } else {
            dismiss(loadingId);
            const formattedError = result.error.format();
            if (formattedError.customerName?._errors) {
                error(String(formattedError.customerName?._errors));
            } else if (formattedError.status?._errors) {
                error(String(formattedError.status?._errors));
            } else if (formattedError.teamMembers?._errors) {
                error(String(formattedError.teamMembers?._errors));
            } else if (formattedError.date?._errors) {
                error(String(formattedError.date?._errors));
            } else if (formattedError.vehicleNumber?._errors) {
                error(String(formattedError.vehicleNumber?._errors));
            } else if (formattedError.customerNumber?._errors) {
                error(String(formattedError.customerNumber?._errors));
            }
        }
    };

    const handleTeamMemberChange = (index, value) => {
        const updatedTeamMembers = [...teamMembers];
        updatedTeamMembers[index] = value;
        setTeamMembers(updatedTeamMembers);
    };


    return (
        <div>


            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                    textAlign: 'center',
                    mt: 3
                }}
                noValidate
                autoComplete="off"
            >


                <TextField
                    label="Customer Name"
                    type='text'
                    fullWidth
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />


                <TextField
                    label="Customer Number"
                    type='text'
                    fullWidth
                    value={customerNumber}
                    onChange={(e) => setCustomerNumber(e.target.value)}
                />

                <TextField
                    label="Job Data"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <Grid container textAlign='center' justifyContent='center'>
                    <Grid item xs={12} textAlign='left' sx={{ opacity: '0.5' }}>
                        <TextField
                            label="Enter Team Members"
                            type='text'
                            fullWidth
                            value={teamMembers.join(', ')}
                            sx={{ display: 'none' }}
                        />
                    </Grid>
                    {/* <Grid item xs={2.7}></Grid> */}
                    <Grid item xs={12}>
                        <FormGroup>
                            {teamMembers.map((member, index) => (
                                <TextField
                                    label={`Member ${index + 1}`}
                                    type='text'
                                    fullWidth
                                    key={index}
                                    value={member}
                                    onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                                />
                            ))}
                        </FormGroup>
                    </Grid>
                </Grid>

                <TextField
                    label="+ New Team Member"
                    type='text'
                    fullWidth
                    value={newTeamMember}
                    onChange={(e) => setNewTeamMember(e.target.value)}
                />
                <Button
                    variant="contained"
                    onClick={handleAddTeamMember}
                >
                    Add Member+
                </Button>

                <TextField
                    label="Vehicle Number"
                    type='text'
                    fullWidth
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                />

                <TextField
                    select
                    label="Job Status"
                    fullWidth
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    SelectProps={{ native: true }}
                >

                    <option value=""></option>
                    <option value="invoiced">Invoiced</option>
                    <option value="to be invoiced">To be invoiced</option>

                </TextField>

                <br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>


        </div>
    )
}

export default FormJobEdit