// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'; // Material UI bileşenlerini import ettik
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ marginTop: 2 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <Button size="small" color="primary" sx={{ marginBottom: 2 }}>
        Sepete Ekle
      </Button>
    </Card>
  );
};

export default ProductCard;
