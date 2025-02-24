import React, { useState } from 'react';
import { Box, Grid2, Typography, Card, CardContent, CardMedia } from '@mui/material';

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
    transition: 'filter 0.3s ease',
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
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <Box sx={{ marginTop: '20px', padding: '20px', borderRadius: '8px' }}>
      <Grid2 container spacing={3} justifyContent="center">
        {data.map((statusCode) => {
          const imagePath = require(`../fakeDB/imagens/${statusCode.imagem}.webp`);

          return (
            <Grid2 xs={12} sm={6} md={4} sx={introStyles.gridItem} key={statusCode.status}>
              <Card sx={introStyles.card}>
                <CardMedia
                  component="img"
                  src={imagePath}
                  alt={statusCode.imagem}
                  sx={{
                    ...introStyles.cardMedia,
                    filter: hoveredImage === statusCode.status ? 'none' : 'blur(2px)',
                  }}
                  onMouseEnter={() => setHoveredImage(statusCode.status)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
                <CardContent
                  sx={introStyles.cardText}
                  onMouseEnter={() => setHoveredImage(statusCode.status)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
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
    </Box>
  );
}

export default StatusCodeList;
