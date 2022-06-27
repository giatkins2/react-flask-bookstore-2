import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: 'gold',
    },
});

export default function CustomizedRating() {
    return (
        <Box
        sx={{
            '& > legend': { mt: 2 },
        }}
        >
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        </Box>
    );
}