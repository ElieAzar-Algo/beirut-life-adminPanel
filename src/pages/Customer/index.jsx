import { useContext } from 'react';
import { ThemeCtx } from '../../context/ThemeStore';
import { CustomerCtr } from './CustomerStyles';

const Customer = () => {
  const { closed } = useContext(ThemeCtx);
  return (
    <CustomerCtr closed={closed} className="text">
      <span className="text">Customers</span>
    </CustomerCtr>
  );
};

export default Customer;
