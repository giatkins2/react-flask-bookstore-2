import { createTheme } from '@mui/material/styles';

const themeOptions = 
{
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
        main: '#58b094',
        },
        secondary: {
        main: '#5b9fa8',
        },
        error: {
        main: '#e3493d',
        },
    },
};

const theme = createTheme(themeOptions);

export default theme