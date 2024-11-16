import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Grid2 } from '@mui/material'; 
import ProductCard from "../../components/productCard/ProductCard";

export default function Products() {
  const { products, load, error } = useContext(AppContext);

  if (load) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Ürünler</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Grid2 container spacing={2}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <Grid2 item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid2>
          ))
        ) : (
          <p>Ürün Bulunamadı</p>
        )}
      </Grid2>
    </div>
  );
}
