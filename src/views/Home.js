import React from 'react';
import {Paper, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

export default function Home() {
    const theme=useTheme()

    return (
        <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
            <>
            <Typography variant="h4">Welcome to Pratchard's</Typography>
            <Typography variant="body2">London's favourite bookstore!</Typography>
            </>

        </Paper>
    )
}