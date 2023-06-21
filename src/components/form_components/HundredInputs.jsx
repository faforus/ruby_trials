import React from 'react';
import MuiTextField from './MuiTextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const HundredInputs = () => {
  const submit = () => {
    console.log('Submit');
  };

  const numberOfFields = 100;

  const initialValues = {};
  for (let i = 1; i <= numberOfFields; i++) {
    initialValues[`number${i + 1}`] = '';
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
    return Yup.number().test('over-1000', 'over 1000', function () {
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
          id={`number${index + 1}`}
          name={`number${index + 1}`}
          label={`number-${index + 1}`}
          key={index + 1}
        />
      ));

    const dividedElements = [];
    for (let i = 0; i < elements.length; i += 10) {
      dividedElements.push(elements.slice(i, i + 10));
    }

    return (
      <>
        {dividedElements.map((group, index) => (
          <div className='flex flex-col space-y-2' key={index}>
            <h1>Group {index + 1}</h1>
            {group}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className='flex flex-col lg:flex-row lg:space-x-2'>
      <Formik initialValues={initialValues} onSubmit={submit} validationSchema={validationSchema}>
        {renderElements(100)}
      </Formik>
    </div>
  );
};

export default HundredInputs;
