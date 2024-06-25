import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';

function FormUserGroupEdit({ userGroup }) {


    const [id] = useState(userGroup ? userGroup.id : '');
    const [groupName, setGroupName] = useState(userGroup ? userGroup.groupName : '');
    // const [password, setPassword] = useState('');
    const [groupDescription, setGroupDescription] = useState(userGroup ? userGroup.groupDescription : '');
    const [relevantPrivileges, setRelevantPrivileges] = useState(userGroup ? userGroup.relevantPrivileges : []); // State to hold the selected role
    const [allocatedJobs, setAllocatedJobs] = useState(userGroup ? userGroup.allocatedJobs : '');

    const navigate = useNavigate();


    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setRelevantPrivileges((prev) =>
            prev.includes(value) ? prev.filter((privilege) => privilege !== value) : [...prev, value]
        );
    };


    const handleSubmit = () => {


        const validateForm = z.object({
            groupName: z.string().min(1, { message: "Enter group name" }),
            groupDescription: z.string().min(1, { message: "Enter group description" }),
            relevantPrivileges: z.string().min(1, { message: "Enter relevant privileges" }),
            allocatedJobs: z.string().min(1, { message: "Enter allocated jobs date" })
        });

        // console.log("id of role is..........." + role.toUpperCase());


        const updatedGroupData = {
            id: id,
            groupName: groupName,
            // password: password,
            groupDescription: groupDescription,
            relevantPrivileges: relevantPrivileges,
            allocatedJobs: allocatedJobs
        };

        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length) return false;
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        const result = validateForm.safeParse(updatedGroupData);

        if (
            userGroup.groupName !== updatedGroupData.groupName ||
            userGroup.groupDescription !== updatedGroupData.groupDescription ||
            !arraysEqual(userGroup.relevantPrivileges, updatedGroupData.relevantPrivileges) ||
            userGroup.allocatedJobs !== updatedGroupData.allocatedJobs
        ) {
            axios.put(`http://localhost:8080/api/auth/updateUserGroup`, updatedGroupData)
                .then(() => {
                    success("User group updated successfully");
                    navigate('/login/welcomeadmin/userGroupListAd');
                })
                .catch(() => {
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
                })
        }
    };


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
                    InputProps={{
                        readOnly: groupName === 'AdminGroup'
                    }}
                    onChange={(e) => setGroupName(e.target.value)}
                />

                <TextField
                    label="Group Description"
                    type="text"
                    multiline
                    rows={4}
                    value={groupDescription}
                    InputProps={{
                        readOnly: groupName === 'AdminGroup'
                    }}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />

                {groupName !== 'AdminGroup' && (
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
                )}

                <TextField
                    label="Allocated Jobs"
                    type='text'
                    value={allocatedJobs}
                    InputProps={{
                        readOnly: groupName === 'AdminGroup'
                    }}
                    onChange={(e) => setAllocatedJobs(e.target.value)}
                />

                <br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>


        </div>
    )
}

export default FormUserGroupEdit