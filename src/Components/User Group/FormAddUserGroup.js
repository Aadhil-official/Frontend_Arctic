import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { error, success } from '../../util/Toastify';
import { Box, Button, TextField } from '@mui/material';

function FormAddUserGroup() {


    const [groupName, setGroupName] = useState('');
    // const [password, setPassword] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [relevantPrivileges, setRelevantPrivileges] = useState(''); // State to hold the selected role
    const [allocatedJobs, setAllocatedJobs] = useState(' ');

    const navigate = useNavigate();

    const handleSubmit = () => {


        const validateForm = z.object({
            groupName: z.string().min(1, { message: "Enter indoor serial" }),
            groupDescription: z.string().min(1, { message: "Enter outdoor serial" }),
            relevantPrivileges: z.string().min(1, { message: "Enter model name" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            allocatedJobs: z.string().min(1, { message: "Enter commissioned date" })
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
            axios.post('http://localhost:8080/api/auth/addUserGroup', groupData)
                .then(() => {
                    navigate('/login/welcomeadmin/userGroupListAd');
                    success('User group added successfully!')
                })
                .catch(() => error("User group already exist!"))
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

    const handleReset = () => {
        setGroupName('');
        setGroupDescription('');
        setRelevantPrivileges('');
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