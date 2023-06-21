import React from 'react';
import MuiTextField from './MuiTextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const TenInputs = (props) => {
  const submit = () => {
    console.log('Submit');
  };

  const numberOfFields = 100;

  const initialValues = {};
  for (let i = 1; i <= numberOfFields; i++) {
    initialValues[`number${i + props.num - 1}`] = '';
  }

  const fieldsPerGroup = 10;
  const validationSchemaFields = {};
  for (let i = 1; i <= numberOfFields; i++) {
    const groupIndex = Math.ceil(i / fieldsPerGroup);
    const functionIndex = (groupIndex - 1) * fieldsPerGroup + 1;
    validationSchemaFields[`number${i}`] = createNumberValidation(functionIndex);
  }

  const validationSchema = Yup.object().shape(validationSchemaFields);

  function createNumberValidation(num) {
    return Yup.number().test('invalid-number', 'over 1000', function () {
      const allValues = this.parent;

      let sum = 0;
      for (let i = num; i <= num + 10; i++) {
        const fieldName = `number${i}`;
        const fieldValue = allValues[fieldName];
        if (typeof fieldValue === 'number') {
          sum += fieldValue;
        }
      }

      if (sum > 10000) {
        return false;
      }

      return true;
    });
  }

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
      <Formik
        initialValues={initialValues}
        onSubmit={submit}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {renderElements(100)}
      </Formik>
    </div>
  );
};

export default TenInputs;
