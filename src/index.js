import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tables from './Tables';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import ResultHistory from "./ResultHistory";
import TopScorers from "./TopScorers"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
