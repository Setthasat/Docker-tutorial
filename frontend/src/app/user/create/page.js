"use client";
import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';



function page() {
    const [formData, setFormData] = React.useState({
        name: '',
        surname: '',
        age: 0,
    });

    React.useEffect(() => {
        console.log(process.env.BACKEND_URL);
        const checkHealth = async () => {
            const data = await axios.get("http://localhost:8888/health");
            console.log("health ", data);
        };

        checkHealth();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8888" + "/user", formData);
        } catch (error) {
            console.log(error);
        }
        setFormData({
            name: '',
            surname: '',
            age: 0,
        });
    };

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, mx: 'auto', mt: 4 }}>
                <Typography variant="h5">Create User</Typography>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    focused
                />
                <TextField
                    label="Surname"
                    name="surname"
                    variant="outlined"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Age"
                    name="age"
                    type="number"
                    variant="outlined"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </div>
    );
}

export default page;