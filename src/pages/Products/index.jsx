import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { MdAdd } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

// import useColumns from '../../hooks/useColumns';

import {
  ProductsCtr,
  ProductCtr,
  ProductEditBtn,
  ProductDeleteBtn,
  ProductAddBtn,
  ProductAddBtnText,
  ProductImage,
} from './ProductsStyles';
import { StateContext } from '../../context/StateContext';
import { ThemeCtx } from '../../context/ThemeStore';
import { createAPIEndpoint, ENDPOINTS } from '../../api';

const Products = () => {
  const { products, setProducts } = useContext(StateContext);
  const [productData, setProductData] = useState(products);
  const { closed } = useContext(ThemeCtx);

  useEffect(() => setProductData(products), [products]);

  const handleDelete = async (id) => {
    await createAPIEndpoint(ENDPOINTS.PRODUCT).delete(id);
    setProductData(products.filter((d) => d.id !== id));
    setProducts(products);
  };

  const renderActions = ({ id }) => {
    return (
      <>
        <Link to={`/product/${id}`}>
          <ProductEditBtn>Edit Product</ProductEditBtn>
        </Link>
        <ProductDeleteBtn size={30} onClick={() => handleDelete(id)} />
      </>
    );
  };

  const renderImage = ({ image, title }) => {
    return (
      <ProductCtr>
        <ProductImage src={image} alt={title} />
        {title}
      </ProductCtr>
    );
  };

  // const { columns } = useColumns(renderActions);
  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    {
      field: 'title',
      headerName: 'Product',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 300,
      renderCell: (params) => renderImage(params.row),
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 90,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'premium',
      headerName: 'Premium',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'sumInsured',
      headerName: 'Sum Insured',
      width: 110,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 372,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
    },
    {
      field: 'actions',
      headerName: 'Action',
      width: 150,
      sortable: false,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      renderCell: (params) => renderActions(params.row),
    },
  ];

  return (
    <Box>
      <ProductsCtr closed={closed} className="text">
        <span className="text">Products</span>

        <Link to="newproduct" style={{ textDecoration: 'none' }}>
          <ProductAddBtn>
            <MdAdd />
            <ProductAddBtnText>New Product</ProductAddBtnText>
          </ProductAddBtn>
        </Link>
        <DataGrid
          rows={productData}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
          sx={{
            height: 670,
            boxShadow: 2,
            border: 2,
            color: 'var(--text-color)',
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'var(--text-color)',
            },
            '& .super-app-theme--header': {
              backgroundColor: 'var(--green-color)',
            },
            '.MuiTablePagination-root': {
              color: 'var(--text-color)',
            },
          }}
        />
        <Outlet context={{ productData, setProductData }} />
        {/* <Outlet context={userRow} /> */}
      </ProductsCtr>
    </Box>
  );
};

export default Products;
