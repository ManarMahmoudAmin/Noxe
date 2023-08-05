import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import AuthContextProvider from './Context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App/>
  </AuthContextProvider>
);

reportWebVitals();

