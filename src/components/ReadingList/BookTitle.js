import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import AddRemoveBookList from './AddRemoveBookList';



export default function BookTitle({book}) {
    return (
        <Card sx={{height:"100%" }}>
        <CardContent>
            <Typography variant="h6" gutterBottom>
            {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {book.summary.slice(0,20)}
            </Typography>
        </CardContent>
        <CardActions>
            <AddRemoveBookList book={book}/>
        </CardActions>
        </Card>
    );
}