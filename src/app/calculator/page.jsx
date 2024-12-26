"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
export default function Page() {
  const [screen, setScreen] = useState("");
  const [operation, setOperation] = useState("");
  function buttonClicked(value) {
    switch (value) {
      case "+":
        setOperation("+");
        break;
      case "-":
        setOperation("-");
        break;
      case "*":
        setOperation("*");
        break;
      case "/":
        setOperation("/");
        break;
    }
    setScreen(screen + value);
  }

  function operationHandler() {
    const nums = screen.split(operation);
    let result = 0;
    switch (operation) {
      case "+":
        setScreen(Number(nums[0]) + Number(nums[1]));
        break;
      case "-":
        setScreen(Number(nums[0]) - Number(nums[1]));
        break;
      case "*":
        setScreen(Number(nums[0]) * Number(nums[1]));
        break;
      case "/":
        setScreen(Number(nums[0]) / Number(nums[1]));
        break;
    }
  }
  function clear() {
    setScreen("");
  }
  return (
    <div className={styles.container}>
      <p className={styles.screen}>{screen}</p>
      <div className={styles.buttons}>
        <button onClick={() => buttonClicked(1)}>1</button>
        <button onClick={() => buttonClicked(2)}>2</button>
        <button onClick={() => buttonClicked(3)}>3</button>
        <button onClick={() => buttonClicked(4)}>4</button>
        <button onClick={() => buttonClicked(5)}>5</button>
        <button onClick={() => buttonClicked(6)}>6</button>
        <button onClick={() => buttonClicked(7)}>7</button>
        <button onClick={() => buttonClicked(8)}>8</button>
        <button onClick={() => buttonClicked(9)}>9</button>
        <button onClick={() => buttonClicked(0)}>0</button>
        <button onClick={() => buttonClicked("+")}>+</button>
        <button onClick={() => buttonClicked("-")}>-</button>
        <button onClick={() => buttonClicked("*")}>*</button>
        <button onClick={() => buttonClicked("/")}>/</button>
        <button onClick={() => buttonClicked("%")}>%</button>
        <button onClick={clear}>C</button>
        <button onClick={operationHandler}>=</button>
      </div>
    </div>
  );
}
