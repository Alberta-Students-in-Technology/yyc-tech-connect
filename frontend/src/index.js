import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import c from './favicon/1.png';
import a from './favicon/5.png';
import l from './favicon/3.png';
import g from './favicon/4.png';
import r from './favicon/6.png';
import y from './favicon/7.png';

import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CalendarPage from './components/CalendarPage';
import SuccessBox from './components/SuccessBox';
import Favicon from 'react-favicon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={[c,a,l,g,a,r,y]}/>
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
