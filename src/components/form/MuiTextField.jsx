import React from 'react';
import { useField } from 'formik';
import { TextField, FormHelperText } from '@mui/material';

const MuiTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const isInvalid = Boolean(meta.error);

  return (
    <>
      <TextField {...field} {...props} label={label} error={isInvalid} />
      {isInvalid && <FormHelperText error>{meta.error}</FormHelperText>}
    </>
  );
};

export default MuiTextField;
