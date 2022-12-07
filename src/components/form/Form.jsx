import React, { useState } from 'react'
import Input from './Reusable/Input/input'
import styles from "./form.css"
import PhoneInput from './Reusable/PhoneInput/PhoneInput'

function Form() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  

  const handleSubmit = (e) => {
    e.preventDefault()
    



  }
 
  const saveInputs = (e) => {

  }

  const handleReset = (e) => {
    setFirstName("")
    setLastName("")
    setPhone("")
    setEmail("")
    setPassword("")
    console.log('Form Reset')
  }

    return (
    <div>
        <form>
            <fieldset>
              <Input type="text" name="First Name" />
              <Input type="text" name="Last Name" />
              <PhoneInput name="Phone Number"/>
              <Input type="email" name="Email" />
              <Input type="password" name="Password" />
            </fieldset>
            <button id='submit' type='submit' onClick={handleSubmit} onSubmit={saveInputs}>Submit</button>
            <button id='reset' type='reset' onClick={handleReset}>Reset Form</button>
        </form>
    </div>
  )
}

export default Form