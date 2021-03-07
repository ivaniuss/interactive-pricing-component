import React, { useState, useEffect} from 'react'
import Sliderr from './Slider'
import SwitchButton from './Switch'
import logo from '../images/icon-check.svg'

const Card = () => {

const card = {
    margin: '0 auto',
    width: '500px',
    height: 'auto',
    backgroundColor:'white',
    'border-radius':'7px',
    
}

const cardTopBottom = {
    display:'flex',
    'flex-direction': 'row',
    'justify-content':'space-between',
    width:'80%',
    margin:'0 auto',
}


const billingInformation = {
    display:'flex',
    'flex-direction': 'row',
    gap:'8px',
    'margin-top':'5%',
    'margin-left':'30%',
    'margin-right':'10%',
    'font-size':'11px',
}

const button = {
    backgroundColor:'hsl(227, 35%, 25%)',
    color:'hsl(0, 0%, 90%)',
    padding:'5px 30px 5px 30px',
    border:0,
    'border-radius':'20px',
    height:'30px',
    'margin-top':'5%',
}

const discount = {
    backgroundColor: 'hsl(14, 92%, 95%)',
    color:'hsl(15, 100%, 70%)',
    'border-radius':'10px',
    'padding-left':'5px',
    'padding-right':'5px',
}

const text={
    color:'hsl(225, 20%, 60%)',
    'font-size':'11px',
    'line-height':'10px',
}

const [value, setValue] = useState(20);
const [month, setMontly] = useState(false);

const handleChange = (event, newValue)=> {
  setValue(newValue);
}

const handleMonth = () => {
    setMontly(!month);
}

//
return (
        <div style={card}>
            <div style={cardTopBottom}>
                <h3 style={text} >{value}k PAGEVIEWS</h3>
                <h2>${month?((value/6.26).toFixed(2)):((value/6.26)-((value/6.26)*0.25)).toFixed(2)}<span id='month' style={text}> /month</span></h2>
            </div>
            <div className='card-middle'>
                <Sliderr onChange={handleChange} />
                <div style={billingInformation}>
                    <p>Montly Billing</p>
                    <SwitchButton onClick={handleMonth} />
                    <p>Yearly Billing</p>
                    <p style={discount}>25 % discount</p>
                </div>
            </div>
            <hr style={{'margin-top':'10%', opacity:'10%'}}/>
            <div style={cardTopBottom}>
                <div className='bottom-information' style={{'margin-bottom':'7%'}}>
                    <p style={text}> <img src={logo}/> Unlimited websites</p>
                    <p style={text}> <img src={logo}/> 100% data ownership</p>
                    <p style={text}> <img src={logo}/> Email reports</p>
                </div>
                <button style={button} >
                    Start my trial
                </button>
            </div>
        </div>
    )
}
export default Card