import React, { useState } from "react";
import Buttons from '../Buttons/Buttons';

function Calculator () {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);

  const callback = (childData) => {
    if(childData === "C") {
      setValue("");
      setResult("")
      setIsCalculated(false);

    } else if(childData === "=") {
      console.log("Entered for calculation");
      console.log(value);
      setIsCalculated(true);
      if(value === "") {
        setResult("Error");
      } else {
        setResult(eval(value));
      }

    } else {
      setValue(value + childData);
    }
  }
  
  console.log(isCalculated);
  console.log(result);

  return (
    <div>
      <h1>React Calculator</h1>
      <input value={value} readOnly/>
      {isCalculated ? <div>{result}</div> : null}
      <Buttons dataFromChild = {callback} />
    </div>
  )
}

export default Calculator;