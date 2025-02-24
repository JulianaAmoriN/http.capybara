import React from 'react';
import Copyright from '../../components/Copyright';
import { Box, Container, Typography } from '@mui/material';
import NavBar from '../../components/NavBar';
import dados from '../../fakeDB/dados';
import StatusCodeList from '../../components/StatusCodeList';

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
        <Typography sx={introStyles.title}>HTTP Capybara</Typography>
        <Typography sx={introStyles.description}>
            Em vez de navegar sozinho pelos status HTTP, que tal ser guiado por capybaras?!        
        </Typography>
        <StatusCodeList data={dados} />
      </Container>
      <div className='colorW'>
        <Copyright />
      </div>
    </Box>
  );
}

export default Http;
