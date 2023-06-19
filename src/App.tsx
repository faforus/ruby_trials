import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './layout/Navigation';
import MyRoutes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Navigation />
          <MyRoutes />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
