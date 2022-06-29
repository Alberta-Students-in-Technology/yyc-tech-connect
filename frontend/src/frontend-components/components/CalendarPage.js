import React, { useState } from 'react';
import './CalendarPage.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SuccessBox from './SuccessBox.js';
import {useLocation } from 'react-router-dom';



function CalendarPage(){
   const loc = useLocation();

    return(
    
    
        <div id='page'>
            <div id='backgroundimage2'>

            </div>
            <div id='outline'>
                <div id="retitle"></div>
                <iframe 
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffbe4a&ctz=America%2FEdmonton&showTitle=0&showCalendars=1&src=Y2t1Y25xYWFobTIxczVyZmdudjM2MzRvOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=anZ0NWhobXJmYm5raml2Zm1zZmpvbXNlMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%23D50000">
                </iframe>
            </div> 
            
		{loc.pathname !== '/view' && <SuccessBox trigger={true}/> }
        </div>
            
        
    )
}
export default CalendarPage
