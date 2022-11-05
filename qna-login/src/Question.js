import React, { useState } from "react";
import ChangeBtn from "./ChangeBtn";

const Question = ({ title, info, name, symbol }) => {
  const [showInfo, setShowInfo] = useState(false);
  //btnSymbol change test failed (>*<)
  const [setBtn] = useState(ChangeBtn);

  return (
    <article className="question">
      <header>
        <h3>{title}</h3>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          +
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
