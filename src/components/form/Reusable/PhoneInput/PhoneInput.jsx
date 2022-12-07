import React, { useState } from 'react'

function PhoneInput(props) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    
    const handleInput = (e) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputValue(formattedPhoneNumber);
    }

    const handleError = () => {
        if(inputValue == '' || inputValue == null){
        setError(`* ${props.name} is required`)
        }
        
    }

    const handleFocus = () => {
        setError('')
    }

  return (
    <div>
    <label>{props.name}</label>
  <input onChange={e => handleInput(e)} value={inputValue} name={props.name} onBlur={handleError} onFocus={handleFocus} autoComplete='off'/><br></br>
    <label id="error">{error}</label>
  </div>
  )
}

function formatPhoneNumber(value) {
    if(!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0 ,3)}) ${phoneNumber.slice(
        3,
        6,
    )}-${phoneNumber.slice(6, 10)}`

}

export default PhoneInput