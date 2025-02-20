import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

// Estilos fora da função
const styles = {
  appBar: {
    borderBottom: '1px solid',
    borderRadius: 15,
    backgroundColor: '#cd8c52',
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
        {/* Logo com estilo de tamanho ajustado */}
        <img src="/logo192.png" alt="Logo" style={styles.logo} />
        <Typography variant="h6" noWrap sx={styles.title}>
          Capybara Dev
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
