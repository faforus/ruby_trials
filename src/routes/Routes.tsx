import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Spinner from '../components/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Wifi = lazy(() => import('../pages/Wifi'));
const Nfc = lazy(() => import('../pages/Nfc.jsx'));
const Bluetooth = lazy(() => import('../pages/Bluetooth'));

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='wifi'
          element={
            <Suspense fallback={<Spinner />}>
              <Wifi />
            </Suspense>
          }
        />
        <Route
          path='nfc'
          element={
            <Suspense fallback={<Spinner />}>
              <Nfc />
            </Suspense>
          }
        />
        <Route
          path='bluetooth'
          element={
            <Suspense fallback={<Spinner />}>
              <Bluetooth />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Spinner />}>
              <ErrorPage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default MyRoutes;
