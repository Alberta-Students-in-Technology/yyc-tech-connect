import React, {useState} from 'react';
import './SuccessBox.css';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
function SuccessBox(props){
    const [style, setStyle] = useState("box");
    const [blur, setBlur] = useState('blur')
    const [total, setTotal] = useState('total')
    const changeStyle = () => {
        setStyle("box2");
        setBlur("blur2")
        setTimeout(function(){setStyle("box3")}, 250)
        setTimeout(function(){setTotal('total2')}, 1000)

        
    }
    return(props.trigger) ? (

        <div className={total}>
            <div className={blur}> </div>
            <div className={style}>
                <div id="successtitle"></div>
                <h2>You have successfully signed into eventbrite!</h2>
                <Button variant="contained" color='success' id='button' onClick={changeStyle}>
                	Continue to the Calendar
                    
                </Button>
            </div>
        </div>

    ) : "";
}
//<!----->
export default SuccessBox
