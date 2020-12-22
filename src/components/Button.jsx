import React from 'react';
import '../assets/scss/button.scss';

const Button = ({setLogedIn, setLoader, secondStep, authFailed,firstStep}) => {
  const handleLogin = () => {
    setTimeout(()=> {
      setLoader(false)
    }, 2000)
    return  secondStep && firstStep ? setLogedIn(true) : authFailed(true)
  }

  return (
    <div className="custom-button-block" >
      <button type='submit' className={!firstStep && !secondStep ? 'custom-button invalid': 'custom-button'} onClick={handleLogin}>Log In</button>
    </div>
  )
}

export default Button