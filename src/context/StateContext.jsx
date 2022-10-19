import { useState, createContext, useEffect } from 'react';
import { createAPIEndpoint, ENDPOINTS } from '../api';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [coverages, setCoverages] = useState([]);

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

  useEffect(() => {
    async function fetchCoverages() {
      try {
        const { data } = await createAPIEndpoint(ENDPOINTS.COVERAGE).fetch();
        setCoverages(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchCoverages();
  }, []);

  // console.log('--------> products <---------:', products);
  // console.log('--------> coverages <---------:', coverages);

  return (
    <StateContext.Provider
      value={{ products, setProducts, coverages, setCoverages }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext };
