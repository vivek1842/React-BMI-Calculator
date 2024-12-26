import "./App.css";
import "./index.css";
import React, { useState } from "react";
import InputForm from "./InputForm";
import BmiResult from "./BmiResult";

function App() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (((height / 100) * height) / 100);
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You are a healthy weight");
      } else if (bmi >= 30 && bmi < 39.9) {
        setMessage("You are an overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>

        <InputForm
          weight={weight}
          height={height}
          setWeight={setWeight}
          setHeight={setHeight}
          calcBmi={calcBmi}
          reload={reload}
        />

        <BmiResult bmi={bmi} message={message} />
      </div>
    </div>
  );
}

export default App;
