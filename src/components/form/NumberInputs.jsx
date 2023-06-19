import React from 'react';
import MuiTextField from './MuiTextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const TenInputs = (props) => {
  const submit = () => {
    console.log('Submit');
  };

  const initialValues = {};
  for (let i = 1; i <= 10; i++) {
    initialValues[`number${i + props.num - 1}`] = '';
  }

  const validationSchema = Yup.object().shape(
    Object.keys(initialValues).reduce((schema, key) => {
      return {
        ...schema,
        [key]: Yup.number().test({
          name: 'sum',
          message: 'over 10000',
          test: function (value) {
            const { path, createError } = this;
            const sum = Object.values(this.parent).reduce((total, num) => total + (num || 0), 0);
            if (sum > 10000) {
              return createError({
                path,
                message: 'over 10000',
              });
            }
            return true;
          },
        }),
      };
    }, {}),
  );

  const renderElements = (number) => {
    const elements = Array(number)
      .fill(null)
      .map((_, index) => (
        <MuiTextField
          type='number'
          id={`number${index + props.num}`}
          name={`number${index + props.num}`}
          label={`number-${index + props.num}`}
          key={index + 1}
        />
      ));

    return <>{elements}</>;
  };

  return (
    <div className='flex flex-col space-y-2'>
      <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
        {renderElements(Object.keys(initialValues).length)}
      </Formik>
    </div>
  );
};

export default TenInputs;
