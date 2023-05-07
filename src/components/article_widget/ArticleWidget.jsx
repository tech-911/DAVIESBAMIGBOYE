import React from "react";
import "./articleWidget.scss";

const ArticleWidget = ({ img, text1, text2 }) => {
  return (
    <div className="articlewid_wrapper">
      <img className="articlewid_img" src={img} alt="articleimg" />
      <h2 className="articlewid_text1">{text1}</h2>
      <p className="articlewid_text2">{text2}</p>
    </div>
  );
};

export default ArticleWidget;
