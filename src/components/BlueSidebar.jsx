import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Customer from '../pages/Customer';
import Home from '../pages/Home';

const BlueSidebar = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <Sidebar toggled={toggled} />
      <Topbar toggled={toggled} toggle={() => setToggled(!toggled)} />
      <Routes>
        <Route path="/" element={<Home toggled={toggled} />} />
        <Route path="/customer" element={<Customer toggled={toggled} />} />
      </Routes>
    </>
  );
};

export default BlueSidebar;
