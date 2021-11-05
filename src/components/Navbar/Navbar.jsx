import React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    const history = useHistory();
    return (
        <nav className="nav-bar">
            <Typography 
                sx = {{m:2, display:'inline-block'}}
                variant='h4'>GIPHY SEARCH</Typography>
            <Button
                sx = { {m:2, display:'inline-block'} }
                size = "large"
                onClick={(event) => {history.push('/')}}
            >HOME</Button>
            <Button
                sx = { {m:2, display:'inline-block'} }
                size = "large"
                onClick={(event) => {
                    console.log(history);
                    history.push('/favorites')}}
            >FAVORITES</Button>
        </nav>
    )
} 
export default Navbar;