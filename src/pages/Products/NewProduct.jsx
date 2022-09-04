import { useContext } from 'react';
import { ProductsCtr } from './ProductsStyles';
import { ThemeCtx } from '../../context/ThemeStore';

const NewProduct = () => {
  const { closed } = useContext(ThemeCtx);

  return <ProductsCtr closed={closed}>NewProduct</ProductsCtr>;
};

export default NewProduct;
