import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  A: Yup.string().required('A is required'),
  B: Yup.string().test('invalid-b', 'B is invalid', function (value) {
    const { A } = this.parent;

    if (A && A.length > 10 && !value) {
      return false;
    }

    return true;
  }),
});

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center min-h-[200px]'>
        <Formik
          initialValues={{ A: '', B: '' }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validationSchema}
          initialTouched={{ B: true }}
        >
          {({ isSubmitting, errors }) => (
            <Form className='flex flex-col space-y-2'>
              <Field className='textInput' name='A' type='text' />
              <ErrorMessage name='A' component='div' className='text-red-500' />
              <Field
                className={`textInput ${
                  errors.B && 'border-2 border-red-500 focus:outline-red-500'
                }`}
                name='B'
                type='text'
              />
              <ErrorMessage name='B' component='div' className='text-red-500' />
              <button
                type='submit'
                className='p-4 bg-orange-400 hover:bg-orange-500 rounded-xl shadow-md text-white font-semibold tracking-widest'
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </HelmetProvider>
  );
};

export default Home;
