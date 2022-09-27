import { useState, createContext, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../api';

const ProductCtx = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await createAPIEndpoint(ENDPOINTS.PRODUCT).fetch();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchProducts();
  }, []);

  // console.log('--------> products <---------:', products);

  return (
    <ProductCtx.Provider value={{ products, setProducts }}>{children}</ProductCtx.Provider>
  );
};

export { ProductProvider, ProductCtx };
