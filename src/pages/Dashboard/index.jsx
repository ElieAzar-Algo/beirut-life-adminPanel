import { useContext } from 'react';
import { ThemeCtx } from '../../context/ThemeStore';
import { DashboardCtr } from './DashboardStyles';

const Dashboard = () => {
  const { closed } = useContext(ThemeCtx);
  return (
    <DashboardCtr closed={closed} className="text">
      <span className="text">Dashboard</span>
    </DashboardCtr>
  );
};

export default Dashboard;
