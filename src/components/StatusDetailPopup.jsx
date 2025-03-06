import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

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
    maxHeight: '80vh',   // Limita a altura máxima do Card
    overflowY: 'auto',   // Aplica o scroll no Card inteiro
  },
};

const StatusDetailPopup = ({ statusCode, onClose }) => {
  if (!statusCode) return null;

  const imagePath = require(`../fakeDB/imagens/${statusCode.imagem}.webp`);

  return (
    <Box sx={popupStyles.overlay} onClick={onClose}>
      <Card sx={popupStyles.card} onClick={(e) => e.stopPropagation()}>
        <img 
          src={imagePath} 
          alt={statusCode.imagem} 
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
        />
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
      </Card>
    </Box>
  );
};

export default StatusDetailPopup;
