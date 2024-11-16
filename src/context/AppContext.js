import { createContext, useState, useEffect } from "react";
import ProductService from "../services/ProductService";


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [products, setProducts] = useState(null); 
    const [load, setLoad] = useState(true); 
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const productService = new ProductService();
        productService
        .getAllProducts()
        .then((resp) => {
            // console.log("Çekilen ürünler:", resp);
            setTimeout(() => {
                setProducts(resp);
                setLoad(false);
            }, 2000);
        });
    }, []);

    // Context value olarak paylaşılacak state'ler
    const values = {
        products,
        setProducts,
        load,
        setLoad,
        error,
        setError
    };

    return (<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>);
};

export default AppContext;
