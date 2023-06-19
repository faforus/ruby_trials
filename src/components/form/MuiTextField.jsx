import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

const MuiTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const isInvalid = Boolean(meta.error);

  return <TextField {...field} {...props} label={label} error={isInvalid} />;
};

export default MuiTextField;
