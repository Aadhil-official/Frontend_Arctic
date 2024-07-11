import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../../util/Toastify';
import { Box, Button, FormGroup, Grid, TextField } from '@mui/material';

function FormAddJob() {

    const [vehicleNumber, setVehicleNumber] = useState('');
    const [status, setStatus] = useState('');
    const [customerName, setCustomerName] = useState(""); // State to hold the selected role
    const [date, setDate] = useState(' ');
    const [teamMembers, setTeamMembers] = useState([]);
    const [newTeamMember, setNewTeamMember] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const loadingId = loading("Adding details.....");

        const validateForm = z.object({
            vehicleNumber: z.string().min(1, { message: "Enter vehicle number" }),
            status: z.string().min(1, { message: "Enter job status" }),
            teamMembers: z.array(z.string()).min(1, { message: "Team members can't be empty" }),
            customerName: z.string().min(1, { message: "Enter customer name" }),
            date: z.string().date().min(1, { message: "Enter allocated jobs date" })
        });

        const jobData = {
            vehicleNumber: vehicleNumber,
            status: status,
            customerName: customerName,
            date: date,
            teamMembers: teamMembers
        };

        const result = validateForm.safeParse(jobData);
        if (result.success) {
            axios.post('http://localhost:8080/api/auth/addJob', jobData)
                .then(() => {
                    dismiss(loadingId);
                    navigate('/login/welcomeadmin/jobListAd');
                    success('User group added successfully!')
                })
                .catch(() => {
                    error("Invalid team members!")
                    dismiss(loadingId);
                })
        } else {
            dismiss(loadingId);
            const formattedError = result.error.format();
            if (formattedError.customerName?._errors) {
                error(String(formattedError.customerName?._errors));
            } else if (formattedError.vehicleNumber?._errors) {
                error(String(formattedError.vehicleNumber?._errors));
            } else if (formattedError.status?._errors) {
                error(String(formattedError.status?._errors));
            } else if (formattedError.date?._errors) {
                error(String(formattedError.date?._errors));
            } else if (formattedError.teamMembers?._errors) {
                error(String(formattedError.teamMembers?._errors));
            }
        }

    };

    // const handleMemberChange = (event) => {
    //     const value = event.target.value;
    //     setTeamMembers((prev) =>
    //         prev.includes(value) ? prev.filter((privilege) => privilege !== value) : [...prev, value]
    //     );
    // };

    const handleAddTeamMember = () => {
        if (newTeamMember.trim() !== '') {
            setTeamMembers([...teamMembers, newTeamMember]);
            setNewTeamMember('');
        } else {
            error("Team member name can't be empty");
        }
    };

    const handleTeamMemberChange = (index, value) => {
        const updatedTeamMembers = [...teamMembers];
        updatedTeamMembers[index] = value;
        setTeamMembers(updatedTeamMembers);
    };

    const handleReset = () => {
        setCustomerName('');
        setVehicleNumber('');
        setTeamMembers([]);
        setDate('');
        setStatus('');
    }

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
                    label="Job Data"
                    type="date"
                    fullWidth
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <Grid container textAlign='center' justifyContent='center'>
                    <Grid item xs={12} sx={{ opacity: '0.5' }}>
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
                    Add Member
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
                    value={status}
                    fullWidth
                    onChange={(e) => setStatus(e.target.value)}
                    SelectProps={{ native: true }}
                >

                    <option value=""></option>
                    <option value="invoiced">Invoiced</option>
                    <option value="to be invoiced">To be invoiced</option>

                </TextField>


                <br /><br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        marginRight: { xs: 4, sm: 4, md: 5 }
                    }}>
                    Add Job
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
                <br /><br />
            </Box>

        </div>
    )
}

export default FormAddJob