import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';

function FormAddUserGroup() {


    const [groupName, setGroupName] = useState('');
    // const [password, setPassword] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [relevantPrivileges, setRelevantPrivileges] = useState([]); // State to hold the selected role
    const [allocatedJobs, setAllocatedJobs] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            groupName: z.string().min(1, { message: "Enter group name" }),
            groupDescription: z.string().min(1, { message: "Enter group description" }),
            relevantPrivileges: z.array(z.string()).min(1, { message: 'Select relevant privileges' }),
            allocatedJobs: z.string().min(1, { message: "Enter allocated jobs date" })
        });

        const groupData = {
            groupName: groupName,
            // password: password,
            groupDescription: groupDescription,
            relevantPrivileges: relevantPrivileges,
            allocatedJobs: allocatedJobs
        };

        const result = validateForm.safeParse(groupData);
        if (result.success) {
            
            if (groupName === "AdminGroup") {
                error("You can't create AdminGroup!");
            } else {
                axios.post('http://localhost:8080/api/auth/addUserGroup', groupData)
                    .then(() => {
                        navigate('/login/welcomeadmin/userGroupListAd');
                        success('User group added successfully!')
                    })
                    .catch(() => error("User group already exist!"))
            }
        } else {
            const formattedError = result.error.format();
            if (formattedError.groupName?._errors) {
                error(String(formattedError.groupName?._errors));
            } else if (formattedError.groupDescription?._errors) {
                error(String(formattedError.groupDescription?._errors));
            } else if (formattedError.relevantPrivileges?._errors) {
                error(String(formattedError.relevantPrivileges?._errors));
            } else if (formattedError.allocatedJobs?._errors) {
                error(String(formattedError.allocatedJobs?._errors));
            }
        }

    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setRelevantPrivileges((prev) =>
            prev.includes(value) ? prev.filter((privilege) => privilege !== value) : [...prev, value]
        );
    };

    const handleReset = () => {
        setGroupName('');
        setGroupDescription('');
        setRelevantPrivileges([]);
        setAllocatedJobs('');
    }

    return (
        <div>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '80%' },
                    textAlign: 'center',
                    mt: 3
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    label="Group Name"
                    type='text'
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />

                <TextField
                    label="Group Description"
                    type="text"
                    multiline
                    rows={4}
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />

                <Grid container textAlign='center' justifyContent='center'>
                    <Grid item xs={7} textAlign='left' sx={{ opacity: '0.5' }}>
                        <Typography variant='body1'>
                            <u>
                                Relevant Privileges :
                            </u>
                        </Typography>
                    </Grid>
                    <Grid item xs={2.7}></Grid>
                    <Grid item xs={6}>
                        <FormGroup>
                        <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('createUser')}
                                            onChange={handleCheckboxChange}
                                            value="createUser"
                                        />
                                    }
                                    label="Create User"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('complain')}
                                            onChange={handleCheckboxChange}
                                            value="complain"
                                        />
                                    }
                                    label="Complain"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessEmployee')}
                                            onChange={handleCheckboxChange}
                                            value="accessEmployee"
                                        />
                                    }
                                    label="Access Employee"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessItem')}
                                            onChange={handleCheckboxChange}
                                            value="accessItem"
                                        />
                                    }
                                    label="Access Item"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessUnit')}
                                            onChange={handleCheckboxChange}
                                            value="accessUnit"
                                        />
                                    }
                                    label="Access Unit"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessVehicle')}
                                            onChange={handleCheckboxChange}
                                            value="accessVehicle"
                                        />
                                    }
                                    label="Access Vehicle"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessGroup')}
                                            onChange={handleCheckboxChange}
                                            value="accessGroup"
                                        />
                                    }
                                    label="Access Group"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessJobAllocation')}
                                            onChange={handleCheckboxChange}
                                            value="accessJobAllocation"
                                        />
                                    }
                                    label="Access Job Allocation"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessSiteVisit')}
                                            onChange={handleCheckboxChange}
                                            value="accessSiteVisit"
                                        />
                                    }
                                    label="Access Site Visit"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessCalendar')}
                                            onChange={handleCheckboxChange}
                                            value="accessCalendar"
                                        />
                                    }
                                    label="Access Calendar"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessServiceAgreement')}
                                            onChange={handleCheckboxChange}
                                            value="accessServiceAgreement"
                                        />
                                    }
                                    label="Access Service Agreement"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessJob')}
                                            onChange={handleCheckboxChange}
                                            value="accessJob"
                                        />
                                    }
                                    label="Access Job"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={relevantPrivileges.includes('accessCustomer')}
                                            onChange={handleCheckboxChange}
                                            value="accessCustomer"
                                        />
                                    }
                                    label="Access Customer"
                                />
                        </FormGroup>
                    </Grid>
                </Grid>

                <TextField
                    label="Allocated Jobs"
                    type='text'
                    value={allocatedJobs}
                    onChange={(e) => setAllocatedJobs(e.target.value)}
                />

                <br /><br />
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        marginRight: { xs: 4, sm: 4, md: 5 }
                    }}>
                    Add User Group
                </Button>
                <Button variant="contained" onClick={handleReset}>
                    Reset
                </Button>
                <br /><br />
            </Box>

        </div>
    )
}

export default FormAddUserGroup