"use client";
import { Squar } from "./Square";
import { useState } from "react";
import pageStyles from "./page.module.css";
export default function Page() {
  const [inc, setInc] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const incHandler = () => {
    const incd = inc.sort((a, b) => a - b);
    setInc([...inc]);
  };
  const decHandler = () => {
    const dec = inc.sort((a, b) => b - a);
    setInc([...dec]);
  };
  return (
    <div className={pageStyles.body}>
      <div className={pageStyles.buttons}>
        <button onClick={incHandler}>Inc</button>
        <button onClick={decHandler}>Dec</button>
      </div>
      <Squar value={inc} />
    </div>
  );
}
