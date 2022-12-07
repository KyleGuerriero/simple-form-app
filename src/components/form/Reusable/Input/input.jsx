import React, { useState } from 'react'
import styles from "./styles.css"

function Input(props) {
  const [text, setText] = useState('')
  const [error, setError] = useState('')

  const handleOnBlur = () => {
    if(text == '' || text == null) {
      setError(`* ${props.name} is required`)
    }}

  const handleFocus = () => {
      setError('')
  }

  const handleTyping = (e) => {
    setText(e.target.value)

  }
  

  return (
    <div>
      <label>{props.name}</label>
      <input type={props.type} name={props.name} label={props.name} onBlur={handleOnBlur} onChange={handleTyping} onFocus={handleFocus} autoComplete='off'></input><br></br>
      <label id="error">{error}</label>
    </div>
  )
}

export default Input