import React from "react";
import "./service.scss";
import davis from "../../assets/png/davis_circle.png";
import {
  FaRegUser,
  FaBullseye,
  FaPagelines,
  FaCottonBureau,
} from "react-icons/fa";
const Service = () => {
  return (
    <div className="service_wrapper">
      <div className="service_header_wrap">
        <h1 className="service_header_text1">I can help you with</h1>
        <p className="service_header_text2">
          Most frequent questions and answers
        </p>
      </div>
      <div className="service_body">
        <div className="service_body1">
          <FaRegUser className="service_icon1" />
          <h1 className="service_text_big1">1:1 Coaching</h1>
          <p className="service_small1">
            Magnetized strongly enough pre vending domain overeus all initial
            results to estimate.
          </p>
          <FaBullseye className="service_icon2" />
          <h1 className="service_text_big2">Life programs</h1>
          <p className="service_small2">
            Magnetized strongly enough pre vending domain overeus all initial
            results to estimate.
          </p>
        </div>
        <img src={davis} alt="davis" className="service_body2" />
        <div className="service_body3">
          <FaCottonBureau className="service_icon3" />
          <h1 className="service_text_big3">1:1 Coaching</h1>
          <p className="service_small3">
            Magnetized strongly enough pre vending domain overeus all initial
            results to estimate.
          </p>
          <FaPagelines className="service_icon4" />
          <h1 className="service_text_big4">Life programs</h1>
          <p className="service_small4">
            Magnetized strongly enough pre vending domain overeus all initial
            results to estimate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
