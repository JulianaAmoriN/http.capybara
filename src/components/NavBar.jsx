import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const styles = {
  appBar: {
    borderBottom: '1px solid',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  logo: {
    maxWidth: '50px',
    height: 'auto',
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
};

const NavBar = () => {
  return (
    <AppBar position="static" elevation={0} sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <img src="https://seu-usuario.github.io/http.capybara/logo192.png" alt="Logo" style={styles.logo} />
        <Typography variant="h5" noWrap sx={styles.title}>
          Capybara Dev
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
