import React from 'react';
import { useState } from 'react'


export const Input = ({ type, title, rule, regex, changeValue, setValidation }) => {
  const [classes, setClass] = useState('i-mute name-input');
  const[isValid, setValid] = useState(true)
  const handleInput = (e) => {
    if (e.target.value.trim().length && e.target.value.match(regex)) {
      setClass(`i-mute name-input has-value`);
      setValidation(true)
      setValid(true)
      changeValue(e.target.value)
    } else if (!e.target.value.trim().length) {
      setClass(`i-mute name-input`);
      setValidation(false)
      setValid(true)
    } else {
      setClass(`i-mute name-input errInput has-value`);
      setValidation(false)
      setValid(false)
    }
  }
  return (
    <div className="custom-input-block">
      <label>
        <input type={type} onChange={handleInput} className={classes} autoComplete='false' />
        <span className={isValid ? "i-mute-lab" : "i-mute-lab errLabel"}>{title}</span>
      </label>
      <div className={isValid ? 'hideErr' : 'showErr'}>{rule}</div>
    </div>
  )
}