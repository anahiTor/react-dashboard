import React from 'react';
import '../assets/scss/loader.scss';


const Loader = () => {
  return(
    <div className='loading-wrapper'>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;