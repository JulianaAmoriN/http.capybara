import React, { useState } from 'react';
import { Box, Grid2, Card, CardContent, CardMedia, Typography } from '@mui/material';
import StatusDetailPopup from './StatusDetailPopup'; // Importando o pop-up

const introStyles = {
  gridItem: {
    marginBottom: '15px',
  },
  card: {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
  },
  cardMedia: {
    height: '200px',
    objectFit: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '5px 10px',
    borderTop: '2px solid #fff',
    zIndex: 1,
  },
};

function StatusCodeList({ data }) {
  const [selectedStatus, setSelectedStatus] = useState(null); // Estado para controlar o status selecionado

  const handleCardClick = (statusCode) => {
    setSelectedStatus(statusCode); // Altera o estado para abrir o pop-up com os dados do status
  };

  const closePopup = () => {
    setSelectedStatus(null); // Fecha o pop-up ao setar o estado como null
  };

  return (
    <Box sx={{ marginTop: '20px', padding: '20px', borderRadius: '8px' }}>
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((statusCode) => {
          const imagePath = require(`../fakeDB/imagens/${statusCode.imagem}.webp`);

          return (
            <Grid2 item xs={12} sm={6} md={4} sx={introStyles.gridItem} key={statusCode.status}>
              <Card sx={introStyles.card} onClick={() => handleCardClick(statusCode)}>
                <CardMedia
                  component="img"
                  src={imagePath}
                  alt={statusCode.imagem}
                  sx={introStyles.cardMedia}
                />
                <CardContent sx={introStyles.cardText}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    HTTP {statusCode.status}
                  </Typography>
                  <Typography variant="body2">{statusCode.legenda}</Typography>
                </CardContent>
              </Card>
            </Grid2>
          );
        })}
      </Grid2>

      {/* Exibe o pop-up se um status for selecionado */}
      {selectedStatus && <StatusDetailPopup statusCode={selectedStatus} onClose={closePopup} />}
    </Box>
  );
}

export default StatusCodeList;
