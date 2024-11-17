import { createContext, useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { filterProducts } from "../components/filter/Filter";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(null); 
  const [load, setLoad] = useState(true); 
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    priceRange: [0, 100],
    category: '', 
    brand: '', 
    rating: 0, 
    stockStatus: '', 
    discount: false, 
    newProducts: false,
    search :""
  });

  useEffect(() => {
    const productService = new ProductService();
    productService
      .getAllProducts()
      .then((resp) => {
        setTimeout(() => {
          setProducts(resp);
          setLoad(false);
        }, 1000);
      });
  }, []);

  // Use the imported filterProducts function to get the filtered list
  const filteredProducts = filterProducts(products, filters);

  const values = {
    products: filteredProducts,
    setProducts,
    load,
    setLoad,
    error,
    setError,
    filters,
    setFilters
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
