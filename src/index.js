import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals/reportWebVitals';
import AppRoutes from './appRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>
);

reportWebVitals();
