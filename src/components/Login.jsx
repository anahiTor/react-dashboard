import React from 'react'
import '../assets/scss/login.scss';
import { useState, useEffect } from 'react'
import { Input } from './Input';
import Button from './Button';

export default function Login({ setLogedIn, setLoader }) {
  const [user, setUser] = useState({})
  const [firstStep, setFirstStep] = useState(false)
  const [secondStep, setValidation] = useState(false)
  const [auth, authFailed] = useState(false)
  const getUser = () => {
    fetch('auth.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (userData) {
        return setUser(userData.user)
      });
  }
  useEffect(()=> {
    getUser()
  }, [])
  const inputs = [
    {
      title: 'Email',
      type: 'emial',
      rule: 'Invalid email address',
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      changeValue(value) {
         return user.login === value ? setFirstStep(true) : setFirstStep(false)
      }
    },
    {
      title: 'Password',
      type: 'password',
      rule: 'Wrong Password',
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/,
      changeValue(value) {
        return firstStep && (user.password === value)  ? setValidation(true) : setValidation(false);
      }
    }
  ]



  return (
    <div className='login-wrapper'>
      <h1>Sign In</h1>
      <h4 style={{color: '#fe7c96', display: auth ? 'block' : 'none', marginBottom: '1em'}}>Wrong login or password</h4>
      <div className='login-form'>
        <form action='/'>
          {inputs.map((input, i) => <Input type={input.type} title={input.title} key={i} rule={input.rule} setValidation={setValidation} regex={input.regex} changeValue={input.changeValue}/>)}
          <Button setLogedIn={setLogedIn} setLoader={setLoader} secondStep={secondStep} authFailed={authFailed} firstStep={firstStep}/>
        </form>
      </div>
    </div>
  )
}