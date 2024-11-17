import React from 'react';
import { Card, CardContent, CardMedia, Typography, Rating, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 250, height: '100%' }}>  {/* Height %100 ile kartları eşitleme */}
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* İçerik kısmını flex ile hizalama */}
        <Typography variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">${product.price}</Typography>
          {product.discountPercentage > 0 && (
            <Typography variant="body2" color="error">
              -{product.discountPercentage.toFixed(0)}%
            </Typography>
          )}
        </Box>
        <Box display="flex" alignItems="center" mt={1}>
          <Rating value={product.rating} readOnly />
          <Typography variant="body2" ml={1}>
            ({product.reviews.length} Yorum)
          </Typography>
        </Box>
        <Typography variant="body2" mt={1} color="textSecondary">
          Stok Durumu: {product.availabilityStatus}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
