import {
  ProductCtr,
  ProductImage,
} from '../pages/Products/ProductStyles';

const useColumns = (renderActions) => {
  const renderImage = ({ image, title }) => {
    return (
      <ProductCtr>
        <ProductImage src={image} alt={title} />
        {title}
      </ProductCtr>
    );
  };

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

  return { columns };
};

export default useColumns;
