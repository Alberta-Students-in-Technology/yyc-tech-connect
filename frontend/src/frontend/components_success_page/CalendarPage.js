import React, { useState } from 'react';
import './CalendarPage.css';
import VerticalTabs from './Tab.js'
import './Page.png'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function CalendarPage(){
    const [options, setOptions] = useState("options2");
    const [tabscontainer, setTab] = useState('tabscontainer2')
    var counter = 1
    const [optionst, setOptionst] = useState('optionst2')
    var changeOptions = () => {
        if (counter == 1){
            setOptions("options");
            setOptionst('optionst')
            setTab('tabscontainer')
            counter = 2
        }else{
            setOptions("options2");
            setOptionst('optionst2')
            setTab('tabscontainer2') 
            counter = 1
        }
        
        
    }
    return(
        <div id='page'>
            <h1 id='ctitle'>YYC ConnecTech</h1>
            <div id='outline'>
                <iframe 
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffbe4a&ctz=America%2FEdmonton&showTitle=0&showCalendars=1&src=Y2t1Y25xYWFobTIxczVyZmdudjM2MzRvOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=anZ0NWhobXJmYm5raml2Zm1zZmpvbXNlMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%234285F4&color=%23D50000">
                </iframe>
            </div> 
            <div className={options} style={{backgroundImage:'Page.png'}}>
                <div id='pull-tab' onClick={changeOptions}>
                </div>
                <h2 className={optionst}>Options</h2>
                <div className={tabscontainer}>
                    <VerticalTabs>
                    </VerticalTabs>
                </div>

            </div> 
        </div>
            
        
    )
}
export default CalendarPage
