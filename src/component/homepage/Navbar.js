import React from 'react';
import clsx from 'clsx';

//material ui

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = ({toggleOpen,open}) => {
    return (
        <AppBar
            position="fixed"
            className={clsx("appBar", {"appBar-shift": open})}
        >
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleOpen}
                edge="start"
                className={clsx("menu-button", {
                "hidden": open,
                })}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar