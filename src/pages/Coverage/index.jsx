import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

import {
  DataGridPro,
  GridActionsCellItem,
  GridRowModes,
  GridToolbarContainer,
} from '@mui/x-data-grid-pro';
import { useContext, useState } from 'react';
import { MdAdd, MdCancel, MdDelete, MdEdit, MdSave } from 'react-icons/md';
import { createAPIEndpoint, ENDPOINTS } from '../../api';
import { StateContext } from '../../context/StateContext';
import { ThemeCtx } from '../../context/ThemeStore';
import { CoverageCtr } from './CoverageStyles';
import { v4 as uuidv4 } from 'uuid';

const initialValues = {
  productCode: '',
  description: '',
  minAge: 0,
  sumInsuredMultiplier: 0,
};

const iconSize = 20;

function EditToolbar(props) {
  const { setCoverages, setRowModesModel } = props;

  const handleClick = () => {
    const id = uuidv4();
    setCoverages((oldRows) => [
      ...oldRows,
      { ...initialValues, id, isNew: true },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'productCode' },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button
        variant="outlined"
        color="success"
        startIcon={<MdAdd size={iconSize} />}
        onClick={handleClick}
        sx={{ m: 1, '&:hover': { backgroundColor: 'green', color: 'white' } }}
      >
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setCoverages: PropTypes.func.isRequired,
};

const Coverage = () => {
  const { closed } = useContext(ThemeCtx);
  const { coverages, setCoverages } = useContext(StateContext);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = async (id) => {
    if (window.confirm('Sure to delete coverage condition ?') === true) {
      await createAPIEndpoint(ENDPOINTS.COVERAGE).delete(id);
      setCoverages(coverages.filter((row) => row.id !== id));
    }
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = coverages.find((row) => row.id === id);
    if (editedRow.isNew) {
      setCoverages(coverages.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = async (newRow) => {
    if (newRow.isNew) {
      delete newRow.isNew;
      await createAPIEndpoint(ENDPOINTS.COVERAGE).post(newRow);
    } else {
      delete newRow.isNew;
      await createAPIEndpoint(ENDPOINTS.COVERAGE).put(newRow.id, newRow);
    }

    const updatedRow = { ...newRow, isNew: false };
    setCoverages(
      coverages.map((row) => (row.id === newRow.id ? updatedRow : row))
    );
    return updatedRow;
  };

  // const { columns } = useColumns(renderActions);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'productCode',
      headerName: 'Product Code',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 200,
      align: 'center',
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 300,
      align: 'center',
      editable: true,
    },
    {
      field: 'minAge',
      headerName: 'Min Age',
      width: 100,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
      editable: true,
    },
    {
      field: 'sumInsuredMultiplier',
      headerName: 'Suminsured Multiplier',
      width: 200,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
      editable: true,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      align: 'center',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<MdSave size={iconSize} color="green" />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<MdCancel size={iconSize} color="darkred" />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<MdEdit size={iconSize} color="blue" />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<MdDelete size={iconSize} color="darkred" />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <CoverageCtr closed={closed} className="text">
      <span className="text">Coverage Matrix</span>
      <Box
        sx={{
          height: 500,
          width: '1004px',
          '& .actions': {
            color: 'text.secondary',
          },
          '& .textPrimary': {
            color: 'text.primary',
          },
        }}
      >
        <DataGridPro
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
          rows={coverages}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          onProcessRowUpdateError={(error) => console.log(error)}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: { setCoverages, setRowModesModel },
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>{' '}
    </CoverageCtr>
  );
};

export default Coverage;
