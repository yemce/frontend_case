import React, { useState, useEffect } from 'react';
import ProductServices from '../../services/ProductServices';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Ürünleri çekmek için fetchProducts fonksiyonu
  const fetchProducts = async () => {
    try {
      const productData = await ProductServices.getAllProducts(); // Bu satırda hata alıyorsunuz
      setProducts(productData.products || productData); // Eğer products objesi varsa, kullanıyoruz
    } catch (error) {
      console.error("Ürünleri çekerken hata:", error);
      setError("Ürünler alınamadı");
    }
  };

  useEffect(() => {
    fetchProducts(); // component mount olduğunda fetchProducts çağrılır
  }, []);

  return (
    <div>
      <h1>Ürünler</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {products.length > 0 ? (
          products.map(product => (
            <li key={product.id}>{product.title}</li> // veya ürünlerin hangi özelliği varsa onu kullanabilirsiniz
          ))
        ) : (
          <p>Ürünler yükleniyor...</p>
        )}
      </ul>
    </div>
  );
}
