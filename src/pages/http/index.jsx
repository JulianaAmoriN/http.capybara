import React from 'react';
import Copyright from '../../components/Copyright';
import { Grid2 } from '@mui/material';
import NavBar from '../../components/NavBar';

function Http() {
    return (
        <Grid2>
            <NavBar/>
            <p className='colorW'><Copyright/></p>
        </Grid2>
    );
};

export default Http;
