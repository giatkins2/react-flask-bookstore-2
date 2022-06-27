import {useState} from 'react';
import BookCards from '../components/BookCards';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function BookBrowser() {

    const[books, getBooks] = useState()

    return (
        <>
        <Typography variant='h3'>Browse Available Titles</Typography>
        <Box sx={{display:"flex", alignContent:"center", justifyContent:"center", width:"100%", mb:2}}>
            <BookCards/>
        </Box>
        </>
    )
}