import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Chart from '../../components/Chart';
import {
  ProductAddButton,
  ProductBottom,
  ProductCtr,
  ProductFormLeft,
  ProductFormRight,
  ProductTitle,
  ProductTop,
} from './ProductStyles';
import { MdEdit, MdPhotoCamera } from 'react-icons/md';
import { ThemeCtx } from '../../context/ThemeStore';
import { createAPIEndpoint, ENDPOINTS } from '../../api';
import { Formik, Form, Field } from 'formik';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  LinearProgress,
  MenuItem,
  Stack,
} from '@mui/material';
import { TextField, Select, Switch } from 'formik-mui';
import ArrayField from '../../components/ArrayField';
import storage from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const productData = [
  {
    name: 'Jan',
    Sales: 4000,
  },
  {
    name: 'Feb',
    Sales: 3000,
  },
  {
    name: 'Mar',
    Sales: 5000,
  },
];

const formFields = [
  { key: 1, xs: 4, name: 'policyCode', label: 'Policy Code' },
  { key: 2, xs: 4, name: 'title', label: 'Title' },
  {
    key: 3,
    xs: 4,
    name: 'category',
    label: 'Category',
    type: 'Select',
    menuItems: ['Accident', 'Travel', 'Medical'],
  },
  { key: 4, xs: 12, name: 'description', label: 'Description' },
  { key: 5, xs: 3, name: 'sumInsured', label: 'Sum Insured', type: 'number' },
  { key: 6, xs: 3, name: 'currency', label: 'Currency' },
  { key: 7, xs: 3, name: 'premium', label: 'Premium', type: 'number' },
  { key: 9, xs: 3, name: 'unit', label: 'Unit' },
  {
    key: 8,
    xs: 6,
    name: 'fixedPremium',
    label: 'Fixed Premium ?',
    type: 'Switch',
  },
  {
    key: 10,
    xs: 6,
    name: 'sumInsuredRemark',
    label: 'Sum Insured Remarks ?',
    type: 'Switch',
  },
  { key: 11, xs: 12, name: 'remark', label: 'Remarks' },
  { key: 12, xs: 12, name: 'intro', label: 'Policy Introduction' },
];

const Product = () => {
  const { productId } = useParams();
  const [prod, setProd] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);
  const [err, setErr] = useState(false);
  const { closed } = useContext(ThemeCtx);
  const [file, setFile] = useState('');
  const [fileurl, setFileurl] = useState('');
  const [percent, setPercent] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    async function fetchProdById() {
      const { data } = await createAPIEndpoint(ENDPOINTS.PRODUCT).fetchById(
        productId
      );
      //   const result = Object.keys(data).map((k) => ({ key: k, value: data[k] }));
      setProd(data);
    }
    fetchProdById();
  }, [productId]);

  const renderText = ({ key, xs, type, label, name }) => {
    return (
      <Grid item xs={xs} key={key}>
        <FormControl sx={{ width: '100%' }}>
          <Field
            component={TextField}
            type={!type ? 'text' : type}
            name={name}
            label={label}
          />
        </FormControl>
      </Grid>
    );
  };

  const renderSelect = ({ key, xs, label, name, menuItems }) => {
    return (
      <Grid item xs={xs} key={key}>
        <FormControl sx={{ width: '100%' }}>
          <Field component={Select} type="text" name={name} label={label}>
            {menuItems.map((mi) => (
              <MenuItem key={mi} value={mi}>
                {mi}
              </MenuItem>
            ))}
          </Field>
        </FormControl>
      </Grid>
    );
  };

  const renderSwitch = ({ key, xs, name, label }) => {
    return (
      <Grid item xs={xs} key={key}>
        <FormControlLabel
          control={<Field component={Switch} type="checkbox" name={name} />}
          label={label}
        />
      </Grid>
    );
  };

  const handleSubmit = async (values) => {
    try {
      if (fileurl !== '') values.image = fileurl;
      await createAPIEndpoint(ENDPOINTS.PRODUCT).put(values.id, values);
      setOpenSnack(true);
    } catch (error) {
      console.log('ERROR ', error);
      setErr(true);
    }
  };

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const handleChange = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please upload an image first!');
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
        setBuffer(10);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileurl(url);
        });
      }
    );
  };

  return (
    <ProductCtr closed={closed}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity={err ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {err
            ? 'Failed to update, check request'
            : 'Product was updated successfully'}
        </Alert>
      </Snackbar>
      {!prod ? (
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="secondary" />
          <CircularProgress color="success" />
          <CircularProgress color="inherit" />
        </Stack>
      ) : (
        <>
          <ProductTitle>
            <h1>{prod.title}</h1>
            <Link to="/product/newproduct">
              <ProductAddButton>Create</ProductAddButton>
            </Link>
          </ProductTitle>
          <ProductTop>
            <Chart
              data={productData}
              dataKey="Sales"
              title="Sales Performance"
            />
          </ProductTop>
          <ProductBottom>
            <Formik initialValues={prod} onSubmit={handleSubmit}>
              {({ values, isSubmitting }) => (
                <Form
                  autoComplete="off"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 10,
                  }}
                >
                  <ProductFormLeft>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        {formFields.map((item) => {
                          if (item.type === 'Select')
                            return renderSelect({ ...item });
                          else if (item.type === 'Switch')
                            return renderSwitch({ ...item });
                          else return renderText({ ...item });
                        })}
                      </Grid>
                      <ArrayField
                        covers={values.covers}
                        isSubmitting={isSubmitting}
                      />
                    </Box>
                  </ProductFormLeft>
                  <ProductFormRight>
                    <div className="productUpload">
                      <img
                        src={values.image}
                        alt={values.title}
                        className="productUploadImg"
                      />
                    </div>
                    <Button
                      onClick={handleUpload}
                      sx={{ marginTop: 3 }}
                      variant="contained"
                      component="label"
                      startIcon={<MdPhotoCamera />}
                    >
                      Change Product Image
                      <input
                        hidden
                        accept="image/*"
                        multiple
                        type="file"
                        onChange={handleChange}
                      />
                    </Button>
                    <Box sx={{ marginTop: 2, width: '100%', maxWidth: 240 }}>
                      <LinearProgress
                        variant="buffer"
                        value={percent}
                        valueBuffer={buffer}
                      />
                    </Box>
                    <p>{percent} "% done"</p>
                    <Button
                      sx={{ marginTop: 24 }}
                      fullWidth
                      disabled={isSubmitting}
                      variant="contained"
                      type="submit"
                      color="success"
                      startIcon={<MdEdit />}
                    >
                      Submit to Update
                    </Button>
                  </ProductFormRight>
                </Form>
              )}
            </Formik>
          </ProductBottom>
        </>
      )}
    </ProductCtr>
  );
};

export default Product;
