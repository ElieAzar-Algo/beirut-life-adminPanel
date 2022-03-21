import { Routes, Route } from 'react-router-dom';
import Customer from '../pages/Customer';
import Dashboard from '../pages/Dashboard';
import LDSidebar from './LDSidebar';

const LightDarkSidebar = () => {
  return (
    <>
      <LDSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/revenues" element={<Customer />} />
      </Routes>
    </>
  );
};

export default LightDarkSidebar;
