import React from "react";
import "./access.scss";
import { FaGraduationCap } from "react-icons/fa";

const Access = () => {
  return (
    <div className="access_wrapper">
      <div className="access_overlay"></div>
      <div className="access_notes">
        <p className="access_text1">Get Instant Access to the Free</p>
        <h1 className="access_text2">Self Development Course</h1>
        <p className="access_text3">
          Learn about how them you went down prying the wedding ring off his
          cold, dead finger. I don't know what you did, Fry, but once again, you
          screwed up!
        </p>
        <button className="access_button">
          <FaGraduationCap className="access_button_icon"/>
          Start for Free
        </button>
      </div>
    </div>
  );
};

export default Access;
