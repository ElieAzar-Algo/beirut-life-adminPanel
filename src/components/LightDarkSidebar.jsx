import { Routes, Route } from 'react-router-dom';
import Customer from '../pages/Customer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Products/Product';
import NewProduct from '../pages/Products/NewProduct';
import { LDSidebar } from '../components';
import NoMatch from './NoMatch';

const LightDarkSidebar = () => {
  return (
    <>
      <LDSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/product/newproduct" element={<NewProduct />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default LightDarkSidebar;
