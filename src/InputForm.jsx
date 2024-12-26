import React from 'react';

function InputForm({ weight, height, setWeight, setHeight, calcBmi, reload }) {
  return (
    <form onSubmit={calcBmi}>
      <div>
        <label>Weight (kg)</label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(e.target.value)} 
        />
      </div>

      <div>
        <label>Height (cm)</label>
        <input 
          type="number" 
          value={height} 
          onChange={(e) => setHeight(e.target.value)} 
        />
      </div>

      <div>
        <button className='btn' type='submit'>Submit</button>
        <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
      </div>
    </form>
  );
}

export default InputForm;
