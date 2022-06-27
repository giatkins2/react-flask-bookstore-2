import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from './context/ThemeContext';
import AppContextProvider from "./context/AppContext";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
        <AppContextProvider>
          <CssBaseline />
          <App />
        </AppContextProvider>
      </ThemeProvider>
    </BrowserRouter>   
  </React.StrictMode>
);

reportWebVitals();
