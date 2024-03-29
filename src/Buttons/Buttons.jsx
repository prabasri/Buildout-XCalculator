import React, { useState } from "react";
import styles from './Buttons.module.css'

function Buttons({dataFromChild}) {

  return (
    <div className={styles.buttonsDiv}>
      <div>
        {/* <button onClick={dataFromChild(7)}>7</button>   This is incorrect, because it will trigger all the buttons and leads to too many re-renders and set the value as last buttons text. */}

        <button name="7" onClick={e => dataFromChild(e.target.name)}>7</button>
        <button name="8" onClick={e => dataFromChild(e.target.name)}>8</button>
        <button name="9" onClick={e => dataFromChild(e.target.name)}>9</button>
        <button name="+" onClick={e => dataFromChild(e.target.name)}>+</button>
      </div>
      <div>
        <button name="4" onClick={e => dataFromChild(e.target.name)}>4</button>
        <button name="5" onClick={e => dataFromChild(e.target.name)}>5</button>
        <button name="6" onClick={e => dataFromChild(e.target.name)}>6</button>
        <button name="-" onClick={e => dataFromChild(e.target.name)}>-</button>
      </div>
      <div>
        <button name="1" onClick={e => dataFromChild(e.target.name)}>1</button>
        <button name="2" onClick={e => dataFromChild(e.target.name)}>2</button>
        <button name="3" onClick={e => dataFromChild(e.target.name)}>3</button>
        <button name="*" onClick={e => dataFromChild(e.target.name)}>*</button>
      </div>
      <div>
        <button name="C" onClick={e => dataFromChild(e.target.name)}>C</button>
        <button name="0" onClick={e => dataFromChild(e.target.name)}>0</button>
        <button name="=" onClick={e => dataFromChild(e.target.name)}>=</button>
        <button name="/" onClick={e => dataFromChild(e.target.name)}>/</button>
      </div>
    </div>
  )
}

export default Buttons;