import React from 'react'; 
import { Box, Typography , Link } from '@mui/material';

const  Copyright = () => {
  return (
    <Box mt={5}>
      <Typography variant='body2'  align='center'>
        {'Copyright © '}
        <Link color='inherit'  target='_blank' href='https://github.com/JulianaAmoriN'>
          Capybara Dev
        </Link>
      </Typography> 
    </Box>
  );
};
export default Copyright;