import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CalendarPage from './frontend-components/components/CalendarPage';
import Favicon from 'react-favicon';
import t from "./favicon-imgs/1.png";
import e from "./favicon-imgs/2.png";
import c from "./favicon-imgs/3.png";
import h from "./favicon-imgs/4.png";
import o from "./favicon-imgs/5.png";
import n from "./favicon-imgs/6.png";
import c2 from "./favicon-imgs/tower.png";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Favicon url={[t,e,c,h,c2,c,o,n,n,e,c,]}/>
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
