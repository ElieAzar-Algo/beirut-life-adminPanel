import { Button, FormControl, Grid, Typography } from '@mui/material';
import { Field, FieldArray } from 'formik';
import { TextField } from 'formik-mui';
import React from 'react';
import { MdAdd, MdDelete } from 'react-icons/md';

const ArrayField = ({ covers, isSubmitting }) => {
  return (
    <FieldArray name="covers">
      {({ push, remove }) => (
        <>
          <Grid item sx={{ padding: 2 }}>
            <Typography variant="h6">Policy Covers:</Typography>
          </Grid>
          {covers?.map((_, index) => (
            <Grid container item key={index} spacing={2}>
              <Grid item container spacing={1} xs={12}>
                <Grid item xs={10}>
                  <FormControl sx={{ width: '100%' }}>
                    <Field
                      component={TextField}
                      type="text"
                      name={`covers.${index}`}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    sx={{ marginTop: 1, minWidth: 110 }}
                    disabled={isSubmitting}
                    variant="outlined"
                    color="error"
                    onClick={() => remove(index)}
                    startIcon={<MdDelete />}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item>
            <Button
              sx={{ marginTop: 2 }}
              disabled={isSubmitting}
              variant="contained"
              onClick={() => push()}
              startIcon={<MdAdd />}
            >
              Add Cover Item
            </Button>
          </Grid>
        </>
      )}
    </FieldArray>
  );
};

export default ArrayField;
