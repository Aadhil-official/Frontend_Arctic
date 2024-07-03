import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { dismiss, error, loading, success } from '../util/Toastify';

export default function FormUpdate({ user }) {

    const [id] = useState(user ? user.id : '');
    const [username, setUsername] = useState(user ? user.username : ''); // Initialize with user.username if user exists
    const [email, setEmail] = useState(user ? user.email : '');
    const [role, setRole] = useState(user && user.roles ? user.roles[0].name.toLowerCase() : [' ']); // Check if user and user.roles exist
    const [address, setAddress] = useState(user ? user.address : '');
    const [usergroup, setUsergroup] = useState([]);
    const [tel, setTel] = useState(user ? user.tel : '')

    const navigate = useNavigate();

    // console.log("Starting of my form......." + user);
    // console.log("username:", username);
    // console.log("email:", email);
    // console.log("role:", role);
    // console.log("address:", address);
    // console.log("usergroup:", usergroup);
    // console.log("tel:", tel);


    useEffect(() => {
        if (usergroup === 'AdminGroup') {
            setRole('admin');
        }
        axios.get("http://localhost:8080/api/auth/getAllUserGroups")
            .then((response) => {
                setUsergroup(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user groups:", error);
            });
    }, [usergroup]);

    // if (user) {
    //     console.log("user is there");
    // }
    // navigate('/');
    const handleSubmit = () => {

        const loadingId = loading("Updating details.....");

        const allowedRoles = ['admin', 'user'];



        const validateForm = z.object({
            username: z.string().min(1, { message: "Enter your name" }),
            address: z.string().min(1, { message: "Enter your address" }),
            tel: z.string().min(1, { message: "Enter your contact number" }),
            // password: z.string().min(8, 'Password must be at least 8 characters long'),
            email: z.string().email('Invalid email address'),
            roles: z.array(z.string()).nonempty('Please select a role!').refine((role) => allowedRoles.includes(role[0]), {
                message: 'Role is not defined.'
            })
        });

        // console.log("id of role is..........." + role.toUpperCase());

        const userId = user.roles[0].id;
        const roleName = role.toUpperCase();

        const updatedUser = {
            id: id,
            username: username,
            email: email,
            address: address,
            usergroup: usergroup,
            tel: tel,
            roles: [{ id: userId, name: roleName }] // Send role as an array containing the selected role
        };


        // console.log("thisklkdklwejdlkwed"+email);
        // console.log("thisklkdklwejdlkwed", updatedUser);

        const result = validateForm.safeParse(updatedUser);
        if (result.error) {
            if (
                user.username !== updatedUser.username ||
                user.email !== updatedUser.email ||
                user.address !== updatedUser.address ||
                user.usergroup !== updatedUser.usergroup ||
                user.tel !== updatedUser.tel ||
                user.roles[0].name.toLowerCase() !== updatedUser.roles[0].name.toLowerCase()
            ) {
                axios.put(`http://localhost:8080/api/auth/updateUser`, updatedUser)
                    .then(() => {
                        dismiss(loadingId);
                        success("User updated successfully");
                        navigate('/login/welcomeadmin/employeelistad');
                    }).catch(() => error("Username or email already exist!"))
            } else {
                dismiss(loadingId);
                error("No changes detected!");
                navigate('/login/welcomeadmin/employeelistad');
            }
        } else {
            dismiss(loadingId);
            const formattedError = result.error.format();
            if (formattedError.username?._errors) {
                error(String(formattedError.username?._errors));
            } else if (formattedError.email?._errors) {
                error(String(formattedError.email?._errors));
            } else if (formattedError.roles?._errors) {
                error(String(formattedError.roles?._errors));
            } else if (formattedError.address?._errors) {
                error(String(formattedError.address?._errors));
            } else if (formattedError.tel?._errors) {
                error(String(formattedError.tel?._errors));
            } else if (formattedError.usergroup?._errors) {
                error(String(formattedError.usergroup?._errors));
            }
        }

    };

    return (
        <>
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
                    label="Username"
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    label="Address"
                    type="text"
                    multiline
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <TextField
                    select
                    label="User group"
                    value={usergroup}
                    onChange={(e) => setUsergroup(e.target.value)}
                    SelectProps={{ native: true }}
                >
                    <option value={user.usergroup}>{user.usergroup}</option>
                    {usergroup.filter(group => group.groupName !== user.usergroup).map((group, index) => (
                        <option key={index} value={group.groupName}>{group.groupName}</option>
                    ))}
                </TextField>


                <TextField
                    label="Email"
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                    label="Contact No"
                    type='text'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />

                <TextField
                    select
                    label="Designation"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    InputProps={{
                        readOnly: usergroup === 'AdminGroup'
                    }}
                    // onChange={(e) => setRole(e.target.value.JSON.stringify(e))}
                    SelectProps={{ native: true }}
                >
                    <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </TextField><br /><br />
                <Button variant="contained" onClick={handleSubmit}>
                    Update
                </Button><br /><br />
            </Box>


        </>

    );
}
