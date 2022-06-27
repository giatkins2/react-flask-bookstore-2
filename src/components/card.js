import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import InfoIcon from '@mui/icons-material/Info';

let books = [{title:"From Russia With Love", desc:"JFK's favourite book"}]

export default function MultiActionAreaCard() {

    return (
        <ImageList cols={4}>
        {books?.map((book) => ( 
        <ImageListItem key={books.title}>
            <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                image="https://placehold.co/100"
                alt="dummy"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap="true">
                {book.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton size="large" label="Add Bookmark" color="secondary">
                <BookmarkAddIcon/>
                </IconButton>
                <IconButton size="large" lable="Mark as Read" color="secondary">
                <AutoStoriesIcon/>
                </IconButton>
                <IconButton size="large" lable="Mor Info" color="secondary">
                <InfoIcon/>
                </IconButton>
            </CardActions>
            </Card>
        </ImageListItem>
        ))}
        </ImageList>
    );
}