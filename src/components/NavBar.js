import React, {useState, useContext} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThemeSwitch from './ThemeSwitch';
import {Link} from 'react-router-dom';
import {AppContext} from '../context/AppContext'


    export default function NavBar() {
        const [anchorEl, setAnchorEl] = useState(null);
        const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
        const {user} = useContext(AppContext);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {user?.token ?
            <>
            <MenuItem onClick={handleMenuClose}>
            <Link to='/logout' style={{textDecoration:"none"}}>
                Logout
            </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
            <Link to='/edit_user' style={{textDecoration:"none"}}>
                My account
            </Link>
            </MenuItem>
            </>
            :
            <MenuItem onClick={handleMenuClose}>
                <Link to='/login' style={{textDecoration:"none"}}>
                Login
                </Link>
            </MenuItem>
            }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
            <IconButton size="large" color="inherit">
                <BookmarkIcon />
            </IconButton>
            <p>ReadingList</p>
            </MenuItem>
            <MenuItem>
            <IconButton
                size="large"
                aria-label="show 5 new notifications"
                color="inherit"
            >
                <Link to='/books'>
                <WhatshotIcon />
                </Link>
            </IconButton>
            <p>New Titles</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
            <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography
                variant="h4"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
            Pratchard's Bookstore
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton aria-label="theme mode" color="inherit">
                    <ThemeSwitch/>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                <AccountCircle />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            </Box>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
    </Box>
    );
}