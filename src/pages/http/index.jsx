import React from 'react';
import Copyright from '../../components/Copyright';
import { Box, Container, Typography } from '@mui/material';
import NavBar from '../../components/NavBar';

const introStyles = {
  title: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.2rem',
    color: '#666',
    textAlign: 'center',
  },
  container: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Http() {
  return (
    <Box>
      <NavBar />
      <Container sx={introStyles.container}>
        <Typography sx={introStyles.title}>HTTP Capybara Code</Typography>
        <Typography sx={introStyles.description}>
          Em vez de navegar sozinho pelos códigos HTTPs, que tal ser guiado por capybaras?!
        </Typography>
      </Container>
      <p className='colorW'><Copyright /></p>
    </Box>
  );
};

export default Http;
