import { createTheme } from '@mui/material/styles';


const themeOptions = 
{
    palette: {
        type: 'light',
        mode: 'light',
        primary: {
            main: '#0b5e21',
        },
        secondary: {
            main: '#0b305e',
        },
        error: {
            main: '#5e0b23',
        },
    },
};

const theme = createTheme(themeOptions);

export default theme 