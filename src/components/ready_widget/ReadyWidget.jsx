import React from "react";
import "./readyWidget.scss";
const ReadyWidget = ({ text1, text2, buttonTitle }) => {
  return (
    <div className="readywid_wrapper">
      <h2 className="readywid_text1">{text1}</h2>
      <p className="readywid_text2">{text2}</p>
      <button className="readywid_button">{buttonTitle}</button>
    </div>
  );
};

export default ReadyWidget;
