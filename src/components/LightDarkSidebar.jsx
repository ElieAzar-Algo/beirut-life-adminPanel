import { Routes, Route } from 'react-router-dom';
// import Customer from '../pages/Customer';
import Products from '../pages/Products';
import Product from '../pages/Products/Product';
import NewProduct from '../pages/Products/NewProduct';
import { LDSidebar } from '../components';
import NoMatch from './NoMatch';
import Coverage from '../pages/Coverage';
import Dashboard from '../pages/Dashboard';
import Login from '../components/Login';
import { useAuth } from './Login/auth';
import { RequireAuth } from './Login/RequireAuth';

const LightDarkSidebar = () => {
  const auth = useAuth()
  return (
    <>
      <LDSidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<RequireAuth><Products /></RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/product" element={<RequireAuth><Products /></RequireAuth>} />
        <Route path="/product/:productId" element={<RequireAuth><Product /></RequireAuth>} />
        <Route path="/product/newproduct" element={<RequireAuth><NewProduct /></RequireAuth>} />
        <Route path="/coverage" element={<RequireAuth><Coverage /></RequireAuth>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default LightDarkSidebar;
