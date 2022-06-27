import React, {useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useBooks from '../hooks/useBooks';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import imageListItem from '@mui/material/ImageListItem';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard() {
  const {books} = useBooks();
  const {addToReadingList, markAsRead} = useContext(AppContext);
  const [expanded, setExpanded] = useState(false);

  const handleAddToReadingList =(book)=>{
    addToReadingList(book)
  };
  const handleMarkAsRead =(book)=>{
    markAsRead(book)
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return (
      <Box sx={{display:"grid", 
      gridTemplateColumns:{xs:'repeat(1,1fr)', sm:'repeat(2,1fr)', md:'repeat(3,1fr)', lg:'repeat(4,1fr)'},
      [`& .${imageListItem}`]:{display:"flex", flexDirection:"column"}}}>
        {books.map((book)=>(
          <Card sx={{ maxWidth: 345, mb:4, mx:15}} key={book.id}>
          <CardMedia
            component="img"
            height="250"
            image={book.img}
            alt="Novel Cover"
          />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
        <CardActions disableSpacing>
          <IconButton 
                  aria-label="add to reading list"
                  onClick={()=>{handleAddToReadingList(book)}}>
            <PlaylistAddIcon />
          </IconButton>
          <IconButton 
                  aria-label="remove from reading list"
                  onClick={()=>{handleMarkAsRead(book)}}>
            <PlaylistRemoveIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <InfoIcon />
          </ExpandMore>
        </CardActions>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
            {book.pages} :Pages
              </Typography>
              <Typography paragraph>
              {book.summary}.
              </Typography>
          </CardContent>
        </Collapse>
      </Card>
      ))}
    </Box>
    );
}