import React from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';

const popupStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  card: {
    position: 'relative',
    maxWidth: '500px',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    zIndex: 1100,
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '20px',
  }
};

const StatusDetailPopup = ({ statusCode, onClose }) => {
  if (!statusCode) return null;

  const imagePath = require(`../fakeDB/imagens/${statusCode.imagem}.webp`);

  return (
    <Box sx={popupStyles.overlay} onClick={onClose}>
      <Card sx={popupStyles.card} onClick={(e) => e.stopPropagation()}>
        <IconButton 
          sx={popupStyles.closeButton} 
          onClick={onClose}
          aria-label="close"
        >
          <XIcon />
        </IconButton>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Status {statusCode.status}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px', fontStyle: 'italic' }}>
            {statusCode.legenda}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '15px' }}>
            {statusCode.descricao}
          </Typography>
          {statusCode.adicional && (
            <Typography variant="body2" sx={{ marginTop: '20px' }}>
                {statusCode.adicional}
            </Typography>
          )}
        </CardContent>
        <img 
          src={imagePath}
          alt={statusCode.imagem}
          style={popupStyles.image}
        />
      </Card>
    </Box>
  );
};

export default StatusDetailPopup;
