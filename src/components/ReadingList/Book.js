import React from 'react'
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useTheme} from '@mui/material/styles';
import BookTitle from './BookTitle';

const Book = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.secondary : theme.palette.primary,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent:'center',
    textAlign: 'center',
    display:'flex',
    color: theme.palette.text.secondary,
    }));

    export default function BookList({book}) {
        const theme = useTheme();


    return (
        <Grid container spacing={2} sx={{m:1, pr:2, border: '1px solid', borderRadius:1, alignItems:"stretch"}}>
            <Grid item md={4} sm={6} xs={12}>
                {console.log(theme)}
                <Book sx={{height:'100%'}}>
                    <Avatar alt={book.title} sx={{height:'100%', width:"100%"}} variant="rounded" src={book.img}/>
                </Book>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Book sx={{height:'100%'}}>
                    <BookTitle book={book}/>
                </Book>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
                <Book sx={{height:'100%'}}>
                    <div>
                    {book.summery}
                    </div>
                </Book>
            </Grid>
            <Grid item md={2} sm={6} xs={12}>
                <Book sx={{height:'100%', alignContent:'center'}}>
                    {book.subject}
                </Book>
            </Grid>

        </Grid>
    )
}