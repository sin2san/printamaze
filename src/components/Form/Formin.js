import React, { useState } from 'react';
import './Form.css';
import FormSuccessin from './FormSuccessin';
import FormSignin from './FormSigin';



const Formin = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          {!isSubmitted ? (
            <FormSignin submitForm={submitForm} />
          ) : (
            <FormSuccessin />
          )}
        </div>
    );
  };
  
  export default Formin;