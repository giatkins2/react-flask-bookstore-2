import React from 'react';
import RegisterEditForm from '../forms/RegisterEditForm';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

export default function RegisterUser() {
    const theme=useTheme()

    return (
        <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
            <Typography variant="h4">Register a new account</Typography>
            <RegisterEditForm/>
        </Paper>
    )
}