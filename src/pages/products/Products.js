import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Grid, Box} from "@mui/material";
import ProductCard from "../../components/productCard/ProductCard";
import FilterBar from "../../components/filter/FilterBar";
import './Products.css'; // Add a CSS file to style the product list container

export default function Products() {
  const { products, load, error } = useContext(AppContext);

  if (load) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Filter Sidebar */}
      <div style={{ width: '250px', marginRight: '20px' }}>
        <FilterBar/>
      </div>

      {/* Product List */}
      <div className="product-list-container">
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Box 
        display="flex"
        justifyContent={products.length === 1 ? 'flex-start' : 'center'}
        flexWrap="wrap">
        <Grid container spacing={2}>
          {products && products.length > 0 ? (
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))
          ) : (
            <p>Ürün Bulunamadı</p>
          )}
        </Grid>
        </Box>
       
      </div>
    </div>
  );
}
