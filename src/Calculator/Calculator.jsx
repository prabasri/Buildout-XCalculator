import React, { useState } from "react";
import Buttons from '../Buttons/Buttons';

function Calculator () {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [isCalculated, setIsCalculated] = useState(false);
  // let result;

  const callback = (childData) => {
    if(childData === "C") {
      setValue("");
      // result = "";
      setResult("")
      setIsCalculated(false);

    } else if(childData === "=") {
      console.log("Entered for calculation");
      setIsCalculated(true);
      console.log(value);
      setResult(eval(value))
      console.log(typeof result);
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
      {isCalculated ? <div>{result.toString()}</div> : null}
      <Buttons dataFromChild = {callback} />
    </div>
  )
}

export default Calculator;