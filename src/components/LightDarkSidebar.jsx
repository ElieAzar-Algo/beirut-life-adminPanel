import { Routes, Route } from 'react-router-dom';
// import Customer from '../pages/Customer';
import Products from '../pages/Products';
import Product from '../pages/Products/Product';
import NewProduct from '../pages/Products/NewProduct';
import { LDSidebar } from '../components';
import NoMatch from './NoMatch';
import Coverage from '../pages/Coverage';
import Dashboard from '../pages/Dashboard';

const LightDarkSidebar = () => {
  return (
    <>
      <LDSidebar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/product/newproduct" element={<NewProduct />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default LightDarkSidebar;
