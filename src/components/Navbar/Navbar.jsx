import React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

function Navbar() {
    return (
        <nav>
            <Typography 
                sx = {{m:2, display:'inline-block'}}
                variant='h4'>GIPHY SEARCH</Typography>
            <Button
                sx = { {m:2, display:'inline-block'} }
            >HOME</Button>
            <Button
                sx = { {m:2, display:'inline-block'} }>FAVORITES</Button>



        </nav>
    )

} 
export default Navbar;