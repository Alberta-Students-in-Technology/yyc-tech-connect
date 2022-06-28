import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CalendarPage from './components/CalendarPage';
import SuccessBox from './components/SuccessBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <Routes>
    <Route  path='/' exact element = {<App />} />
    <Route path='/main/:token' exact element = {<CalendarPage />} />
    <Route path='/view' exact element = {<CalendarPage/>} />
    
    </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
