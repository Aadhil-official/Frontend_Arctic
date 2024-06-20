import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, TextField } from '@mui/material';

function FormUserGroupEdit({ userGroup }) {


    const [id] = useState(userGroup ? userGroup.id : '');
    const [groupName, setGroupName] = useState(userGroup ? userGroup.indoorSerial : '');
    // const [password, setPassword] = useState('');
    const [groupDescription, setGroupDescription] = useState(userGroup ? userGroup.outdoorSerial : '');
    const [relevantPrivileges, setRelevantPrivileges] = useState(userGroup ? userGroup.modelName : ''); // State to hold the selected role
    const [allocatedJobs, setAllocatedJobs] = useState(userGroup ? userGroup.commissionedDate : '');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            groupName: z.string().min(1, { message: "Enter indoor serial" }),
            groupDescription: z.string().min(1, { message: "Enter outdoor serial" }),
            relevantPrivileges: z.string().min(1, { message: "Enter model name" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            allocatedJobs: z.string().min(1, { message: "Enter commissioned date" })
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


        const result = validateForm.safeParse(updatedGroupData);

        if (
            userGroup.groupName !== updatedGroupData.groupName ||
            userGroup.groupDescription !== updatedGroupData.groupDescription ||
            userGroup.relevantPrivileges !== updatedGroupData.relevantPrivileges ||
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
                    onChange={(e) => setGroupName(e.target.value)}
                />

                <TextField
                    label="Group Description"
                    type="text"
                    multilined
                    raws={4}
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />

                <TextField
                    label="Relevant Privileges"
                    type="text"
                    value={relevantPrivileges}
                    onChange={(e) => setRelevantPrivileges(e.target.value)}
                />


                <TextField
                    label="Allocated Jobs"
                    type='text'
                    value={allocatedJobs}
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