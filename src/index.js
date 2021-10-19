import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import './fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { responsiveTheme } from './utils/responsiveTheme';
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
