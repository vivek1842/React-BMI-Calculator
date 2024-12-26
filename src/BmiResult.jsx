import React from 'react';

function BmiResult({ bmi, message }) {
  return (
    <div className='center'>
      <h3>Your BMI is: {bmi}</h3>
      <p>{message}</p>
    </div>
  );
}

export default BmiResult;
