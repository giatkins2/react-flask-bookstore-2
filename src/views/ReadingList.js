import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import {Paper, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import BookList from '../components/ReadingList/BookList'

export default function ReadingList() {
    const {book} = useContext(AppContext)

        const theme=useTheme()
        if (book.length<=0){
        return(
        <Typography variant='h3'>Your Reading List is Empty</Typography>
        )
    }

    return (
        <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
            <>
            <Typography variant='h3'>Your Reading List</Typography>
            <BookList/>
            </>

        </Paper>
    )
}